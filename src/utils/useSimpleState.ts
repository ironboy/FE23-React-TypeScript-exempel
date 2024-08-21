import { useState, useEffect, useDebugValue } from 'react';

function proxify(obj: any, setter: Function) {
  // avoid proxying a proxy object
  obj.__orgObj && (obj = obj.__orgObj);
  obj.__orgObj = obj;
  // add the onChange method
  obj.onChange = onChange;
  // return a proxy object where 
  // changing a property calls useState set
  return new Proxy(obj, {
    set(obj, prop, value) {
      if (obj[prop] === value) { return false; /* no change */ }
      obj.__changed = { prop, oldValue: obj[prop], value }
      obj[prop] = value;
      setter(proxify(obj, setter));
      return true;
    }
  });
}

function onChange(this: any, propToListenFor: string, func: Function) {
  useEffect(() => {
    let { prop, value, oldValue } = this.__changed || {};
    // check that there really is a change, if so run the listener
    prop === propToListenFor && (async () => {
      let result = await func(value, oldValue);
      // if the onChange function returns a value set the property to it
      result !== undefined && (this[propToListenFor] = result);
    })();
  }, [this[propToListenFor]]);
}

export default function useSimpleState(object: any) {
  const [value, setter] = useState(object);
  const debugValue = Object.fromEntries(
    Object.entries(value).filter(([key, val]) =>
      key.indexOf('__') !== 0 && typeof val !== 'function')
  );
  useDebugValue(debugValue);
  return proxify(value, setter);
}
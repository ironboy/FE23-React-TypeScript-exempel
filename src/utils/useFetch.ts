import { ResponseMethodNames } from '../interfacesAndTypes';
import { useEffect } from 'react';

export default function useFetch(
  when: string | any[], url: string, options: any = {},
  responseType: ResponseMethodNames = 'json', serializeRequestBodyToJson = true
) {
  // when is effectively the dependency array we will use with useEffect
  // but we can make it more friendly to use -> translate 'onMount' to an empty array
  // and translate something that is not an array (a single value) into an array
  when === 'onMount' && (when = []);
  !(when instanceof Array) && (when = [when]);
  // if serializeRequestBodyToJson is true then do that and add the correct header
  serializeRequestBodyToJson && (options.body = JSON.stringify(options.body))
    && (options.headers = { 'Content-Type': 'application/json' })
  // return a promise in which we call useEffect, that in turn
  // calls fetch inside an async function,
  // resolve the promise with the result or an error
  // + add debouncing by setting and clearing a timeout
  // that prevents duplicate requests when we run in React Strict Mode
  return new Promise(resolve => {
    useEffect(() => {
      const timeout = setTimeout(async () => {
        let response: any = await (await fetch(url, options))[responseType]()
        resolve(response);
      }, 1);
      return () => { clearTimeout(timeout); }
    }, when);
  });
}
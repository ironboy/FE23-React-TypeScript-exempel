import useSimpleState from "../utils/useSimpleState";
import { useOutletContext } from "react-router-dom";

export default function StateTestPage() {

  const s = useSimpleState({
    counter1: 0,
    counter2: 100,
  });

  const global: any = useOutletContext();

  function addTodoItem() {
    // note: to make React rerender, don't use push/pop etc on arrays
    // instead - create a new array and spread the old array into it
    global.todo = [...global.todo, prompt('Lägg till i listan:')];
  }

  function removeTodoItem(index: number) {
    // filter, map etc are ok to usem since they create new arrays!
    global.todo = global.todo.filter((_x: string, i: number) => i !== index);
  }

  return <div className="state-test-page"><div>
    <h3>Lokala states för<br />den här sidan/komponenten:</h3>
    <p><label>
      <span>Counter 1:</span>
      <button onClick={() => s.counter1++}>{s.counter1}</button>
    </label></p>
    <p><label>
      <span>Counter 2:</span>
      <button onClick={() => s.counter2++}>{s.counter2}</button>
    </label></p>
    <br />

    <h3>Att göra-listan</h3>
    <p>Att göra-listan kommer  från ett<br /> globalt state/context för hela applikationen.</p>
    <p><button onClick={addTodoItem}>Lägg till saker att göra</button></p>
    <ul>
      {global.todo.map((item: string, i: number) => <li key={i}>
        <span className="todo-item">{item}</span>
        <span className="remove-item" onClick={() => removeTodoItem(i)} />
      </li>)}
    </ul>
  </div></div>;
}
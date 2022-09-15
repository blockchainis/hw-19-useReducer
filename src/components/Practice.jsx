import { useReducer, useState } from "react";
function Counter() {
  //useReducer로  숫자 증가 감소를 구현해보세요.
  const [count, setCount] = useReducer(reducer, 0);
  const [input, setInput] = useState(0);
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return state + action.payload;
      case "DECREMENT":
        return state - action.payload;
      default:
        throw new Error("Unhandled action");
    }
  }

  function handleIncrement() {
    setCount({ type: "INCREMENT", payload: input });
  }
  function handleDecrement() {
    setCount({ type: "DECREMENT", payload: input });
  }
  function handleInput(e) {
    setInput(Number(e.target.value));
  }

  return (
    <>
      <h1>{count}</h1>
      <input type="number" value={input} onChange={handleInput} />
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}

export default Counter;

import { useReducer, useState } from "react";
function Counter() {
  //useReducer로  숫자 증가 감소를 구현해보세요.
  const [count, dispatch] = useReducer(reducer, 0);
  const [input, setInput] = useState(0);
  function reducer(state, action) {}

  return (
    <>
      <h1>{count}</h1>
      <input type="number" value={input} />
      <button>+</button>
      <button>-</button>
    </>
  );
}

export default Counter;

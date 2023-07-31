import { useReducer } from "react";
const initialState = 0;
function Reducer1() {
  function reducer(state, action) {
    switch (action.type) {
      case "decrease":
        return (state -= 1);
      case "increase":
        return (state += 1);
      case "reset":
        return (state = 0);
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count : {state}
      <br />
      <button onClick={() => dispatch({ type: "decrease" })}>-</button>
      <button onClick={() => dispatch({ type: "increase" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default Reducer1;

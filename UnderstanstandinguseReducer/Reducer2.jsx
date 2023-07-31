import { useReducer } from "react";
const initialState = 0;
function Reducer2() {
  function reducer(state, action) {
    switch (action.type) {
      case "multiply":
        return (state *= action.factor);
      case "subtract":
        return (state -= action.amount);
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
      <button onClick={() => dispatch({ type: "subtract", amount: 4 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "multiply", factor: 3 })}>
        *
      </button>
      <button onClick={() => dispatch({ type: "increase" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default Reducer2;

// One small point to remember is that you generally shouldn't be doing assignments (like state *= 3 or state -= action.amount) within the reducer. The reducer should be a pure function, meaning it doesn't have side effects. Instead of modifying the state, it should compute the new state and return it. Here is the updated code:

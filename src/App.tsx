import "./App.css";
import { useReducer } from "react";

type State = {
  count: number;
  showText: boolean;
};

type Action = { type: "IncrementCountAndShowText" } | { type: "resetValue" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "IncrementCountAndShowText":
      return {
        count: state.count + 1,
        showText: !state.showText,
      };
    case "resetValue":
      return {
        count: 0,
        showText: true,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  const { count, showText } = state;

  function handleClick() {
    dispatch({ type: "IncrementCountAndShowText" });
  }

  function handleReset() {
    dispatch({ type: "resetValue" });
  }

  return (
    <div>
      <h1>React hooks</h1>
      <h3>{count}</h3>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleReset}>reset</button>
      {showText && <p>Bem vindo</p>}
    </div>
  );
}

export default App;

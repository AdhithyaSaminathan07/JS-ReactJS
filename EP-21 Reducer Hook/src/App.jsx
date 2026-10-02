import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let COUNTER_ACTION ={
    INCREMENT:"increment",
    DECREMENT:"decrement",
    RESET:"reset"
    
  }

  const reducer = (state, counterAction) => {
    switch (counterAction.type) {
      case COUNTER_ACTION.INCREMENT:
        return { ...state, count: state.count + 1 };
      case COUNTER_ACTION.DECREMENT:
        return { ...state, count: state.count - 1 };
      case COUNTER_ACTION.RESET:
        return { ...state, count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // console.log(state, dispatch);

  return (
    <>
      <section id="center">
        <div>
          <h1>use Reduce Hook</h1>
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Increaes {count}
        </button>

        <div>
          <button type="button" className="counter" onClick={() => dispatch({type: COUNTER_ACTION.INCREMENT})}>
            Increament
          </button>
          <button type="button" className="counter" onClick={() => dispatch({type : COUNTER_ACTION.DECREMENT})}>
            Decrement
          </button>
          <p>
            {state.count}
            
          </p>

          <button type="button" className="counter" onClick={() => dispatch({ type: COUNTER_ACTION.RESET })}>
            Reset
          </button>
        </div>
      </section>
    </>
  );
}

export default App;

// import { useState } from "react";
import "./App.css";
import ReactUseState from "./components/ReactUseStateHook";

function App() {
  // const [state, setState] = useState(0);
  return (
    <div className="App">
      {/* <header className="App-header">
        <b>React Hooks By MS</b>
      </header>
      <br />
      <button onClick={() => setState(state + 1)}>Increment Count</button>&nbsp;
      <button onClick={() => setState(state - 1)}>Decrement Count</button>
      <p>Count:{state}</p> */}

      <ReactUseState />
    </div>
  );
}

export default App;

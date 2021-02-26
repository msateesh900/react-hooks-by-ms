import React from "react";
import "./App.css";
import ReactuseState from "./components/ReactuseStateHook";
import ReactuseEffect from "./components/ReactuseEffectHook";

export const userContext = React.createContext();

export default function App() {
  const [user, setUser] = React.useState("Sateesh");
  return (
    <div className="App">
      {/* <header className="App-header">
        <b>React Hooks By MS</b>
      </header>
      <br />
      <button onClick={() => setState(state + 1)}>Increment Count</button>&nbsp;
      <button onClick={() => setState(state - 1)}>Decrement Count</button>
      <p>Count:{state}</p> */}
      <userContext.Provider value={{ user, setUser }}>
        <ReactuseState />
        <ReactuseEffect />
        <br />
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </userContext.Provider>
    </div>
  );
}

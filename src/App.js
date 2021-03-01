import React from "react";
import "./App.css";
import ReactuseState from "./components/ReactuseState/ReactuseStateHook";
import ReactuseEffect from "./components/ReactuseEffect/ReactuseEffectHook";
import ReactuseReducer from "./components/ReactuseReducer/ReactuseReducer";
import ReactuseStateObjectHook from "./components/ReactuseState/ReactuseStateObjectHook";

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
        {/* Normal usecase for useStateHook */}
        <ReactuseState />
        {/* Object useCase for React useState Hook */}
        <ReactuseStateObjectHook />

        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <ReactuseEffect />
        <ReactuseReducer />
        <br />
      </userContext.Provider>
    </div>
  );
}

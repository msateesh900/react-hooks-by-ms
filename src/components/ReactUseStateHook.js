import { useState } from "react";

export default function ReactUseState() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <header className="App-header">
        <b>React Hooks By MS</b>
      </header>
      <br />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>&nbsp;
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>
      <p>Count:{count}</p>
    </div>
  );
}

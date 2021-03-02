import React, { useState, useEffect } from "react";
import RunReactuseEffectOnlyOnce from "./RunReactuseEffectOnlyOnce";

function CleanupWithReactuseEffect() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <h2>Tesing cleanup Using useEffect</h2>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <RunReactuseEffectOnlyOnce />}
    </div>
  );
}

export default CleanupWithReactuseEffect;

import React, { useEffect, useState, useContext } from "react";
import { userContext } from "../../App";

import axios from "axios";

export default function ReactuseEffectHook() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { user, setUser } = useContext(userContext);

  // first use case
  useEffect(() => {
    console.log("inside React Use Effect");
  });

  // second use case
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data))
      .then(() => {
        setLoaded(true);
      });
    return () => {
      alert("Clean up function/unmounting");
    };
  }, [count]);

  useEffect(() => {});
  return (
    <div>
      <h1>Use Effect Hook here</h1>
      <button onClick={(prevState) => setCount(prevState.count + 1)}>
        count In UseEffect
      </button>
      <p>User from useContext:{user}</p>
    </div>
  );
}

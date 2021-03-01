import React, { useEffect, useState, useContext } from "react";
import { userContext } from "../../App";

import axios from "axios";

export default function ReactuseEffectHook() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { user, setUser } = useContext(userContext);
  const [jsonData, setJsonData] = useState([]);

  // first use case
  useEffect(() => {
    console.log("inside React Use Effect");
  });

  // second use case
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setJsonData(res.data))
      .then(() => {
        setLoaded(true);
      });
    return () => {
      console.log("Clean up function/unmounting");
    };
  }, [count]);

  useEffect(() => {});
  return (
    <div>
      <h1>Use Effect Hook here</h1>
      <button onClick={(prevState) => setCount(prevState.count + 1)}>
        count In UseEffect
      </button>
      <div>
        {/* <table>
          <tbody> */}
        <h2>User Names</h2>
        {jsonData ? (
          jsonData.map((item) => (
            <span key={item.id}>
              <p style={{ textAlign: "center" }}>{item.name}</p>
            </span>
          ))
        ) : (
          <h2>Nothing to Display </h2>
        )}
        {/* </tbody>
        </table> */}
        <p>
          User from useContext:<b>{user}</b>
        </p>
      </div>
    </div>
  );
}

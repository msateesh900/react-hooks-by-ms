import React from "react";
import { UserContext } from "./CommunicationusingReactuseContextHook";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return <div>user Context value is {user}</div>;
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;

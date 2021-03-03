import React from "react";
import ComponentC from "./ComponentC";

export const UserContext = React.createContext();

function CommunicationusingReactuseContextHook() {
  return (
    <div>
      {/* React context provides a way to pass data through the component tree without having 
      to pass props down manullayat every level */}
      <h2>Basic communication b/w components using ReactuseContext</h2>
      <p>The value provided using UserContext using React useContext Hook</p>
      <UserContext.Provider value={"Sateesh"}>
        <ComponentC />
      </UserContext.Provider>
    </div>
  );
}

export default CommunicationusingReactuseContextHook;

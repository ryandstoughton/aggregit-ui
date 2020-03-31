import React, { useState } from "react";
import "./App.module.scss";
import Search from "../components/Search/Search";

const App = () => {
  const [state, setState] = useState({
    users: [],
  });

  const addUserData = (addedUser) => {
    // Perform some HTTP request to get user information
    const updatedState = {
      users: [...state.users, addedUser],
    };

    console.log(updatedState);
    setState(updatedState);
  };

  return (
    <div>
      <Search addUserData={addUserData}></Search>
    </div>
  );
};

export default App;

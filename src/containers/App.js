import React, { useState } from 'react';
import './App.module.scss';
import Search from '../component/Search/Search';

const App = () => {
  const [state, setState] = useState({
    users: []
  });

  const usernameLookup = () => {
    // Perform some HTTP request to get user information
    const newUser = {
      contributions: [
        {
          day: 0,
          count: 3
        },
        {
          day: 1,
          count: 2
        },
        {
          day: 3,
          count: 1
        }
      ]
    };
    const updatedState = {
      users: [...state.users, newUser]
    };

    console.log(updatedState);
    setState(updatedState);
  }

  return (
    <div>
      <Search usernameLookup={usernameLookup}></Search>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './Search.module.scss';

const Search = props => {
  const [state, setState] = useState({
    platform: 'github',
    username: ''
  });

  const usernameChangedHandler = (event) => {
    const updatedState = {
      ...state,
      username: event.target.value
    };

    setState(updatedState);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter A Username"
        onChange={usernameChangedHandler} />
    </div>
  );
}

export default Search;

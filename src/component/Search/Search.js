import React, { useState } from 'react';
import PlatformSelector from '../PlatformSelector/PlatformSelector';
import './Search.module.scss';

const Search = () => {
  const [state, setState] = useState({
    platform: 'github',
    username: ''
  });

  const stateChangedHandler = (value, field) => {
    const updatedState = {
      ...state
    };
    updatedState[field] = value;

    setState(updatedState);
  };

  return (
    <div>
      <PlatformSelector
        current={state.platform}
        change={event => stateChangedHandler(event.target.value, 'platform')} />
      <input
        type="text"
        placeholder="Enter A Username"
        onChange={event => stateChangedHandler(event.target.value, 'username')} />
    </div>
  );
}

export default Search;

import React from 'react';
import './PlatformSelector.module.scss';

const PlatformSelector = props => {
  return (
    <select onChange={props.change}>
      <option value='github'>Github</option>
      <option value='gitlab'>Gitlab</option>
    </select>
  );
};

export default PlatformSelector;

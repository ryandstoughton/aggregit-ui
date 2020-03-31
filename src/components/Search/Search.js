import React, { useState } from "react";
import PlatformSelector from "../PlatformSelector/PlatformSelector";
import styles from "./Search.module.scss";

const Search = (props) => {
  const [state, setState] = useState({
    platform: "github",
    username: "",
  });

  const stateChangedHandler = (value, field) => {
    const updatedState = {
      ...state,
    };
    updatedState[field] = value;

    setState(updatedState);
  };

  const usernameLookup = async () => {
    const contributionsResponse = await fetch(
      `http://localhost:8080/git/contributions?username=${state.username}&platform=${state.platform}`
    );
    const contributions = await contributionsResponse.json();

    props.addUserData({
      username: state.username,
      platform: state.platform,
      contributions,
    });
  };

  return (
    <div className={styles.search}>
      <div className={styles.search__info}>
        <PlatformSelector
          change={(event) =>
            stateChangedHandler(event.target.value, "platform")
          }
        />
        <input
          type="text"
          placeholder="Enter A Username"
          onChange={(event) =>
            stateChangedHandler(event.target.value, "username")
          }
        />
      </div>
      <button onClick={usernameLookup}>Add Data</button>
    </div>
  );
};

export default Search;

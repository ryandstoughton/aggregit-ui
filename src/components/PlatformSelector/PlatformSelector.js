import React from "react";
import Select from "react-select";

const PlatformSelector = (props) => {
  const platforms = [
    { value: "github", label: "Github" },
    { value: "gitlab", label: "Gitlab" },
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      width: "110px",
      height: "40px",
      "min-height": "40px",
      "border-radius": "0",
      "border-right": "0",
    }),
  };

  return (
    <Select
      styles={customStyles}
      defaultValue={platforms.find((platform) => platform.value === "github")}
      options={platforms}
      onChange={props.changed}
    />
  );
};

export default PlatformSelector;

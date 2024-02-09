import React, { Component } from "react";

import { MenuItem } from "../menu-item/menu-item";

import { selectDirectorySections } from "../../redux/directory/directorySelectors";
import { useSelector } from "react-redux";

export const Directory = () => {
  const sections = useSelector(selectDirectorySections);
 

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;

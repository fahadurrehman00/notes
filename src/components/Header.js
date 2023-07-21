import React from "react";
import {GiNightSleep} from 'react-icons/gi'
const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <div>
        <button
          className="save"
          onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }><GiNightSleep/></button>
      </div>
    </div>
  );
};

export default Header;

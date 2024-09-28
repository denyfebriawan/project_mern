import React from "react";
import reactDOM from "react-dom";

import "./Backdrop.css";

const Backdrop = props => {
  return reactDOM.createPortal(<div className="backdrop" onClick={props.onClick}></div>, document.getElementById("backdrop-hook"));
};

export default Backdrop;

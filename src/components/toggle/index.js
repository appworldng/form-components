import React, { useState } from "react";

/**
 * @name Toggle
 * @description A simple toggle control that is easily customizable.
 * @param {string} props.color Color for the toggle: defaults to #D1D1D1.
 * @param {function} props.onToggle onclick event function of the button: receives the state `Boolean` of the toggle as an argument.
 * @returns {JSX.Element} A toggle control.
 */

const toggleOff = {
  width: 40,
  height: 20,
  borderRadius: 100,
  backgroundColor: "#D1D1D1",
  display: "inline-block",
  transition: "all 0.3s",
  position: "relative",
};

const toggleOn = {
  width: 40,
  height: 20,
  borderRadius: 100,
  backgroundColor: "#F00",
  display: "inline-block",
  transition: "all 0.3s",
  position: "relative",
};

const toggleChildOff = {
  width: 16,
  height: 16,
  borderRadius: "100%",
  position: "absolute",
  top: 2,
  left: 2,
  transition: "all 0.3s",
  backgroundColor: "#FFF",
};

const toggleChildOn = {
  width: 16,
  height: 16,
  borderRadius: "100%",
  position: "absolute",
  top: 2,
  left: 22,
  transition: "all 0.3s",
  backgroundColor: "#FFF",
};

let bool = true;

const Toggle = () => {
  const [toggleState, setToggleState] = useState(toggleOff);
  const [toggleChildState, setToggleChildState] = useState(toggleChildOff);

  const toggleControl = () => {
    if (bool) {
      setToggleState(toggleOn);
      setToggleChildState(toggleChildOn);
    } else {
      setToggleState(toggleOff);
      setToggleChildState(toggleChildOff);
    }
    bool = !bool;
  };

  return (
    <>
      <div style={toggleState} onClick={toggleControl}>
        <div style={toggleChildState}></div>
      </div>
      <input type="hidden" />
    </>
  );
};

export default Toggle;

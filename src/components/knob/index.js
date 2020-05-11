import React, { useState } from "react";

/**
 * @name Knob
 * @description A simple Knob control that is easily customizable.
 * @param {string} props.color Color for the Knob: defaults to #D1D1D1.
 * @param {function} props.onSlide onclick event function of the button: receives the state `Boolean` of the Knob as an argument.
 * @returns {JSX.Element} A Knob control.
 */

const KnobInActive = {
  width: 100,
  height: 100,
  borderRadius: "100%",
  border: "5px solid #D1D1D1",
  display: "inline-block",
  transition: "all 0.3s",
  position: "relative",
};

const KnobActive = {
  width: 100,
  height: 100,
  borderRadius: "100%",
  border: "5px solid #F00",
  display: "inline-block",
  transition: "all 0.3s",
  position: "relative",
};

const KnobChild = {
  width: 16,
  height: 16,
  borderRadius: "100%",
  position: "absolute",
  bottom: -8,
  left: 17,
  transition: "all 0.3s",
  backgroundColor: "#FFF",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
};

const Knob = () => {
  const [KnobState, setKnobState] = useState(KnobInActive);

  const KnobControl = (event) => {
    event.preventDefault();
    console.log("It's here...");
  };

  return (
    <>
      <div style={KnobState}>
        <div draggable="true" style={KnobChild} onDrag={KnobControl}></div>
      </div>
      <input type="hidden" />
    </>
  );
};

export default Knob;

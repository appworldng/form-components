import React, { useState } from "react";

/**
 * @name Slider
 * @description A simple slider control that is easily customizable.
 * @param {string} props.color Color for the slider: defaults to #D1D1D1.
 * @param {function} props.onSlider onclick event function of the button: receives the state `Boolean` of the slider as an argument.
 * @returns {JSX.Element} A slider control.
 */

const sliderInActive = {
  width: 100,
  height: 5,
  borderRadius: 100,
  backgroundColor: "#D1D1D1",
  display: "inline-block",
  transition: "all 0.3s",
  position: "relative",
};

const sliderActive = {
  width: 100,
  height: 5,
  borderRadius: 100,
  backgroundColor: "#F00",
  display: "inline-block",
  transition: "all 0.3s",
  position: "relative",
};

const sliderChild = {
  width: 16,
  height: 16,
  borderRadius: "100%",
  position: "absolute",
  top: -5.5,
  left: -8,
  transition: "all 0.3s",
  backgroundColor: "#FFF",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
};

const Slider = () => {
  const [sliderState, setSliderState] = useState(sliderInActive);

  const sliderControl = (event) => {
    event.preventDefault();
    if (1) {
      setSliderState(sliderActive);
    } else {
      setSliderState(sliderInActive);
    }
  };

  return (
    <>
      <div style={sliderState}>
        <div style={sliderChild} onDrag={sliderControl}></div>
      </div>
      <input type="hidden" />
    </>
  );
};

export default Slider;

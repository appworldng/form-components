import React, { useState } from "react";

const toggleOff = {
  width: 40,
  height: 20,
  borderRadius: 100,
  backgroundColor: "#D1D1D1",
};

const toggleOn = {
  width: 40,
  height: 20,
  borderRadius: 100,
  backgroundColor: "#F00",
};

const Toggle = () => {
  const [toggleState, setToggleState] = useState(toggleOff);

  const toggleControl = () => {
    setToggleState(toggleOn);
  };

  return (
    <>
      <div style={toggleState} onClick={toggleControl}></div>
      <input type="hidden" />
    </>
  );
};

export default Toggle;

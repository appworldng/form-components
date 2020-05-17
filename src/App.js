import React from "react";
import ToggleControl from "./components/ToggleControl/";
import SliderControl from "./components/SliderControl/";
import KnobControl from "./components/KnobControl/";

const section = {
  padding: "4em",
  textAlign: "center",
};

const App = () => {
  return (
    <section style={section}>
      <ToggleControl />
      <br />
      <SliderControl />
      <br />
      <KnobControl />
    </section>
  );
};

export default App;

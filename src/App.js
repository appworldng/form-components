import React from "react";
import Toggle from "./components/toggle/";
import Slider from "./components/slider/";
import Knob from "./components/knob/";

const section = {
  padding: "4em",
  textAlign: "center",
};

const App = () => {
  return (
    <section style={section}>
      <Toggle />
      <br />
      <Slider />
      <br />
      <Knob />
    </section>
  );
};

export default App;

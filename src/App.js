import React from "react";
import Toggle from "./components/toggle/";
import Slider from "./components/slider/";

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
    </section>
  );
};

export default App;

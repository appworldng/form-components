import React from "react";
import Toggle from "./components/toggle/Toggle";

const section = {
  padding: "4em",
  textAlign: "center",
};

const App = () => {
  return (
    <section style={section}>
      <Toggle />
    </section>
  );
};

export default App;

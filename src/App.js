import React from "react";
import ToggleControl from "./components/ToggleControl";
import SliderControl from "./components/SliderControl";
import KnobControl from "./components/KnobControl";
import SmartTextControl from "./components/SmartTextControl";

const styles = {
  textAlign: "center",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  padding: "4em",
};

function App() {
  return (
    <>
      <section style={styles}>
        <div>
          <ToggleControl />
        </div>
        <div>
          <SliderControl />
        </div>
        <div>
          <KnobControl />
        </div>
        <div>
          <SmartTextControl shape="round" />
        </div>
      </section>
    </>
  );
}

export default App;

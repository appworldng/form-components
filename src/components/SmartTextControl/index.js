import React from "react";

const flat = {
  border: "none",
  borderBottom: "1px solid #def",
  padding: 15,
  height: "auto",
  boxSizing: "border-box",
  width: "100%",
};

const box = {
  border: "1px solid #def",
  padding: 15,
  height: "auto",
  boxSizing: "border-box",
  width: "100%",
};

const round = {
  border: "1px solid #def",
  borderRadius: 100,
  padding: 15,
  height: "auto",
  boxSizing: "border-box",
  width: "100%",
};

const SmartTextControl = ({ shape, placeholder }) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder ? placeholder : "Type in something here..."}
        style={shape ? shape : flat}
      />
    </>
  );
};

export default SmartTextControl;

import React, { useState } from "react";

function randomColor() {
  const colors = ["green", "blue", "orange", "yellow"];
  const randomIndex = Math.trunc(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  return randomColor;
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "red";
    console.log(initColor);
    return initColor;
  });

  function handleBoxColor() {
    const newColor = randomColor();
    setColor(newColor);
    localStorage.setItem("box-color", newColor);
  }

  return (
    <div
      id="box"
      style={{ backgroundColor: color }}
      onClick={handleBoxColor}
    ></div>
  );
}

export default ColorBox;

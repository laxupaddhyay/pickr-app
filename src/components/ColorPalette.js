import React, { useEffect, useState } from "react";

const ColorPalette = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const newColors = [];

    while (newColors.length < 5) {
      const hue = Math.round(Math.random() * 360);
      const saturation = Math.round(Math.random() * 100);
      const lightness = Math.round(Math.random() * 100);
      const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

      if (!newColors.some((c) => c.color === color)) {
        newColors.push({ color, code: color });
      }
    }

    setColors(newColors);
  }, []);

  const getTextColor = (bgColor) => {
    const brightness = (bgColor.match(/(\d+)/g) || []).reduce((a, b) => a + parseInt(b), 0) / 300;

    if (brightness < 0.1) {
      return "white";
    }

    return brightness > 0.5 ? "black" : "white";
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: "6rem", marginBottom: "1rem", marginTop: "2rem" }}>Color Palette</h1>
      {colors.map((color) => (
        <div
          key={color.color}
          style={{
            backgroundColor: color.color,
            width: "100%",
            height: "13%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "1.5rem",
            color: getTextColor(color.color),
          }}
          onClick={() => copyToClipboard(color.code)}
        >
          {color.code}
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
          

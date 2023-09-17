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
      return "text-white";
    }

    return brightness > 0.5 ? "text-black" : "text-white";
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="mb-4 text-center">
        <h1 className="text-4xl">Color Palette</h1>
      </div>
      {colors.map((color) => (
        <div
          key={color.color}
          style={{ backgroundColor: color.color }}
          className={`w-full h-1/5 flex items-center justify-center cursor-pointer text-1.5rem ${getTextColor(color.color)}`}
          onClick={() => copyToClipboard(color.code)}
        >
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;

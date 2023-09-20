import React, { useState, useEffect } from 'react';
import chroma from 'chroma-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ColorPalette() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    generateColors();
  }, []);

  const generateColors = () => {
    const darkColors = chroma.scale(['#000', '#333']).colors(2); // Two shades of dark colors
    const lightColors = chroma.scale(['#f0f', '#ccf']).colors(2); // Three shades of light colors
    const accentColors = chroma.scale(['#f90', '#f06']).colors(1); // Four shades of an accent color

    const colorPalette = [...darkColors, ...lightColors, ...accentColors];

    const capitalizedColors = colorPalette.map(color => color.toUpperCase());
    setColors(capitalizedColors);
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    toast.success('Copied ' + color, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      theme: "dark",
    });
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-4xl font-bold">Colour Palette</h2>
      <span className="text-lg text-gray-600 block mb-4">Enhance your webpages</span>
      <div className="color-container flex flex-wrap justify-center md:justify-start -mx-2">
        {colors.map((color, index) => (
          <div key={index} className="color-box m-2 w-full sm:w-full md:w-1/3 lg:w-1/5">
            <div
              className="color cursor-pointer"
              style={{ backgroundColor: color, height: '100px' }}
              onClick={() => copyToClipboard(color)}
            >
              <p
                className="text-gray-700 mt-2 select-all cursor-pointer text-left px-2"
                onClick={() => copyToClipboard(color)}
              >
                {color}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-8 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md"
        onClick={generateColors}
      >
        Generate
      </button>
      <ToastContainer />
    </div>
  );
}

export default ColorPalette;

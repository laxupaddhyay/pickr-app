import React, { useState, useEffect } from 'react';
import colorScheme from 'color-scheme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ColorPalette() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    generateColors();
  }, []);

  const generateColors = () => {
    const scheme = new colorScheme();
    scheme.from_hue(Math.floor(Math.random() * 360))
      .scheme('triade')
      .variation('default');

    const colorList = scheme.colors().slice(0, 5); // Always start with the first 5 colors
    const capitalizedColors = colorList.map(color => color.toUpperCase());
    setColors(capitalizedColors.map(color => `#${color}`)); // Add "#" to each color code
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    toast.success('Copied ' + color, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      theme: "dark",
    });
  };

  return (
    <div className="p-2 text-center">
      <h2 className="text-5xl font-bold">Colour Palette</h2>
      <span className="text-md text-gray-600 block mb-4">Enhance your webpages</span>
      <div className="color-container flex flex-wrap justify-center md:justify-start">
        {colors.map((color, index) => (
          <div key={index} className="w-screen md:w-1/5">
            <div
              className="cursor-pointer rounded-lg"
              style={{ backgroundColor: color, height: '100px' }}
            >
              <p
                className="text-gray-700 cursor-pointer text-left items-center px-2"
                onClick={() => copyToClipboard(color)}
              >
                {color}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-8 py-2 px-4 bg-black text-white hover:bg-gray-600 text-white rounded-lg shadow-md"
        onClick={generateColors}
      >
        Generate
      </button>
      <ToastContainer />
    </div>
  );
}

export default ColorPalette;

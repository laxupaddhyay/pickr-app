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
      <div className="color-container flex flex-wrap justify-center md:justify-start">
        {colors.map((color, index) => (
          <div key={index} className="color-box m-2 w-full sm:w-full md:w-1/3 lg:w-1/5">
            <div
              className="color relative cursor-pointer"
              style={{ backgroundColor: color, height: '100px' }}
              onClick={() => copyToClipboard(color)}
            >
              <p
                className="text-gray-700 mt-2 select-all cursor-pointer text-left absolute left-0 right-0 bottom-2 px-2"
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

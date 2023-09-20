import React, { useState, useEffect } from 'react';
import colorScheme from 'color-scheme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ColorPalette() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    generateColors();
  }, []);

  // Generate a color palette using the color-scheme library
  const generateColors = () => {
    const scheme = new colorScheme();
    scheme.from_hue(Math.floor(Math.random() * 360))
      .scheme('triade')
      .variation('default');

    const colorList = scheme.colors().slice(0, 5);
    const capitalizedColors = colorList.map(color => color.toUpperCase());
    const colorCodesWithHash = capitalizedColors.map(color => `#${color}`);
    setColors(colorCodesWithHash);
  };

  // Copy a color code to the clipboard and show a toast notification
  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    toast.success(`Copied ${color}`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      theme: "dark",
    });
  };

  return (
    <div className="mt-2 text-center">
      <h1 className="text-5xl font-bold mt-10">Color Palette</h1>
      <span className="text-md text-gray-600 block mb-4">Enhance your webpages</span>
      <div className="color-container flex flex-wrap justify-center md:justify-start">
        {colors.map((color, index) => (
          <div key={index} className="w-screen md:w-1/5">
            <div
              className="cursor-pointer h-[100px] lg:h-[55vh]"
              style={{ backgroundColor: color }}
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
        className="mt-8 py-2 px-4 bg-black hover:bg-gray-600 text-white rounded-lg shadow-md"
        onClick={generateColors}
      >
        Generate
      </button>
      <ToastContainer />
    </div>
  );
}

export default ColorPalette;

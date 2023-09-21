import React, { useState, useEffect, useCallback } from 'react';
import colorScheme from 'color-scheme';
import { GrClipboard } from "react-icons/gr";
import { ToastContainer, toast, Zoom } from 'react-toastify';
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

    const colorList = scheme.colors().slice(0, 5);
    const capitalizedColors = colorList.map((color) => color.toUpperCase());
    const colorCodesWithHash = capitalizedColors.map((color) => `#${color}`);
    setColors(colorCodesWithHash);
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    toast.success(`Copied ${color}`)
  };

  const getContrastTextColor = (bgColor) => {
    const r = parseInt(bgColor.slice(1, 3), 16);
    const g = parseInt(bgColor.slice(3, 5), 16);
    const b = parseInt(bgColor.slice(5, 7), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness >= 128 ? 'black' : 'white';
  };

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        generateColors();
      }
    },
    [generateColors]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold mt-10">Color Palette</h1>
      <span className="text-md text-gray-900 block mb-8">Press <span className='font-bold'>Spacebar</span> to generate new palettes</span>
      <div className="color-container flex flex-wrap justify-center items-center md:justify-start">
        {colors.map((color, index) => (
          <div key={index} className="w-screen md:w-1/5">
            <div
              className={`flex flex-col justify-center items-center h-[100px] md:h-[68vh]`}
              style={{ backgroundColor: color, color:getContrastTextColor(color) }}
            >
              <p
                className="flex z-99 font-bold text-lg mb-4"
              >
                {color}
              </p>
              <GrClipboard className="cursor-pointer text-black" onClick={() => copyToClipboard(color)}/>
            </div>
          </div>
        ))}
      </div>
      
      <ToastContainer
      position="top-center"
      autoClose={1000}
      transition={Zoom}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      draggable={false}
      theme="dark"
      />
    </div>
  );
}

export default ColorPalette;

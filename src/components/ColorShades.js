import React from "react";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BrowseColor from "./BrowseColor";

const ColorShades = () => {
  const colors = [
    { id: 1, color: "gray" },
    { id: 2, color: "silver" },
    { id: 3, color: "red" },
    { id: 4, color: "maroon" },
    { id: 5, color: "orange" },
    { id: 6, color: "yellow" },
    { id: 7, color: "olive" },
    { id: 8, color: "lime" },
    { id: 9, color: "green" },
    { id: 10, color: "cyan" },
    { id: 11, color: "teal" },
    { id: 12, color: "navy" },
    { id: 13, color: "blue" },
    { id: 14, color: "violet" },
    { id: 15, color: "purple" },
    { id: 16, color: "magenta" },
    { id: 17, color: "pink" },
  ];

  return (
    <>
      {colors.map((index) => (
        <div key={index.id} className="py-10 px-4">
          <ToastContainer
            position="top-center"
            autoClose={1000}
            transition={Zoom}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            draggable={false}
            theme="dark"
          />
          <h1 className="text-4xl md:text-5xl mt-10">
            {index.color.toUpperCase()}
          </h1>
          <BrowseColor color={`${index.color}`} numShades={48} />
        </div>
      ))}
    </>
  );
};

export default ColorShades;

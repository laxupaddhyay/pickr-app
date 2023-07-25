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
        <div className="flex flex-col my-5">
          <div className="title flex flex-col items-center">
            <h1 className="xs:text-5xl md:text-6xl font-bold my-5">
              {index.color.at(0).toUpperCase() + index.color.slice(1)}
            </h1>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={1000}
            transition={Zoom}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
            draggable={false}
            theme="dark"
          />

          <BrowseColor color={`${index.color}`} numShades={48} />
        </div>
      ))}
    </>
  );
};

export default ColorShades;

import React from "react";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BrowseColor from "./BrowseColor";

const ColorShades = () => {
  const colors = [
    { id: 1, color: "white" },
    { id: 2, color: "gray" },
    { id: 3, color: "red" },
    { id: 4, color: "orange" },
    { id: 5, color: "yellow" },
    { id: 6, color: "lime" },
    { id: 7, color: "green" },
    { id: 8, color: "blue" },
    { id: 9, color: "violet" },
    { id: 10, color: "purple" },
    { id: 11, color: "magenta" },
    { id: 12, color: "pink" },
  ];

  return (
    <>
      {colors.map(({id,color}) => (
        <div key={id} className="flex flex-col my-5">
          <div className="flex flex-col items-center">
            <h1 className="xs:text-5xl md:text-6xl font-bold my-5">
              {color.at(0).toUpperCase() + color.slice(1)}
            </h1>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={1500}
            transition={Zoom}
            hideProgressBar={true}
            newestOnTop={false}
            rtl={false}
            draggable={false}
            theme="dark"
          />

          <BrowseColor color={`${color}`} numShades={25} />
        </div>
      ))}
    </>
  );
};

export default ColorShades;

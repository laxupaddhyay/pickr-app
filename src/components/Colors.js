import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { GrClipboard } from "react-icons/gr";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { RgbaColorPicker } from "react-colorful";
import "../styles/color.css";

const Colors = () => {
  const [currentColor, setCurrentColor] = useState({
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  });
  const [output, setOutput] = useState("");

  useEffect(() => {
    const color = `rgba(${currentColor["r"]},${currentColor["g"]},${currentColor["b"]},${currentColor["a"]})`;
    setOutput(color);
    document.body.style.background = color;
  }, [currentColor]);

  const handleColorChange = (currentColor) => {
    setCurrentColor(currentColor);
  };
  const notify = () => toast.success("Copied to Clipboard!");

  return (
    <>
      <div className="container mx-auto my-10">
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
        <div className="flex flex-col justify-center items-center">
          <div className="title flex flex-col items-center">
            <h1 className="xs:text-5xl md:text-6xl font-bold">Colors</h1>
            <span className="py-4 sm:text-lg w-9/10 text-center xs:text-[12px] text-gray-900">
              Select any color to copy hex code
            </span>
          </div>
          <div className="glass">
            <div className="responsive">
              <RgbaColorPicker
                color={currentColor}
                onChange={handleColorChange}
              />
            </div>
          </div>
          <div className="flex flex-col items-center my-10">
            <div className="flex justify-center items-center bg-[#F8F8FF] text-[10px] md:text-lg rounded-xl p-3">
              <SyntaxHighlighter
                language="css"
                style={docco}
              >
                {output}
              </SyntaxHighlighter>
              <CopyToClipboard text={`${output}`}>
                <GrClipboard
                  style={{ cursor: "pointer" }}
                  onClick={notify}
                  className="text-[18px]"
                />
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Colors;

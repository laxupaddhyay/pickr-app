import React, { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { RgbaColorPicker } from "react-colorful";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrClipboard } from "react-icons/gr";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../styles/gradient.css";

const Gradient = () => {
  const [currentColor1, setCurrentColor1] = useState({
    r: Math.floor(Math.random() * 255 + 1),
    g: Math.floor(Math.random() * 255 + 1),
    b: Math.floor(Math.random() * 255 + 1),
    a: Math.round(Math.random() * 100) / 100,
  });
  const [currentColor2, setCurrentColor2] = useState({
    r: Math.floor(Math.random() * 255 + 1),
    g: Math.floor(Math.random() * 255 + 1),
    b: Math.floor(Math.random() * 255 + 1),
    a: Math.round(Math.random() * 100) / 100,
  });
  const [output, setOutput] = useState();
  const notify = () => toast.success("Copied to Clipboard!");

  useEffect(() => {
    const color1 = `rgba(${currentColor1["r"]},${currentColor1["g"]},${currentColor1["b"]},${currentColor1["a"]})`;
    const color2 = `rgba(${currentColor2["r"]},${currentColor2["g"]},${currentColor2["b"]},${currentColor2["a"]})`;

    const gradient = `linear-gradient(to right, ${color1} , ${color2})`;
    setOutput(gradient);
    document.body.style.background = gradient;
  }, [currentColor1, currentColor2]);

  const handleColor1Change = (currentColor1) => {
    setCurrentColor1(currentColor1);
  };
  const handleColor2Change = (currentColor2) => {
    setCurrentColor2(currentColor2);
  };

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
        <div className="flex flex-col justify-center place-items-center items-center">
          <div className="title flex flex-col items-center">
            <h1 className="xs:text-5xl md:text-6xl font-bold">Gradient</h1>
            <span className="py-4 md:text-2xl sm:text-xl w-9/10 text-center xs:text-[12px] text-gray-900">
              Select the colors to copy CSS code
            </span>
          </div>
          <div className="glass">
            <div className="responsive xs:flex xs:flex-col gap-4 md:gap-8">
              <RgbaColorPicker
                color={currentColor1}
                onChange={handleColor1Change}
              />
              <RgbaColorPicker
                color={currentColor2}
                onChange={handleColor2Change}
              />
            </div>
          </div>
          <div className="flex flex-col items-center my-10">
            <div className="flex justify-center items-center md:text-lg bg-[#F8F8FF] rounded-2xl p-[7px] text-[10px]">
              <SyntaxHighlighter
                language="css"
                style={docco}
                customStyle={{ fontStyle: "italic" }}
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

export default Gradient;

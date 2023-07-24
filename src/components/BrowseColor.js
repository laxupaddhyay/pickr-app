import React, { Fragment, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import Values from "values.js";

const BrowseColor = ({ color, numShades }) => {
  const [shades, setShades] = useState([]);

  useEffect(() => {
    const shades = new Values(color).shades(100 / numShades);
    setShades(shades);
  }, [color, numShades]);

  const notify = () => toast.success("Copied to Clipboard!");

  return (
    <Fragment>
      <div className="flex flex-wrap justify-center">
        {shades.map((shade, index) => (
          <div
            className="flex flex-col justify-center items-center w-[150px] h-[150px] m-[5px] border-[1px] border-black rounded-sm font-medium text-white text-lg"
            key={index}
            style={{ background: shade.hexString() }}
          >
            <CopyToClipboard text={`${shade.hexString()}`}>
              <p
                onClick={notify}
                style={{ cursor: "pointer" }}
              >{`${shade.hexString()}`}</p>
            </CopyToClipboard>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default BrowseColor;

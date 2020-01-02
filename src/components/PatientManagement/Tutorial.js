import React from "react";
import { MdClose } from "react-icons/md";

function Tutorial({ onClose }) {
  return (
    <div className="tutorial">
      <div className="tutorial--top">
        <span>v1.0.0</span>
        <MdClose onClick={onClose} />
      </div>
    </div>
  );
}

export default Tutorial;

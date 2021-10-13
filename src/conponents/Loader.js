import React from "react";
import spin from "./spin.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spin} alt="Loading..." />
    </div>
  );
};

export default Loader;

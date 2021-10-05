import React, { FC } from "react";

import "./Loader.css";

const Loader: FC = () => {
  return (
    <div className="loader">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;

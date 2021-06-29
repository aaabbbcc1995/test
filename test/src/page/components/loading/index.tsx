import React from "react";
import "./index.css";

const Loading: React.FC = () => {
  return (
    <div className={"loadingContainer"}>
      <div className={"lds-facebook"}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;

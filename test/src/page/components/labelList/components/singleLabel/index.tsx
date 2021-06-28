import React from "react";
import "./index.css";
import "/svg/label.svg";

interface SingleLabelProps {
  width: string;
  title: string;
}

const SingleLabel: React.FC<SingleLabelProps> = (props) => {
  const { width, title } = props;

  return (
    <div className={"singleLabel"} style={{ width: width }}>
      <div className={"labelContainer"}>
        <img className={"label"} src="/svg/label.svg" alt="label" />
        <div className={"labelTitle"}>{title}</div>
      </div>
    </div>
  );
};

export default SingleLabel;

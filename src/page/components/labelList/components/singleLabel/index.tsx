import React from "react";
import "./index.css";
import { SingleLabelProps } from "./type";
import "/svg/label.svg";
import "/svg/labelPurple.svg";

const SingleLabel: React.FC<SingleLabelProps> = (props) => {
  const { width, title, selectedLabel, setKeyword } = props;

  return (
    <div
      className={
        selectedLabel.toLowerCase() === title.toLowerCase()
          ? "singleLabelSelected"
          : "singleLabel"
      }
      style={{ width: width }}
      onClick={() => setKeyword(title)}
    >
      <div className={"labelContainer"}>
        <img
          className={"label"}
          src={
            selectedLabel.toLowerCase() === title.toLowerCase()
              ? "/svg/label.svg"
              : "/svg/labelPurple.svg"
          }
          alt={"label"}
        />
        <div
          className={"labelTitle"}
          style={{
            color:
              selectedLabel.toLowerCase() === title.toLowerCase()
                ? "#FFFFFF"
                : "#6833FF",
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default SingleLabel;

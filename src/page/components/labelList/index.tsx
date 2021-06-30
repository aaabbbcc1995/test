import React from "react";
import SingleLabel from "./components/singleLabel";
import "./index.css";
import { LabelListProps } from "./type";

const labelList = [
  { title: "Languages", width: "145px" },
  { title: "Build", width: "98px" },
  { title: "Design", width: "113px" },
  { title: "Cloud", width: "106px" },
];

const LabelList: React.FC<LabelListProps> = (props) => {
  const { selectedLabel, setKeyword } = props;

  return (
    <div className={"labelsList"}>
      {labelList.map((item) => {
        return (
          <SingleLabel
            width={item.width}
            title={item.title}
            selectedLabel={selectedLabel}
            setKeyword={setKeyword}
          />
        );
      })}
    </div>
  );
};

export default LabelList;

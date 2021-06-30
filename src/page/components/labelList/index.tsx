import React from "react";
import SingleLabel from "./components/singleLabel";
import './index.css';

const LabelList: React.FC = () => {
  return (
    <div className={'labelsList'}>
      <SingleLabel width={"145px"} title={"Languages"} />
      <SingleLabel width={"98px"} title={"Build"} />
      <SingleLabel width={"113px"} title={"Design"} />
      <SingleLabel width={"106px"} title={"Cloud"} />
    </div>
  );
};

export default LabelList;

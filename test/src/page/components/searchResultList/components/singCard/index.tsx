import React from "react";
import "./index.css";
import "/svg/linkIcon.svg";

interface SingleCardProps {
  img: string;
  title: string;
  description: string;
  url: string;
}

const SingleCard: React.FC<SingleCardProps> = (props) => {
  const { img, title, description, url } = props;
  return (
    <div className={"singleCardContainer"}>
      <div className={"imgContainer"}>
        <img
          className={"img"}
          src={"https://frontend-test-api.digitalcreative.cn/nodejs.png"}
          alt={"123"}
        />
      </div>
      <div className={"columnContainer"}>
        <div className={"title"}>{title}</div>
        <div className={"description"}>{description}</div>
      </div>
      <div>
        <img className={"linkIcon"} src="/svg/linkIcon.svg" alt="linkIcon" />
      </div>
    </div>
  );
};
export default SingleCard;

import React from "react";
import "./index.css";
import { SingleCardProps } from "./type";
import "/svg/linkIcon.svg";

const SingleCard: React.FC<SingleCardProps> = (props) => {
  const { img, title, description } = props;
  return (
    <div className={"singleCardContainer"}>
      <div className={"imgContainer"}>
        <img
          className={"img"}
          src={img}
          alt={title}
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

import React from "react";
import "./index.css";
import { FooterTextProps } from "./type";

const FooterText: React.FC<FooterTextProps> = (props) => {
  const { resultsLength, loading, errorStatus } = props;

  function statusText() {
    if (errorStatus !== "success") {
      return (
        <div style={{ color: "#ED2E7E" }}>
          {errorStatus === "failed"
            ? "Something wrong happened but this is not your fault : )"
            : "The request timed out"}
        </div>
      );
    } else {
      return (
        <div>
          {resultsLength === 0 ? (
            <div>No Result</div>
          ) : (
            <div>
              {resultsLength} Result{resultsLength === 1 ? "" : "s"}
            </div>
          )}
        </div>
      );
    }
  }

  function loadingText() {
    return <div>Searching ...</div>;
  }

  return (
    <div className={"textContainer"}>
      {loading ? loadingText() : statusText()}
    </div>
  );
};

export default FooterText;

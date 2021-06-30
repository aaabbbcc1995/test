import React from "react";
import Loading from "../loading";
import SingleCard from "./components/singCard";
import "./index.css";
import "/svg/searching.svg";
import "/svg/countingStarts.svg";

const SearchResultList: React.FC<SearchResultListProps> = (props) => {
  const { searchResultList, loading, errorStatus } = props;

  let listHeight = "";

  if (searchResultList && searchResultList.length > 0) {
    listHeight = (searchResultList.length * 120).toString() + "px";
  }

  return (
    <div
      className={"searchResultListContainer"}
      style={{
        height:
          searchResultList && searchResultList.length > 0
            ? listHeight
            : "470px",
      }}
    >
      {loading && <Loading />}
      {searchResultList && searchResultList.length > 0 ? (
        searchResultList.map((item) => {
          return (
            <a href={item.url} style={{ textDecoration: "none" }}>
              <SingleCard
                img={item.image}
                title={item.title}
                description={item.description}
              />
            </a>
          );
        })
      ) : (
        <div className={"reactImgContainer"}>
          <img
            src={errorStatus!=='' ? "/svg/countingStarts.svg" : "/svg/searching.svg"}
            alt={errorStatus!=='' ? "/svg/countingStarts.svg" : "/svg/searching.svg"}
          />
        </div>
      )}
    </div>
  );
};

export default SearchResultList;

import React from "react";
import "./index.css";
import { SearchBarProps } from "./type";
import "/svg/searchIcon.svg";

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { setKeyword, keyword, errorStatus } = props;

  return (
    <div
      className={"searchBar"}
      style={{
        boxShadow: errorStatus === "success" ? "" : "0 0 0 3px #ED2E7E"
      }}
    >
      <img
        className={"searchIcon"}
        src={"/svg/searchIcon.svg"}
        alt={"searchIcon"}
      />
      <input
        className={"inputBar"}
        id={"name"}
        name={"name"}
        autoComplete={"off"}
        placeholder={"Search what technologies we are using at DC..."}
        onChange={(e) => setKeyword(e.target.value.toString())}
        value={keyword}
      />
    </div>
  );
};

export default SearchBar;

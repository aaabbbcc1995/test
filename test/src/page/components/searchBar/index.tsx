import React from "react";
import "./index.css";
import { debounce } from "./utils";
import "/svg/searchIcon.svg";

interface SearchBarProps {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { setKeyword } = props;

  const handleOnInput = debounce(
    (e: {
      target: { value: { toString: () => React.SetStateAction<string> } };
    }) => {
      setKeyword(e.target.value.toString());
    },
    300
  );

  return (
      <div className={"searchBar"}>
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
          onChange={(e) => handleOnInput(e)}
        />
      </div>
  );
};

export default SearchBar;

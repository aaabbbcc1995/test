import React from "react";
import "./index.css";
import "/svg/searchIcon.svg";

const SearchBar: React.FC = () => {
  return (
    <div className={"searchBarContainer"}>
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
          placeholder={"Search what technologies we are using at DC..."}
        />
      </div>
    </div>
  );
};

export default SearchBar;

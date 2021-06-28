import React from "react";
import SearchBar from "./components/searchBar";
import "./app.css";
import LabelList from "./components/labelList";
import SearchResultList from "./components/searchResultList";


function App() {
  return (
    <div className="mainContainer">
      <div className="cardBody">
        <SearchBar />
        <LabelList />
        <SearchResultList/>
      </div>
      <div className="cardFooter"></div>
    </div>
  );
}

export default App;

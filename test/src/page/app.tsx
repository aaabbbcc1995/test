import React, { useEffect, useState } from "react";
import SearchBar from "./components/searchBar";
import "./app.css";
import LabelList from "./components/labelList";
import SearchResultList from "./components/searchResultList";
import axios from "axios";
import { getApiUrl } from "./urls/urls";

interface searchResultProps {
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
}

const App: React.FC = () => {
  const [searchResult, setSearchResult] = useState<searchResultProps[]>();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const data = await axios.get(getApiUrl('true','language')).then((res: any) => {
        console.log(res.data);
        setSearchResult(res.data);
      });
      console.log("data", data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mainContainer">
      <div className="cardBody">
        <SearchBar />
        <LabelList />
        <SearchResultList SearchResultList={searchResult!} />
      </div>
      <div className="cardFooter"></div>
    </div>
  );
};

export default App;

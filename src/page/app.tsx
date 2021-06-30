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
  const [loading, setLoading] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");

  const fetchData = async () => {
    try {
      setLoading(true);
      await axios.get(getApiUrl("true", keyword)).then((res: any) => {
        console.log(res.data);
        setSearchResult(res.data);
      });
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(loading);

  useEffect(() => {
    fetchData();
  }, [keyword]);

  return (
    <div className={"mainContainer"}>
      <div className={"cardContainer"}>
        <div className={"cardBody"}>
          <SearchBar setKeyword={setKeyword} />
          <LabelList />
          <SearchResultList
            searchResultList={searchResult!}
            loading={loading}
          />
          <div className={"cardFooter"}></div>
        </div>
      </div>
    </div>
  );
};

export default App;

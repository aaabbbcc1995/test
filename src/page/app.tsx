import React, { useEffect, useState } from "react";
import SearchBar from "./components/searchBar";
import "./app.css";
import LabelList from "./components/labelList";
import SearchResultList from "./components/searchResultList";
import axios from "axios";

import FooterText from "./components/footerText";
import { getApiUrl } from "./urls/urls";
import { searchResultProps } from "./type";

const App: React.FC = () => {
  const [searchResult, setSearchResult] = useState<searchResultProps[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const [errorStatus, setErrorStatus] = useState<string>("success");

  function useDebounceHook(value: string, delay: number) {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
      let timer = setTimeout(() => setDebounceValue(value), delay);
      return () => clearTimeout(timer);
    }, [value, delay]);
    return debounceValue;
  }

  const searchKeyword = useDebounceHook(keyword, 300);

  const fetchData = async () => {
    try {
      setLoading(true);
      await axios
        .get(getApiUrl("false", keyword), { timeout: 4000 })
        .then((res: any) => {
          setSearchResult(res.data);
        });
      setLoading(false);
      setErrorStatus("success");
    } catch (e) {
      setLoading(false);
      if (e.response === undefined) {
        setErrorStatus("timeout");
      } else {
        setErrorStatus("failed");
      }
    }
  };

  useEffect(() => {
    setSearchResult([]);
    fetchData();
  }, [searchKeyword]);

  return (
    <div className={"mainContainer"}>
      <div className={"cardContainer"}>
        <div className={"cardBody"}>
          <SearchBar
            setKeyword={setKeyword}
            keyword={keyword}
            errorStatus={errorStatus}
          />
          <LabelList selectedLabel={keyword} setKeyword={setKeyword} />
          <SearchResultList
            searchResultList={searchResult!}
            loading={loading}
            errorStatus={errorStatus!}
          />
          <div className={"cardFooter"}>
            <FooterText
              loading={loading}
              resultsLength={searchResult ? searchResult.length : 0}
              errorStatus={errorStatus!}
            />
          </div>
        </div>
      </div>
      <div className={"DCLogo"}>D C</div>
    </div>
  );
};

export default App;

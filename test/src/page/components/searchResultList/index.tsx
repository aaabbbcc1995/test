import React from "react";
import Loading from "../loading";
import SingleCard from "./components/singCard";
import "./index.css";

interface SearchResultListProps {
  searchResultList: {
    title: string;
    description: string;
    image: string;
    url: string;
    category: string;
  }[];
  loading: boolean;
}

const SearchResultList: React.FC<SearchResultListProps> = (props) => {
  const { searchResultList, loading } = props;

  return (
    <div className="searchResultListContainer">
      {loading && <Loading />}
      {searchResultList && searchResultList.length > 0
        ? searchResultList.map((item) => {
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
        : null}
    </div>
  );
};

export default SearchResultList;

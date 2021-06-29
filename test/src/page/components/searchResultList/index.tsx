import React from "react";
import SingleCard from "./components/singCard";
import "./index.css";

interface SearchResultListProps {
  SearchResultList: {
    title: string;
    description: string;
    image: string;
    url: string;
    category: string;
  }[];
}

const SearchResultList: React.FC<SearchResultListProps> = (props) => {
  const { SearchResultList } = props;

  return (
    <div className="searchResultListContainer">
      {SearchResultList && SearchResultList.length > 0
        ? SearchResultList.map((item) => {
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

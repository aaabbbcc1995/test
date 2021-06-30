interface SearchResultListProps {
  searchResultList: {
    title: string;
    description: string;
    image: string;
    url: string;
    category: string;
  }[];
  loading: boolean;
  errorStatus: string;
}
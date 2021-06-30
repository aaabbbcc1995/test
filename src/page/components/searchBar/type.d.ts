export interface SearchBarProps {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
  errorStatus: string;
}
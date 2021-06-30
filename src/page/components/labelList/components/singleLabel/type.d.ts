export interface SingleLabelProps {
  width: string;
  title: string;
  selectedLabel: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}
import "./search-box.styles.css";
import { ChangeEvent, ChangeEventHandler } from "react";

// interface ISearchBoxProps extends ISearchChangeHandlerProps {
//   className: string;
//   placeholder?: string | null;
// }

// interface ISearchChangeHandlerProps {
//   onSearchChange: (searchText: string) => void;
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // func: ChangeEventHandler;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onSearchChange,
}: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}}`}
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;

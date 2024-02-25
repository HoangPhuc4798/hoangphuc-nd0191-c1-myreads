
import { ClosingSearchButton } from "../../components/Searching/SearchClosing";
import { SearchInput } from "../../components/Searching/SearchInput";

export const SearchBar = ({ searchParam, onSearch, onReset }) => {
  return (
    <div className="search-books-bar">
      <ClosingSearchButton onClose={onReset} />
      <SearchInput query={searchParam} onChange={onSearch} />
    </div>
  );
};

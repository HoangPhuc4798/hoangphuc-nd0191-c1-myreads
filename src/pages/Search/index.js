import { SearchBar } from "./SearchBar";
import { SearchResult } from "./SearchResult";

export const SearchBookPage = ({
  searchParam,
  onSearch,
  onReset,
  books,
  searchResult,
  onShelfChange,
}) => {
  return (
    <div className="search-books">
      <SearchBar
        searchParam={searchParam}
        onSearch={onSearch}
        onReset={onReset}
      />
      <SearchResult
        books={books}
        searchResult={searchResult}
        onShelfChange={onShelfChange}
      />
    </div>
  );
};

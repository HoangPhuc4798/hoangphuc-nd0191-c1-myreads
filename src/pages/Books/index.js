import { SearchButton } from "../../components/Searching/SearchButton";
import { BooksContent } from "./BooksContent";

export const BooksPage = ({ bookshelves, books, onShelfChange }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BooksContent
        bookshelves={bookshelves}
        books={books}
        onShelfChange={onShelfChange}
      />
      <SearchButton />
    </div>
  );
};

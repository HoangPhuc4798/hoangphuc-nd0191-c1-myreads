import { Book } from "../../components/Book";

export const SearchResult = ({ searchResult, books, onShelfChange }) => {
  const processedBooks = searchResult.map((searchedBook) => {
    books.map((book) => {
      if (book.id === searchedBook.id) {
        searchedBook.shelf = book.shelf;
      }
      return book;
    });
    return searchedBook;
  });

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {!processedBooks && <i>No book found :(</i>}
        {processedBooks?.map((book, idx) => (
          <Book
            key={idx}
            book={book}
            shelf={book.shelf ? book.shelf : "none"}
            onShelfChange={onShelfChange}
          />
        ))}
      </ol>
    </div>
  );
};

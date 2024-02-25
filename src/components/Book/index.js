import { BookShelfChanger } from "../BookShelf/BookShelfChanger";

export const Book = ({ book, shelf, onShelfChange }) => {
  const { title, authors, imageLinks } = book;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${imageLinks?.thumbnail}")`,
          }}
        ></div>
        <BookShelfChanger
          book={book}
          shelf={shelf}
          onShelfChange={onShelfChange}
        />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors ? <>{authors.join(",")}</> : <i> No Information</i>}
      </div>
    </div>
  );
};

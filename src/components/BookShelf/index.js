import { Book } from "../Book";

export const BookShelf = ({ shelf, books, onShelfChange }) => {
  const { key: shelfKey, name } = shelf;
  const booksOnThisShelf = books?.filter((b) => b.shelf === shelfKey) ?? [];
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        {booksOnThisShelf?.length === 0 ? (
          <i>No book</i>
        ) : (
          <ol className="books-grid">
            {booksOnThisShelf.map((b, idx) => (
              <li key={idx}>
                <Book book={b} shelf={shelfKey} onShelfChange={onShelfChange} />
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

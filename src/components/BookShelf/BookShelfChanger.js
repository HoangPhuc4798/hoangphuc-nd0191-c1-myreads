import { useState } from "react";
import { BookShelves } from "../../constants/constant";

export const BookShelfChanger = ({ book, shelf, onShelfChange }) => {
  const [selectedShelf, setShelf] = useState(shelf);

  const onSelect = (e) => {
    if (e.currentTarget.value !== book.shelf) {
      setShelf(e.currentTarget.value);
      onShelfChange(book, e.currentTarget.value);
    }
  };

  return (
    <div className="book-shelf-changer">
      <select value={selectedShelf} onChange={onSelect}>
        <option value="move" disabled>
          Move to...
        </option>
        {BookShelves.map((bookshelf) => (
          <option key={bookshelf.key} value={bookshelf.key}>
            {bookshelf.name}
          </option>
        ))}
      </select>
    </div>
  );
};

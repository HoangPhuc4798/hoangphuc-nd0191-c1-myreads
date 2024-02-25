import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import * as BookAPI from "./BooksAPI";
import * as Constants from "./constants/constant";
import { BooksPage } from "./pages/Books";
import { SearchBookPage } from "./pages/Search";

function App() {
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);
  const [currentSearchParam, setCurrentSearchParam] = useState([]);

  useEffect(() => {
    BookAPI.getAll().then((b) => setBooks(b));
  }, []);

  const moveBookToShelf = (book, shelf) => {
    // Update Book To Shelf
    BookAPI.update(book, shelf);

    //Set State
    setBooks((oldBooks) => {
      let temp = [...oldBooks];
      if (!temp.find((e) => e.id === book.id)) temp.push(book);

      return temp.map((e) => {
        if (e.id === book.id) e.shelf = shelf;
        return e;
      });
    });
  };

  const onBookSearchingDebounced = useDebouncedCallback((param) => {
    if (!param || param.length <= 0) {
      // setCurrentSearchQuery("");
      setSearchBooks([]);
      return;
    }

    // Call API
    BookAPI.search(param).then((result) => {
      setSearchBooks(result.error ? [] : result);
    });
  }, 250);

  const onBookSearching = (param) => {
    setCurrentSearchParam(param);
    onBookSearchingDebounced(param);
  };

  const onResetSearchParam = () => {
    setCurrentSearchParam("");
    setSearchBooks([]);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <BooksPage
                bookshelves={Constants.BookShelves.filter(
                  (bs) => bs.renderOnView
                )}
                books={books}
                onShelfChange={moveBookToShelf}
              />
            }
          ></Route>
          <Route
            path="/search"
            element={
              <SearchBookPage
                searchParam={currentSearchParam}
                onSearch={onBookSearching}
                onReset={onResetSearchParam}
                books={books}
                searchResult={searchBooks}
                onShelfChange={moveBookToShelf}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

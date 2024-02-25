import { Link } from "react-router-dom";

export const SearchButton = ({bookshelves}) => {
    return (
        <div className="open-search">
            <Link to="/search">Search a Book</Link>
        {/* <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a> */}
      </div>
    );
}
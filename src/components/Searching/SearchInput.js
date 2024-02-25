export const SearchInput = ({ param, onChange }) => {
  const onInputChange = (e) => {
    onChange(e.currentTarget.value);
  };

  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title, author, or ISBN"
        value={param}
        onChange={onInputChange}
        autoFocus
      />
    </div>
  );
};

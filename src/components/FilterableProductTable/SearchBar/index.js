const SearchBar = () => (
  <>
    <div className="mx-auto mb-4">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="mx-auto"
        type="search"
        id="search"
        placeholder="Search..."
      />
    </div>

    <div className="flex items-center mb-4">
      <input type="checkbox" id="in-stock-only" />
      <label htmlFor="in-stock-only">Only show products in stock</label>
    </div>
  </>
);

export default SearchBar;

import { useState } from "react";
import Table from "./ProductTable";
import Search from "./SearchBar";

const FilterableProductTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  function handleClick() {
    setInStockOnly((prev) => !prev);
  }

  function handleKeyup(event) {
    setSearchTerm(() => event.target.value);
  }

  return (
    <main className="container mx-auto w-1/2 flex flex-col items-center mt-8">
      <Search
        checkHandler={handleClick}
        keyupHandler={handleKeyup}
        checkValue={inStockOnly}
        searchValue={searchTerm}
      />
      <Table />
    </main>
  );
};

export default FilterableProductTable;

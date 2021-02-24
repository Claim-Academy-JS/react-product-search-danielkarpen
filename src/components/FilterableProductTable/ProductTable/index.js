import TBody from "./TBody";

const ProductTable = () => {
  return (
    <table className="table-auto border-gray-500 border-2 flex justify-center ">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <TBody />
    </table>
  );
};

export default ProductTable;

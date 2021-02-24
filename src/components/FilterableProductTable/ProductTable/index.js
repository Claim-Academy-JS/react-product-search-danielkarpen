import TBody from "./TBody";

const ProductTable = () => {
  return (
    <table className="mx-auto">
      <thead className="align-left">
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

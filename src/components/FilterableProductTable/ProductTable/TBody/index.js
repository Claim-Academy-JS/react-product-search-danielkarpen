import api from "api";
import { useEffect, useState } from "react";
import Row from "./Row";

function renderRows(products) {
  return products.map(({ name, price, category, stocked }, index, currArr) =>
    currArr[index - 1]?.category === currArr[index].category ? (
      <Row name={name} price={price} key={index} stocked={stocked} />
    ) : (
      <>
        <Row category={category} key={index} />
        <Row name={name} price={price} stocked={stocked} key={index} />
      </>
    )
  );
}

const TBody = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      // Await results of reading stream as JSON
      const productData = await api.index();
      setProducts(() => productData);
    })();
  }, []);

  return <tbody>{renderRows(products)}</tbody>;
};

export default TBody;

import PropTypes from "prop-types";
import { Fragment } from "react";
import Row from "./Row";

function renderRows(products) {
  return products?.map(({ name, price, category, stocked }, index, currArr) =>
    currArr[index - 1]?.category === currArr[index].category ? (
      <Row name={name} price={price} key={index} stocked={stocked} />
    ) : (
      <Fragment key={index}>
        <Row category={category} />
        <Row name={name} price={price} stocked={stocked} />
      </Fragment>
    )
  );
}

const TBody = ({ products }) => <tbody>{renderRows(products)}</tbody>;

TBody.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      price: PropTypes.string,
      stocked: PropTypes.bool,
      category: PropTypes.string,
    })
  ),
};

export default TBody;

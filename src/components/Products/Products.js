import React from "react";
import Product from "../Product/Product";

function Products(props) {
  return props.products.map((product, index) => {
    return (
      <Product
        name={product.name}
        ean={product.ean}
        type={product.type}
        weight={product.weight}
        color={product.color}
        active={product.active}
        key={index}
        removeItem={() => {
          props.removeItem(index);
        }}
      ></Product>
    );
  });
}

export default Products;

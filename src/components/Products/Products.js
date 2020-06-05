import React from "react";
import Product from "../Product/Product";

function Products(props) {
  return props.products.map((product, index) => {
    // console.log(product);
    // console.log(Object.keys(product));
    return (
      <Product
        index={index}
        name={product.name}
        ean={product.ean}
        type={product.type}
        weight={product.weight}
        color={product.color}
        active={product.isActive}
        key={index}
        isActive={(event) => {
          props.isActive(event, index);
        }}
        removeItem={() => {
          props.removeItem(index);
        }}
      ></Product>
    );
  });
}

export default Products;

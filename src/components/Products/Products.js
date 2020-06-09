import React from "react";
import Product from "./Product/Product";
import ProductsHeader from "./ProductsHeader";

function Products(props) {
  const columnNames = [
    "Name",
    "EAN",
    "Type",
    "Weight (g)",
    "Color",
    "Price (€)",
    "Quantity",
    "Active",
  ];

  return (
    <div>
      <ProductsHeader names={columnNames}></ProductsHeader>
      {props.products.map((product, index) => {
        return (
          <Product
            index={index}
            name={product.name}
            ean={product.ean}
            type={product.type}
            weight={product.weight}
            color={product.color}
            price={product.price}
            quantity={product.quantity}
            active={product.isActive}
            key={product.id}
            isActive={(event) => {
              props.isActive(event, index);
            }}
            removeItem={() => {
              props.removeItem(index);
            }}
          ></Product>
        );
      })}
    </div>
  );
}

export default Products;

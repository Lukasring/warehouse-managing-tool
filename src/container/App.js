import React, { useState } from "react";
import Products from "../components/Products/Products";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      name: "Hat",
      ean: "123456789",
      type: "headwear",
      weight: "120g",
      color: "Red",
      active: false,
    },
    {
      name: "Shirt",
      ean: "987654321",
      type: "Shirt",
      weight: "130g",
      color: "Blue",
      active: false,
    },
  ]);
  console.log(products);

  return <Products products={products}></Products>;
}

export default App;

import React, { useState } from "react";
import Products from "../components/Products/Products";
import UserInputForm from "../components/UserInput/UserInputForm";

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
      type: "Top",
      weight: "130g",
      color: "Blue",
      active: false,
    },
    {
      name: "Sweater",
      ean: "123454321",
      type: "Top",
      weight: "200g",
      color: "Yellow",
      active: false,
    },
  ]);

  const removeProductHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  // const addProductHandler = (addedProduct, products) => {
  //   const newProducts = [...products, { addedProduct }];
  //   setProducts(newProducts);
  // };

  const handleFormSubmit = (event, userInput) => {
    event.preventDefault();
    console.log(userInput);
    // addProductHandler(products, userInput);
    const newProducts = [...products];
    newProducts.push(userInput);
    console.log(newProducts);
    setProducts(newProducts);
  };

  return (
    <div>
      <Products
        products={products}
        removeItem={removeProductHandler}
      ></Products>
      <UserInputForm submitHandler={handleFormSubmit}></UserInputForm>
    </div>
  );
}

export default App;

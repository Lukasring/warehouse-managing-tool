import React, { useState } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Navigation/Nav";
import Products from "../components/Products/Products";
import UserInputForm from "../components/UserInput/UserInputForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      name: "Hat",
      ean: "123456789",
      type: "headwear",
      weight: "120g",
      color: "Red",
    },
    {
      name: "Shirt",
      ean: "987654321",
      type: "Top",
      weight: "130g",
      color: "Blue",
    },
    {
      name: "Sweater",
      ean: "123454321",
      type: "Top",
      weight: "200g",
      color: "Yellow",
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
    setProducts(newProducts);
  };

  const checkboxHandler = (event, index) => {
    const newProducts = [...products];
    newProducts[index].isActive = event.target.checked;
    setProducts(newProducts);
    console.log(products);
  };

  const productList = (
    <Products
      products={products}
      isActive={checkboxHandler}
      removeItem={removeProductHandler}
    ></Products>
  );

  const userInputForm = (
    <UserInputForm submitHandler={handleFormSubmit}></UserInputForm>
  );

  return (
    <Router>
      <Switch>
        <div>
          <Header headerText="Warehouse Product Editing Tool"></Header>
          <Nav></Nav>
          <Route path="/products" exact>
            {productList}
          </Route>
          <Route path="/products/create">{userInputForm}</Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Navigation/Nav";
import Products from "../components/Products/Products";
import UserInputForm from "../components/UserInput/UserInputForm";
import Preview from "../components/Preview/Preview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      name: "Hat",
      ean: "123456789",
      type: "headwear",
      weight: "120",
      color: "Red",
      isActive: false,
    },
    {
      name: "Shirt",
      ean: "987654321",
      type: "Top",
      weight: "130",
      color: "Blue",
      isActive: false,
    },
    {
      name: "Sweater",
      ean: "123454321",
      type: "Top",
      weight: "200",
      color: "Yellow",
      isActive: false,
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
    console.log(index);
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
      <div>
        <Header headerText="Warehouse Product Editing Tool"></Header>
        <Nav></Nav>
        <Switch>
          <Route path="/products" exact>
            {productList}
          </Route>
          <Route path="/products/create" exact>
            {userInputForm}
          </Route>
        </Switch>
        <Route path="/products/preview/:id">
          <Preview products={products}></Preview>
        </Route>
      </div>
    </Router>
  );
}

export default App;

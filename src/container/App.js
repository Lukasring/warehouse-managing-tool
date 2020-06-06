import React, { useState } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Navigation/Nav";
import Products from "../components/Products/Products";
import UserInputForm from "../components/UserInput/UserInputForm";
import Preview from "../components/Preview/Preview";
import PreviewList from "../components/Preview/PreviewList";
import EditProduct from "../components/EditProduct/EditProduct";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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

  const formSubmitHandler = (event, userInput) => {
    event.preventDefault();
    console.log(userInput);
    // addProductHandler(products, userInput);
    const newProducts = [...products];
    newProducts.push(userInput);
    setProducts(newProducts);
  };

  const saveEditHandler = (event, editedProduct, index) => {
    event.preventDefault();
    const newProducts = [...products];
    newProducts[index] = editedProduct;
    setProducts(newProducts);
  };

  const checkboxHandler = (event, index) => {
    const newProducts = [...products];
    newProducts[index].isActive = event.target.checked;
    setProducts(newProducts);
  };

  const productList = (
    <Products
      products={products}
      isActive={checkboxHandler}
      removeItem={removeProductHandler}
    ></Products>
  );

  const userInputForm = (
    <UserInputForm submitHandler={formSubmitHandler}></UserInputForm>
  );

  return (
    <Router>
      <div>
        <Header headerText="Warehouse Product Editing Tool"></Header>
        <Nav></Nav>
        <Switch>
          <Route exact path="/products">
            {productList}
          </Route>
          <Route path="/products/create" exact>
            {userInputForm}
          </Route>
          <Route path="/products/preview/:id">
            <Preview products={products}></Preview>
          </Route>
          <Route path="/products/:id/edit">
            <EditProduct
              products={products}
              saveEditHandler={saveEditHandler}
            ></EditProduct>
          </Route>
          <Route exact path="/">
            <Redirect to="/products/preview"></Redirect>
          </Route>
          <Route exact path="/products/preview">
            <PreviewList products={products}></PreviewList>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

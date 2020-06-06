import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Navigation/Nav";
import Products from "../components/Products/Products";
import UserInputForm from "../components/UserInput/UserInputForm";
import DetailedPreview from "../components/Preview/DetailedPreview";
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
  // const [products, setProducts] = useState([
  //   // {
  //   //   name: "Hat",
  //   //   ean: "123456789",
  //   //   type: "headwear",
  //   //   weight: "120",
  //   //   color: "Red",
  //   //   isActive: false,
  //   // },
  //   // {
  //   //   name: "Shirt",
  //   //   ean: "987654321",
  //   //   type: "Top",
  //   //   weight: "130",
  //   //   color: "Blue",
  //   //   isActive: false,
  //   // },
  //   // {
  //   //   name: "Sweater",
  //   //   ean: "123454321",
  //   //   type: "Top",
  //   //   weight: "200",
  //   //   color: "Yellow",
  //   //   isActive: false,
  //   // },
  // ]);

  // const [products, setProducts] = useState(
  //   localStorage.getItem("products" || "")
  // );

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products") || "")
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

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

  let productList = (
    <Products
      products={products}
      isActive={checkboxHandler}
      removeItem={removeProductHandler}
    ></Products>
  );

  if (products.length === 0) {
    productList = <p>There are no products</p>;
  }

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
            <DetailedPreview products={products}></DetailedPreview>
          </Route>
          <Route path="/products/:id/edit">
            <EditProduct
              products={products}
              saveEditHandler={saveEditHandler}
            ></EditProduct>
          </Route>
          <Route exact path="/">
            <Redirect to="/products"></Redirect>
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

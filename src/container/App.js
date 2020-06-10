import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Navigation/Nav";
import Products from "../components/Products/Products";
import UserInputForm from "../components/UserInput/UserInputForm";
import DetailedPreview from "../components/Preview/DetailedPreview";
import PreviewList from "../components/Preview/PreviewList";
import EditProduct from "../components/EditProduct/EditProduct";
import {
  logPriceChange,
  logQuantityChange,
} from "../HelperFunctions/changeLoging";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";

function App() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products"))
      ? JSON.parse(localStorage.getItem("products"))
      : []
  );

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevState = usePrevious(products);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    logPriceChange(prevState, products);
    logQuantityChange(prevState, products);
  });

  const removeProductHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  const formSubmitHandler = (event, userInput) => {
    event.preventDefault();
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
    productList = (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.2rem",
        }}
      >
        <p>There are no products</p>
      </div>
    );
  }

  const textInputNames = ["name", "ean", "type", "color"];
  const numberInputNames = ["weight", "price", "quantity"];

  const userInputForm = (
    <UserInputForm
      submitHandler={formSubmitHandler}
      namesText={textInputNames}
      namesNumbers={numberInputNames}
      formTitle={"Enter Product Details"}
    ></UserInputForm>
  );

  return (
    <Router>
      <div>
        <Header headerText="Warehouse Product Managing Tool"></Header>
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
              namesText={textInputNames}
              namesNumbers={numberInputNames}
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

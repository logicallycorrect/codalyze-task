import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { initialData } from "./actions";
import Products from "./components/Products";
import EditProduct from "./components/EditProduct";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(initialData());
  }
  setLoading;
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route
            exact
            path="/edit-product/:productId"
            component={EditProduct}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect()(App);

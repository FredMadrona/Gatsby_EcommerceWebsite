import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import AboutPage from "./about"
import Cart from "./Cart"
import Checkout from "./Checkout"
import ProductsPage from "./ProductsPage"
import Login from "../components/login"
import HomePage from "./Home"


const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/HomePage" component={HomePage} />
      <PrivateRoute path="/app/Cart" component={Cart} />
      <PrivateRoute path="/app/about" component={AboutPage} />
      <PrivateRoute path="/app/Checkout" component={Checkout} />
      <PrivateRoute path="/app/ProductsPage" component={ProductsPage} />
            <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
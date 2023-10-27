import * as React from "react";
/**import { Link } from 'gatsby' */
import "tailwindcss/tailwind.css";
/**import { container, heading } from "./layout.module.css"; */
import Navbar from "./NavBar/Nav_bar.js";
import HorizontalMenu from "./NavBar/HorizontalMenu";
import FooterMenu from "./Footer/FooterMenu.js";
import PaymentFooter from "./Footer/PaymentFooter.js";
import ProductPage from "./ProductPage/ProductPage.js";
import NavTrail from "./NavTrail/NavTrail";
import ProductPagination from "./ProductPage/ProductPagination.js";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Navbar> </Navbar>
      <div className="pt-5">
        <HorizontalMenu> </HorizontalMenu>
        <NavTrail> </NavTrail>
      </div>
      <main>
        <h1> {pageTitle}</h1>
        <ProductPage></ProductPage>
        <ProductPagination></ProductPagination>
        {children}
      </main>
      <FooterMenu> </FooterMenu>
      <PaymentFooter> </PaymentFooter>
    </div>
  );
};

export default Layout;

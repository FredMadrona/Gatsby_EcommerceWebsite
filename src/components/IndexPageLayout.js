import * as React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./NavBar/Nav_bar.js";
import HorizontalMenu from "./NavBar/HorizontalMenu";
import FooterMenu from "./Footer/FooterMenu.js";
import PaymentFooter from "./Footer/PaymentFooter.js";
import DropdownMenu from "./NavBar/DropdownMenu.js";
import ImageSlider from "../components/IndexPage/ImageSlider.js";
import ProductCards from "./IndexPage/ProductCards.js";
import { Link } from "gatsby";

const IndexPageLayout = ({ pageTitle, children }) => {
    return (
      <div>
        <Navbar> </Navbar>
        <div className="pt-5">
          <HorizontalMenu> </HorizontalMenu>
          <DropdownMenu></DropdownMenu>
       </div>
        <main>
        <div className="flex justify-center align-center">
      {/* Other content on your page */}
      <ImageSlider />
      <Link to="ProductsPage"> To the ProductsPage</Link>
      {/* More content */}
    </div>
    <ProductCards></ProductCards>
        </main>
        <FooterMenu> </FooterMenu>
        <PaymentFooter> </PaymentFooter>
      </div>
    );
  };
  
  export default IndexPageLayout;
  
import * as React from "react";
import Navbar from "./NavBar/Nav_bar.js";
import HorizontalMenu from "./NavBar/HorizontalMenu";
import FooterMenu from "./Footer/FooterMenu.js";
import PaymentFooter from "./Footer/PaymentFooter.js";
import DropdownMenu from "./NavBar/DropdownMenu.js";
import ProductOptions from "./AddToCart/ProductOptions.js";


const AddToCartLayout = ({ pageTitle, children }) => {
  return (

    <div>

        <Navbar></Navbar>
        <HorizontalMenu></HorizontalMenu>
        <DropdownMenu> </DropdownMenu>
        
        <ProductOptions></ProductOptions>

        <FooterMenu></FooterMenu>    
        <PaymentFooter></PaymentFooter>
    </div>
  );
  
};

export default AddToCartLayout;

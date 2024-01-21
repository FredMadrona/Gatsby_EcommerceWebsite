import * as React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./NavBar/Nav_bar.js";
import HorizontalMenu from "./NavBar/HorizontalMenu.js";
import FooterMenu from "./Footer/FooterMenu.js";
import PaymentFooter from "./Footer/PaymentFooter.js";
import DropdownMenu from "./NavBar/DropdownMenu.js";
import ImageSlider from "./HomePage/ImageSlider.js";
import ProductCards from "./HomePage/ProductCards.js";


const HomePageLayout = ({ pageTitle, children }) => {
    return (
      <div>
        <Navbar> </Navbar>
        <div className="pt-5">
          <HorizontalMenu> </HorizontalMenu>
          <DropdownMenu></DropdownMenu>
       </div>
        <main>
        <div className="flex justify-center align-center">
    
      <ImageSlider />
     
          </div>
   
    <ProductCards></ProductCards>
        </main>
         
        <FooterMenu> </FooterMenu>
        <PaymentFooter> </PaymentFooter>

        
      </div>
    );
  };
  
  export default HomePageLayout;
  
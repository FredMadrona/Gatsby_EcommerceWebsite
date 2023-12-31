import * as React from 'react'
import Navbar from "./NavBar/Nav_bar.js";
import HorizontalMenu from "./NavBar/HorizontalMenu";
import FooterMenu from "./Footer/FooterMenu.js";
import PaymentFooter from "./Footer/PaymentFooter.js";
import DropdownMenu from "./NavBar/DropdownMenu.js";
import CheckoutNavTrail from './Checkout/CheckoutNavTrail.js';
import CheckoutContent from './Checkout/CheckoutContent.js';


const CheckoutPageLayout = () =>{

    return(
        <div>
        <Navbar></Navbar>
    <HorizontalMenu></HorizontalMenu>
    <DropdownMenu> </DropdownMenu>
   <CheckoutNavTrail></CheckoutNavTrail>
   <CheckoutContent></CheckoutContent>
    <FooterMenu></FooterMenu>    
    <PaymentFooter></PaymentFooter>

    </div>

    );



}


export default CheckoutPageLayout;
import * as React from "react";
import Navbar from "./NavBar/Nav_bar.js";
import HorizontalMenu from "./NavBar/HorizontalMenu";
import FooterMenu from "./Footer/FooterMenu.js";
import PaymentFooter from "./Footer/PaymentFooter.js";
import DropdownMenu from "./NavBar/DropdownMenu.js";
import CartNavTrail from "./Cart/CartNavTrail.js";
import CartContent from "./Cart/CartContent.js";
import ShippingDetails from "./Cart/ShippingDetails.js";

const CartLayout = ()  =>{

    return(
        <div>
            <Navbar></Navbar>
        <HorizontalMenu></HorizontalMenu>
        <DropdownMenu> </DropdownMenu>
        <CartNavTrail></CartNavTrail>
        <CartContent></CartContent>
        <ShippingDetails></ShippingDetails>
        <FooterMenu></FooterMenu>    
        <PaymentFooter></PaymentFooter>

        </div>
    )
}

export default CartLayout
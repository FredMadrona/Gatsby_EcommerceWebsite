import React from "react";
import Mastercard from "./FooterImages/Mastercard.svg";
import Visa from "./FooterImages/VISA.svg";
import Paypal from "./FooterImages/Paypal.svg";
import ApplePay from "./FooterImages/ApplePay.svg"
import GooglePay  from "./FooterImages/GooglePay.svg";
import Stripe from "./FooterImages/Stripe.svg"


const PaymentFooter = () => {
  return (
    <div className="py-4 px-3 border-t border-gray-300 flex justify-center w-full">
      <div className="grid  justify-center md:justify-between lg:w-3/4 grid-cols-1 md:grid-cols-2 items-center gap-4">
        
        <div className="text-start ml-5 ">
          <p className="text-gray-500">&copy; 2023 Hardwares Philippines. All Rights Reserved.</p>
        </div>
        <div className=" flex justify-center md:justify-end space-x-4  ">
            <img
            src={Visa} // Replace with the path to your Mastercard SVG icon
            alt="VISA"
            className="h-10 w-10"
          />
           <img
            src={Mastercard} // Replace with the path to your Mastercard SVG icon
            alt="Mastercard"
            className="h-10 w-10"
          />

          <img
            src={Paypal} // Replace with the path to your Paypal SVG icon
            alt="Paypal"
            className="h-10 w-10"
          />
          <img
            src={ApplePay} // Replace with the path to your ApplePay SVG icon
            alt="ApplePay"
            className="h-10 w-10"
          />
          <img
            src={GooglePay} // Replace with the path to your GooglePay SVG icon
            alt="GooglePay"
            className="h-10 w-10"
          />
          <img
            src={Stripe} // Replace with the path to your Stripe SVG icon
            alt="Stripe"
            className="h-10 w-10"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentFooter;

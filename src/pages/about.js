import React from "react";
import AddToCartLayout from "../components/AddToCartLayout";
import PrivateRoute from "../components/privateRoute";

const AboutPage = () => {
  return (
    <div>
       <PrivateRoute path="/app/AddtoCartLayout" component={AddToCartLayout} />
    </div>
  );
};

export default AboutPage;

export const Head = () => <title>About Page</title>;

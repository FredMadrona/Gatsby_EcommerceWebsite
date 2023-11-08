import React from "react";
import AddToCartLayout from "../components/AddToCartLayout"


const AboutPage = () => {
    return(
<div>
<h1>
    This is the about page
</h1>
<AddToCartLayout></AddToCartLayout>
</div>

    );
}

export default AboutPage

export const Head = () => <title>About Page</title>

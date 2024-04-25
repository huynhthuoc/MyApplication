import React from "react";

import Banner from "./components/Banner";
import ProductControl from "./components/ProductControl";
//style scss
import "./product.scss";
const Products = () => {
    return (
        <div className="product">
            <Banner />
            <ProductControl />
        </div>
    );
};

export default Products;

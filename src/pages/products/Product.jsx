import React from "react"

import Banner from "./Banner"
import ProductList from "./ProductList"
//style scss
import "./style/product.scss"
const Products = () => {
    return (
        <div className="product">
            <Banner />
            <ProductList />
        </div>
    )
}

export default Products

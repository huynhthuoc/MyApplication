import React from "react";
//components
import { useStoreContext } from "~/store";
import Banner from "./components/Banner";
import ProductControl from "./components/ProductControl";
//style scss
import "./product.scss";
const Products = () => {
    const [state] = useStoreContext();
    const [index, setIndex] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);
    const product = React.useMemo(() => {
        return state[index];
    }, [state, index]);

    return (
        <div className="product">
            <Banner />
            <ProductControl
                product={product}
                index={index}
                setIndex={setIndex}
                setIsActive={setIsActive}
                isActive={isActive}
            />
        </div>
    );
};

export default Products;

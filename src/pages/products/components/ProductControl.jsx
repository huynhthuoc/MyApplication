import React from "react";
import { useStoreContext } from "~/store";
import { getImageUrl } from "~/utils";
//components

const ProductList = () => {
    const [state] = useStoreContext();
    const [index, setIndex] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);

    const product = React.useMemo(() => {
        return state[index];
    }, [state, index]);

    React.useEffect(() => {
        let clearActive;
        clearActive = setTimeout(() => {
            setIsActive("off");
        }, 1000);

        return () => clearTimeout(clearActive);
    }, [isActive]);

    function handleClick(e) {
        if (isActive === "off") {
            if (e.target.innerText === "Next") {
                setIndex((index + 1) % state.length);
                setIsActive("onRight");
            } else {
                setIndex((index - 1 + state.length) % state.length);
                setIsActive("onLeft");
            }
        }
    }

    return (
        <div className="product-control">
            <div className="control-btn">
                <button
                    style={
                        isActive === "onLeft"
                            ? {
                                  opacity: 0.4,
                                  border: "none",
                                  cursor: "default",
                              }
                            : {}
                    }
                    onClick={handleClick}
                >
                    Prev
                </button>
                <button
                    style={
                        isActive === "onRight"
                            ? {
                                  opacity: 0.4,
                                  border: "none",
                                  cursor: "default",
                              }
                            : {}
                    }
                    onClick={handleClick}
                >
                    Next
                </button>
            </div>

            <div className="product-control-titles">
                <div className="title-heading">
                    <h2
                        className={
                            isActive === "off"
                                ? ""
                                : isActive === "onLeft" &&
                                  isActive !== "onRight"
                                ? "animate__fadeInDown"
                                : "animate__fadeInUp"
                        }
                    >
                        {product.id}
                    </h2>
                    <p>{product.titles.title}</p>
                </div>

                <div className="product-control-slider">
                    <div
                        className={`slider-show-img ${
                            isActive === "onLeft" || isActive === "onRight"
                                ? "run-aniamtion"
                                : ""
                        }`}
                    >
                        <img src={product.banner} alt="" />
                    </div>

                    <div className="product-control-screencode">
                        <img src={getImageUrl("imgapp/loading.jpg")} alt="" />
                        <img src={getImageUrl("imgapp/loading.jpg")} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;

import React from "react";

import { useStoreContext } from "~/store";
const ProductList = () => {
    const [state] = useStoreContext();
    const [index, setIndex] = React.useState(0);
    const [indexList, setIndexList] = React.useState(index);
    const [listProducts, setListProducts] = React.useState(state.slice(0, 3));
    const [isControl, setIsControl] = React.useState(true);
    const [isActive, setIsActive] = React.useState(false);
    React.useEffect(() => {
        let clearActive;
        clearActive = setTimeout(() => {
            setIsActive(null);
        }, 2100);

        return () => clearTimeout(clearActive);
    }, [isActive]);

    React.useEffect(() => {
        if (isControl) {
            if (indexList === 0) {
                if (index === state.length - 1) {
                    const twoItem = [...state].slice(0, 2);
                    setListProducts(
                        [...state].slice(index, index + 3).concat(twoItem)
                    );
                } else if (index === state.length - 2) {
                    const oneItem = [...state].slice(0, 1);
                    setListProducts(
                        [...state].slice(index, index + 3).concat(oneItem)
                    );
                } else {
                    setListProducts([...state].slice(index, index + 3));
                }
            }
        } else {
            if (indexList === 2) {
                setListProducts([...state].slice(index - 2, index + 1));
                if (index === 0) {
                    const twoItem = [...state].slice(
                        state.length - 2,
                        state.length
                    );
                    setListProducts(
                        twoItem.concat([...state].slice(index, index + 1))
                    );
                }
                if (index === 1) {
                    const oneItem = [...state].slice(
                        state.length - 1,
                        state.length
                    );
                    setListProducts([
                        ...oneItem,
                        ...[...state].slice(0, index + 1),
                    ]);
                }
            }
        }
    }, [index, indexList, state, isControl]);

    function handleClick(e) {
        if (e.target.innerText === "Next") {
            setIndex((index + 1) % state.length);
            setIndexList((indexList + 1) % listProducts.length);
            setIsControl(true);
            setIsActive(true);
        } else {
            setIndex((index - 1 + state.length) % state.length);
            setIndexList(
                (indexList - 1 + listProducts.length) % listProducts.length
            );
            setIsControl(false);

            setIsActive(false);
        }
    }

    return (
        <div className="product-control">
            <div className="product-control-btn">
                <button onClick={handleClick}>Prev</button>
                <button onClick={handleClick}>Next</button>
            </div>

            {/* <div className="product-control-dot">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div> */}

            <div className="product-control-titles">
                <h2
                    className={
                        isActive === null
                            ? ""
                            : isActive === true
                            ? "animate__bounceIn"
                            : "animate__fadeInLeft"
                    }
                >
                    {listProducts[indexList].id}
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae nobis neque architecto inventore molestiae at ea,
                    eius animi eveniet
                </p>
                <button>Deploy Vercel ▲</button>
            </div>

            <ul className="product-control-images">
                {listProducts.map((item, i) => (
                    <li
                        className={i === indexList ? "active" : null}
                        key={item.id}
                    >
                        <img src={item.banner} alt="banner" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;

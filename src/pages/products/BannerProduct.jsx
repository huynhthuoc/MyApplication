import React from "react"
import { ReactTyped } from "react-typed"

import { useStoreContext } from "~/store"
//style scss
const BannerProduct = () => {
    const [state, dispatch] = useStoreContext()
    const [index, setIndex] = React.useState(0)

    const product = state[index]
    return (
        <div className="products">
            <div className="banners ">
                <div className="banner">
                    <img src={product.banner} alt="" />
                </div>

                <div className="description">
                    <div className="description-title">
                        <h2>{product.titles.heading}</h2>
                        <p>{product.titles.title}</p>

                        <div className="description-btn">
                            <button>
                                Watch Deploy{" "}
                                <ReactTyped
                                    strings={[
                                        `<b>Vercel</b> <i class="fi fi-rr-triangle"></i>`,
                                    ]}
                                    backSpeed={100}
                                    typeSpeed={100}
                                    loop={true}
                                />
                            </button>
                        </div>
                    </div>

                    <div className="framework">
                        <h4>Used</h4>
                        <ul>
                            {" "}
                            {product.logos.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <img src={item} alt="logo" />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="slideShowProducts">
                <ul>
                    {state.map((item) => (
                        <li
                            onClick={() => setIndex(item.id)}
                            className={index === item.id ? "active" : null}
                            key={item.id}
                        >
                            <img src={item.banner} alt="banner" />
                        </li>
                    ))}
                </ul>
            </div>

            <p>Learn More</p>
        </div>
    )
}

export default BannerProduct

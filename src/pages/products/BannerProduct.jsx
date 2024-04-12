import React from "react"
import { ReactTyped } from "react-typed"

import { useStoreContext } from "~/store"
//style scss

const BannerProduct = () => {
    const [state, dispatch] = useStoreContext()
    const [index, setIndex] = React.useState(0)
    //assets
    const product = state[index]
    const bannerRef = React.useRef()
    const showBannerRef = React.useRef()

    React.useEffect(() => {
        //variabels scss
        if (bannerRef.current !== "undefined") {
            document.documentElement.style.setProperty(
                "--widthBanner",
                `${bannerRef.current.parentElement.clientHeight + "px"}`,
            )

            showBannerRef.current = setTimeout(() => {
                if (bannerRef.current) {
                    bannerRef.current.style.animation = `scrollY 7s linear infinite `
                }
            }, 2500)
        }
        return () => {
            if (bannerRef.current) {
                bannerRef.current.style.animation = ``
                bannerRef.current.style.transform = `translateY(0px)`
            }
        }
    }, [index])

    return (
        <div className="products">
            <div className="banners ">
                <div className="banner">
                    <img ref={bannerRef} src={product.banner} alt="" />
                </div>

                <div className="description">
                    <div className="description-title">
                        <h2>{product.titles.heading}</h2>
                        <p>{product.titles.title}</p>

                        <div className="description-btn">
                            <a href="https://github.com/huynhthuoc/MyApp">
                                Deploy{"-"}
                                <ReactTyped
                                    strings={[
                                        `<i>Vercel</i> <i class="fi fi-rr-triangle"></i>`,
                                    ]}
                                    backSpeed={100}
                                    typeSpeed={100}
                                    loop={true}
                                />
                            </a>
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

import React from "react"
import { ReactTyped } from "react-typed"

//style scss
import "./style/_banner.scss"
const fakedatanav = ["GAME", "WEBSITE", "UTILS", "STYLE", "DESIGN"]
const Banner = () => {
    return (
        <div className="product-banner">
            <div className="banner-header">
                <ul>
                    {fakedatanav.map((item) => (
                        //filer item
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <ReactTyped
                    showCursor={false}
                    loop
                    strings={[fakedatanav[1]]}
                    typeSpeed={100}
                    backSpeed={100}
                >
                    <h2>{fakedatanav[1]}</h2>
                </ReactTyped>
            </div>
        </div>
    )
}

export default Banner

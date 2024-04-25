import React from "react";
import "animate.css";

import { getImageUrl } from "~/utils";
//components
import SideMenu from "./SideMenu";
import Main from "./Main";

//style css
import "src/base.scss";

const MyApp = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${getImageUrl(
                    "imgapp/backgroundApp.jpg"
                )})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
            }}
            className="myapp"
        >
            <div className="container">
                <SideMenu />
                <Main />
            </div>
        </div>
    );
};

export default MyApp;

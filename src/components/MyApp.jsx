import React from "react";
import "animate.css";

//components
import Header from "./header/Header";
// import Main from "./main/Main";

//style css
import "./myApp.scss";
const MyApp = () => {
    // const [isActive, setIsActive] = React.useState(false);

    // function handleSetState(state) {
    //     switch (state) {
    //         case "setIsActive":
    //             setIsActive(!isActive);
    //             break;
    //         default:
    //             throw new Error("State case is undefined ");
    //     }
    // }

    return (
        <div className="myapp">
            <Header />
        </div>
    );
};

export default MyApp;

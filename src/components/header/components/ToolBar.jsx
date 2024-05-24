import { useState } from "react";
import { Link } from "react-router-dom";
//components

//style css
import "./style/toolBar.scss";

const ToolBar = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={isActive ? "toolBar toolBar-active" : "toolBar"}>
            <Link
                onClick={() => setIsActive(!isActive)}
                to={isActive ? "/" : "products"}
            >
                <i className="fi fi-ss-apps"></i>
            </Link>
        </div>
    );
};

export default ToolBar;

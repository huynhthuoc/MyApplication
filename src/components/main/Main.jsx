import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRouters } from "~/routers/index";
//style css
import "./main.scss";
const Main = () => {
    return (
        <div className="content">
            <ul
                className={`${"layer"} ${
                    isActive
                        ? "animate__fadeInRight"
                        : isActive !== undefined
                        ? "animate__fadeOutRight"
                        : ""
                }`}
                style={
                    !isActive
                        ? {
                              opacity: 0,
                              visibility: "hidden",
                          }
                        : {}
                }
            >
                <div className="layer-header">
                    <h3>Thông Báo</h3>
                    <i
                        onClick={() => setIsActive(!isActive)}
                        className="fi fi-br-x"
                    ></i>
                </div>
                {!value ? (
                    <div className="notifications">
                        <span>Thông báo trống !</span>
                    </div>
                ) : (
                    <li>123</li> //render
                )}
            </ul>

            <Routes>
                {publicRouters.map((item) => {
                    const Page = item.element;
                    return (
                        <Route
                            key={item.path}
                            path={item.path}
                            element={<Page />}
                        />
                    );
                })}
            </Routes>
        </div>
    );
};

export default Main;

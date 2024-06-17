import React from "react";

const Title = ({ title }) => {
    return (
        <p
            style={{
                position: "absolute",
                transform: "translate(-100%, -90%)",
                borderRadius: "0.5rem",
                backgroundColor: " #2d323b",
                width: "max-content",
                height: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px 0.8rem",
                zIndex: 10,
                boxShadow: "0px 1px  5px #ffff",
            }}
        >
            {title}
        </p>
    );
};

export default Title;

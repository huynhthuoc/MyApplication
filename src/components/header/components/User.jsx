import { useState } from "react";
//components
import Profile from "./Profile";

//style
import "./style/user.scss";
const User = () => {
    const [open, setOpen] = useState(null);

    function setStateValue(value) {
        if (value !== open) {
            setOpen(value);
        } else {
            setOpen(null);
        }
    }

    return (
        <>
            <div className="user">
                <div
                    className={
                        open === "open-search"
                            ? "user_search active-search"
                            : "user_search"
                    }
                >
                    <input type="text" placeholder="search..." />
                    <i
                        onClick={() => setStateValue("open-search")}
                        className="fi fi-rs-search"
                    ></i>
                </div>

                <div className="user_avatar">
                    <div
                        onClick={() => setStateValue("open-profile")}
                        className="user_avatar-img"
                    >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRndayNZS1EvBQv6dYz7hj5jVgMhD0LMeu8bw&s"
                            alt="user avatar"
                        />
                    </div>

                    {open === "open-profile" ? (
                        <Profile onOpen={setStateValue} open={open} />
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default User;

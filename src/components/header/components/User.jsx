import { useState } from "react";
//components
import Profile from "./Profile";
import { useContextData } from "~/store";
//style
import "./style/user.scss";
const User = () => {
    const [open, setOpen] = useState(null);
    const [user] = useContextData();
    const [valueInput, setValueInput] = useState("");

    function setStateValue(value) {
        if (value !== open) {
            setOpen(value);
        } else {
            setOpen(null);
        }
    }

    function handleClickOpenInput() {
        setStateValue("open-search");
        if (open !== "open-search") {
            setValueInput("");
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
                    <input
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                        type="text"
                        placeholder="Search..."
                    />
                    <i
                        onClick={handleClickOpenInput}
                        className="fi fi-rs-search"
                    ></i>
                </div>

                <div className="user_avatar">
                    <div
                        onClick={() => setStateValue("open-profile")}
                        className="user_avatar-img"
                    >
                        <img src={user.avaURL} alt="user avatar" />
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

import { useState } from "react";
import { Link } from "react-router-dom";
import "./style/profile.scss";

import { useStoreContext } from "~/store";
//components
import ProfileUser from "./ProfileUser";
import ProfileEdit from "./ProfileEdit";
const Profile = ({ onOpen }) => {
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [state, dispatch] = useStoreContext();
    const [user, setUser] = useState(state[0]);

    function handleClick() {
        setIsOpenEdit(!isOpenEdit);
    }

    function handleSubmit() {
        dispatch({ id: 0, type: "UPDATE_USER", payload: user });
    }

    return (
        <div className="profile">
            <div className="profile_header">
                <span
                    onClick={() => {
                        if (isOpenEdit) {
                            setIsOpenEdit(false);
                        }
                    }}
                >
                    {isOpenEdit ? (
                        <i className="fi fi-sr-angle-left"></i>
                    ) : (
                        <i
                            onClick={() => onOpen()}
                            className="fi fi-br-cross"
                        ></i>
                    )}
                </span>
                <h4>{isOpenEdit ? "EditProfile" : "Profile"}</h4>
                <Link
                    onClick={() => setIsOpenEdit(!isOpenEdit)}
                    to={"settings"}
                >
                    {isOpenEdit ? (
                        <i
                            onClick={handleSubmit}
                            className="fi fi-br-check"
                        ></i>
                    ) : (
                        <i
                            onClick={() => onOpen()}
                            className="fi fi-rr-settings"
                        ></i>
                    )}
                </Link>
            </div>

            {isOpenEdit ? (
                <ProfileEdit user={user} setUser={setUser} />
            ) : (
                <ProfileUser onSetIsOpenEdit={handleClick} />
            )}
        </div>
    );
};

export default Profile;

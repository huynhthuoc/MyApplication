import { useState } from "react";
import { Link } from "react-router-dom";
import "./style/profile.scss";

import { useContextData } from "~/store";
//components
import ProfileUser from "./ProfileUser";
import ProfileEdit from "./ProfileEdit";
import Title from "~/utils/components/Title";
import { useHoverTitle } from "~/utils/costumHooks/index";

const Profile = ({ onOpen }) => {
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [state, dispatch] = useContextData();
    const [user, setUser] = useState(state);
    const { isHover, handlePointerEnter, handlePointerLeave } = useHoverTitle();

    function handleClick() {
        setIsOpenEdit(!isOpenEdit);
    }

    function handleSubmit() {
        //kiem tra các trường nhập hợp lệ mới cho save
        const check = Object.values(user.isCheck).every((item) => {
            return item === true;
        });

        if (check) {
            // nếu các trường nhập thỏa mảng điều kiện sẽ được save
            setIsOpenEdit(!isOpenEdit);
            dispatch({ id: 0, type: "UPDATE_USER", payload: user });
        }
    }

    function handleCickBack() {
        if (isOpenEdit) {
            setIsOpenEdit(false);
        }
        setUser(state);
    }
    return (
        <div className="profile">
            <div className="profile_header">
                <span onClick={handleCickBack}>
                    {isHover === "back" || isHover === "closed" ? (
                        <Title title={isHover} />
                    ) : null}
                    {isOpenEdit ? (
                        <i
                            name="back"
                            onPointerEnter={() => handlePointerEnter("back")}
                            onPointerLeave={handlePointerLeave}
                            className="fi fi-sr-angle-left"
                        ></i>
                    ) : (
                        <i
                            name="closed"
                            onPointerEnter={() => handlePointerEnter("closed")}
                            onPointerLeave={handlePointerLeave}
                            onClick={() => onOpen()}
                            className="fi fi-br-cross"
                        ></i>
                    )}
                </span>
                <h4>{isOpenEdit ? "EditProfile" : "Profile"}</h4>
                <span>
                    {isHover === "save" || isHover === "settings" ? (
                        <Title title={isHover} />
                    ) : null}
                    {isOpenEdit ? (
                        <i
                            onPointerEnter={() => handlePointerEnter("save")}
                            onPointerLeave={handlePointerLeave}
                            onClick={handleSubmit}
                            className="fi fi-br-check"
                        ></i>
                    ) : (
                        <Link
                            onClick={() => setIsOpenEdit(!isOpenEdit)}
                            to={"settings"}
                        >
                            <i
                                onPointerMove={() =>
                                    handlePointerEnter("settings")
                                }
                                onPointerLeave={handlePointerLeave}
                                onClick={() => onOpen(null)}
                                className="fi fi-rr-settings"
                            ></i>
                        </Link>
                    )}
                </span>
            </div>

            {isOpenEdit ? (
                <ProfileEdit user={user} setUser={setUser} />
            ) : (
                <ProfileUser onOpen={onOpen} onSetIsOpenEdit={handleClick} />
            )}
        </div>
    );
};

export default Profile;

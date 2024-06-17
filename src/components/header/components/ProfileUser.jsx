import { Link } from "react-router-dom";

import { useContextData } from "~/store";
//style
import "./style/profileUser.scss";
const dataLink = [
    {
        path: "profiles",
        name: "My Profiles",
        icon: "fi fi-rs-user",
    },
    {
        path: "accountdetails",
        name: "Account details",
        icon: "fi fi-rr-settings",
    },
    {
        path: "addproduct",
        name: " Add Product",
        icon: "fi fi-tr-square-plus",
    },
    {
        path: "login",
        name: "Logout",
        icon: "fi fi-ts-sign-out-alt",
    },
];
export default function ProfileUser({ onOpen, onSetIsOpenEdit }) {
    const [user] = useContextData();

    return (
        <>
            <div className="profile_user">
                <img src={user.avaURL} alt="" />
                <div className="profile_user-information">
                    <h3>
                        {user.firstName} {user.lastName}
                    </h3>
                    <p>
                        <i className="fi fi-tr-envelopes"></i> {user.email}
                    </p>
                    <button onClick={onSetIsOpenEdit}>
                        Edit Profile <i className="fi fi-rr-pencil"></i>
                    </button>
                </div>
            </div>

            <ul className="profile_list">
                {dataLink.map((item) => (
                    <li key={item.name}>
                        <Link onClick={() => onOpen(null)} to={item.path}>
                            <i
                                style={
                                    item.icon === "fi fi-ts-sign-out-alt"
                                        ? { color: "red" }
                                        : {}
                                }
                                className={item.icon}
                            ></i>{" "}
                            {item.name}
                        </Link>
                        <i className="fi fi-bs-angle-small-right"></i>
                    </li>
                ))}
            </ul>
        </>
    );
}

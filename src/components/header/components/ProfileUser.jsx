import { Link } from "react-router-dom";
import { dataLink } from "~/store";
//style
import "./style/profileUser.scss";
export default function ProfileUser({ onSetIsOpenEdit }) {
    return (
        <>
            <div className="profile_user">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRndayNZS1EvBQv6dYz7hj5jVgMhD0LMeu8bw&s"
                    alt=""
                />
                <div className="profile_user-information">
                    <h3 title="name user">name user </h3>
                    <p title="rssss@gmail.com">13311232131212@gmail.com</p>
                    <button onClick={onSetIsOpenEdit}>
                        Edit Profile <i className="fi fi-rr-pencil"></i>
                    </button>
                </div>
            </div>

            <ul className="profile_user-list">
                {dataLink.map((item) => (
                    <li key={item.name}>
                        <Link to={item.path}>
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

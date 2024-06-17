import { useRef, useMemo, useState } from "react";

//components
import Input from "~/utils/components/Input";
import { dataCountries } from "~/store";
//style
import "./style/profileEdit.scss";
import Title from "~/utils/components/Title";
import { useHoverTitle } from "~/utils/costumHooks/index";
export default function ProfileEdit({ user, setUser }) {
    const [isOpenListContries, setIsOpenListCountries] = useState(false);
    const refInputOpenFile = useRef(null);
    const { isHover, handlePointerEnter, handlePointerLeave } = useHoverTitle();

    const listCountries = useMemo(() => {
        return dataCountries.filter((item) => {
            return (
                item.name.toLowerCase().indexOf(user.country.toLowerCase()) !==
                -1
            );
        });
    }, [user.country]);

    function handleClickOpenFile() {
        refInputOpenFile.current.click();
    }

    function handleChangeIMG(file) {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUser((prev) => {
                    return { ...prev, avaURL: reader.result };
                });
            };
            reader.readAsDataURL(file.target.files[0]);
        }
    }

    function handleOnBlurInputCountry() {
        const oneCountry = dataCountries.find((item) => {
            return item.name.toLowerCase() === user.country.toLowerCase();
        });
        if (oneCountry) {
            setUser((prev) => {
                return {
                    ...prev,
                    country: oneCountry.name,
                };
            });
        }

        setTimeout(() => {
            setIsOpenListCountries(false);
        }, 500);
    }

    return (
        <>
            <div className="profile_edit">
                <div className="profile_edit-img">
                    <img src={user.avaURL} alt="" />
                    <span
                        onPointerMove={() => handlePointerEnter("update")}
                        onPointerLeave={handlePointerLeave}
                        onClick={handleClickOpenFile}
                    >
                        <i className="fi fi-rr-camera"></i>
                        {isHover && <Title title="update" />}
                    </span>
                    <input
                        onChange={handleChangeIMG}
                        ref={refInputOpenFile}
                        type="file"
                        style={{ display: "none" }}
                    />
                </div>

                <div className="profile_edit-information">
                    <h3>Your information</h3>
                    <form>
                        <div>
                            <Input
                                type="text"
                                name="firstName"
                                value={user.firstName}
                                setUser={setUser}
                                user={user}
                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                name="lastName"
                                value={user.lastName}
                                setUser={setUser}
                                user={user}
                            />
                        </div>

                        <div>
                            <Input
                                type="text"
                                name="email"
                                value={user.email}
                                setUser={setUser}
                                user={user}
                            />
                        </div>

                        <div
                            onBlur={handleOnBlurInputCountry}
                            onClick={() => setIsOpenListCountries(true)}
                            className="profile_edit-searchCountries"
                        >
                            <Input
                                type="text"
                                name="country"
                                value={user.country}
                                setUser={setUser}
                                user={user}
                            />

                            <span>
                                {isOpenListContries ? (
                                    <i className="fi fi-br-angle-small-up"></i>
                                ) : (
                                    <i className="fi fi-br-angle-small-down"></i>
                                )}
                            </span>
                            <ul
                                style={
                                    isOpenListContries
                                        ? { display: "block" }
                                        : { display: "none" }
                                }
                            >
                                {listCountries.length === 0 ? (
                                    <h2
                                        style={{
                                            margin: "0 auto",
                                            display: "block",
                                        }}
                                    >
                                        Không tìm thấy quốc gia của bạn!
                                    </h2>
                                ) : (
                                    listCountries.map((item) => (
                                        <li
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsOpenListCountries(false);
                                                setUser((prev) => {
                                                    return {
                                                        ...prev,
                                                        country:
                                                            e.target.innerText,
                                                    };
                                                });
                                            }}
                                            key={item.name}
                                        >
                                            {item.name}
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

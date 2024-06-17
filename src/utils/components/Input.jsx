import React, { useEffect, useMemo, useState } from "react";
import { dataCountries } from "~/store";
import Title from "./Title";
const Input = ({ type, name, value, setUser, user }) => {
    const [isHover, setIsHover] = useState(false);

    const isCountry = useMemo(() => {
        return dataCountries.some((item) => {
            return item.name.toLowerCase() === value.toLowerCase();
        });
    }, [value]);

    //check regex input here
    useEffect(() => {
        const regexName = /^[a-zA-ZÀ-ỹ\s\d]+$/u;
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        switch (name) {
            case "firstName":
                setUser((prev) => {
                    return {
                        ...prev,
                        isCheck: {
                            ...prev.isCheck,
                            [name]: regexName.test(value),
                        },
                    };
                });
                break;

            case "lastName":
                setUser((prev) => {
                    return {
                        ...prev,
                        isCheck: {
                            ...prev.isCheck,
                            [name]: regexName.test(value),
                        },
                    };
                });
                break;

            case "email":
                setUser((prev) => {
                    return {
                        ...prev,
                        isCheck: {
                            ...prev.isCheck,
                            [name]: regexEmail.test(value),
                        },
                    };
                });
                break;
            case "country":
                setUser((prev) => {
                    return {
                        ...prev,
                        isCheck: {
                            ...prev.isCheck,
                            [name]: isCountry,
                        },
                    };
                });
                break;
            default:
                throw new Error("in invalid case check input value !!!");
        }
    }, [value, name, isCountry, setUser]);

    function handleSetInput(event) {
        setIsHover(true);
        setUser((prev) => {
            return {
                ...prev,
                [name]: event.target.value,
            };
        });
    }

    return (
        <>
            {isHover && <Title title={name} />}
            <input
                style={
                    !user.isCheck[name]
                        ? {
                              boxShadow: "0px 1px red",
                          }
                        : {
                              position: "relative",
                          }
                }
                autoComplete="off"
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={handleSetInput}
                placeholder={name}
                onClick={() => setIsHover(true)}
                onBlur={() => setIsHover(false)}
            />

            {!user.isCheck[name] && (
                <p
                    style={{
                        padding: "0.5rem",
                    }}
                >
                    {name} hơi kỳ kỳ, vui lòng kiểm tra lại!
                </p>
            )}
        </>
    );
};

export default Input;

const initState = [
    {
        id: 0,
        avaURL: null,
        firstName: "huynh",
        lastName: "em",
        country: "Viet Nam",
        email: "huynhEm@gmail.com.vn",
        isCheck: {
            firstName: true,
            lastName: true,
            country: true,
            email: true,
        },
        accounts: {
            account: "admin1",
            password: "admin1",
        },
    },
];

const reducer = function (state, action) {
    switch (action.type) {
        case "UPDATE_USER":
            return state.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...action.payload,
                    };
                } else {
                    return item;
                }
            });
        default:
            throw new Error("invalid action");
    }
};

export default reducer;
export { initState };

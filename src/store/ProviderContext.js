import { useReducer } from "react";
import { ContextDataApp } from "./context";
import reducer, { userData } from "./reducer";

function ProviderContext({ children }) {
    // const userData = dataApp[0]; // 1 hàm login và trả về thong tin cua user đó khớp với tài khoản mật khẩu và chuyển tiếp để render
    const [user, dispatch] = useReducer(reducer, userData);

    return (
        <ContextDataApp.Provider value={[user, dispatch]}>
            {children}
        </ContextDataApp.Provider>
    );
}
export default ProviderContext;

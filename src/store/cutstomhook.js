import { useContext } from "react";
import { ContextDataApp } from "./context";

export const useContextData = () => {
    return useContext(ContextDataApp);
};

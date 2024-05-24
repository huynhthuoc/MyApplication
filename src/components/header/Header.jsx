//components
import { ToolBar, User } from "./components";
//style
import "./header.scss";
const Header = () => {
    return (
        <div className="header">
            <ToolBar />
            <User />
        </div>
    );
};

export default Header;

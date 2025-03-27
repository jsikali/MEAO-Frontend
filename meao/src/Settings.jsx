import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";

const Settings = ({ setIsLoggedIn, getIsLoggedIn }) => {

    const containerStyle = {
        height: "100%",
        overflow: "auto",
        padding: "0 5%",
        backgroundColor: "#c2c6E8",
        borderRadius: "16px",
        boxSizing: "border-box",
    };

    return (
        <div style={containerStyle}>
            <div
                style={{
                    marginTop: "2vh",
                    height: "3vh",
                }}
            >
                <h2>settings</h2>
            </div>
            <div className="top-box-content">
                in the future we will have keybinds to minimize the chats
            </div>
        </div>
    );
};

export default Settings;
import { Button } from "antd";
//import { useState } from 'react';

const Settings = ({ setIsLoggedIn }) => {

    const containerStyle = {
        backgroundColor: "#c2c6E8",
        borderRadius: "16px",
        boxSizing: "border-box",
        height: "100%",
        overflow: "auto",
        padding: "0 5%",
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
                to be added
            </div>
        </div>
    );
};

export default Settings;
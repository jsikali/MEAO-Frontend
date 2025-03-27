//import { useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import SignUpButton from "./SignUpButton.jsx"
import LoginButton from "./LoginButton.jsx"

const LoginSignup = () => {
  var toggle = false;

  //const [isSelectingChat] = useState(true);

  const swapButtons = () => {
    toggle = !toggle;
    console.log("swapping to ", toggle);
  };

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
        {toggle ? (
          <h2
            style={{
              color: "#33343d",
              marginLeft: "8px",
            }}
          >
            logged in!!
          </h2>
        ) : (
          <>
            <div
              style={{
                color: "#33343d",
                marginLeft: "8px",
              }}
            >
              login/signup
            </div>
          </>
        )}
      </div>

      <div
        style={{
          height: "5vh",
          borderRadius: "10px",
        }}
      >
        <input type="text" id="username" />
        <input type="text" id="password" />
      </div>
      <Button
        type="primary"
        icon={<LeftOutlined />}
        onClick={() => swapButtons()}
        style={{
          borderRadius: "10px",
        }}
      >
        toggle
      </Button>
      { toggle? <LoginButton></LoginButton> : <SignUpButton></SignUpButton>}
    </div>
  );
};

export default LoginSignup;

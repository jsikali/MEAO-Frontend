//import { useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import SignUpButton from "./SignUpButton.jsx";
import LoginButton from "./LoginButton.jsx";
var toggle = false;

//const [isSelectingChat] = useState(true);

const swapButtons = () => {
  toggle = !toggle;
  console.log("swapping to ", toggle);
  //import { useState } from 'react';
}
  const LoginSignup = ({ setIsLoggedIn, getIsLoggedIn }) => {
    //const { token } = theme.useToken();

    const sendLoginDetails = (user, pass) => {
      console.log("actually handle this without leaking details lol");
      //for the sake of being really funny
      console.log(
        `omg the username ${user} and password ${pass} may or may not work!!`
      );
      setIsLoggedIn(!getIsLoggedIn()); //just toggle for now
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
          {getIsLoggedIn() ? (
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
        {toggle ? <LoginButton></LoginButton> : <SignUpButton></SignUpButton>}
      </div>
    );
  };

  export default LoginSignup;
};

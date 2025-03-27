//import React, { useState } from 'react';
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import SignUpButton from "./SignUpButton.jsx"
import LoginButton from "./LoginButton.jsx"
//import { useState } from 'react';

const Login = ({ setIsLoggedIn, getIsLoggedIn }) => {
  //const { token } = theme.useToken();
  var toggle = false;

  const swapButtons = () => {
    toggle = !toggle;
    console.log("swapping to ", toggle);
    if (toggle)
    {
      return <LoginButton></LoginButton>
    }else{
      return <SignUpButton></SignUpButton>
    }
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
              id="username"
              style={{
                color: "#33343d",
                marginLeft: "8px",
              }}
            >
              login/sign up!!
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
        <input type="text" id='username' />
        <input type="text" id='password' />
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
      <div>{swapButtons()}</div>
    </div>
  );
};

export default Login;
//import React, { useState } from 'react';
import { Button } from "antd";
import SignUpButton from "./SignUpButton.jsx"
import LoginButton from "./LoginButton.jsx"
//import { useState } from 'react';

const Login = ({ setToken, getToken, switchToggle, getToggle }) => {
  //const { token } = theme.useToken();
  //const [toggle, switchToggle] = useState(false);
  console.log("the toggle val is " + getToggle());
  console.log("the token val is " + getToken());

  const swapButtons = () => {
    switchToggle((toggle) => !toggle);
  };

  function ToggleButton() {

    if (getToggle()) {
      console.log("show login button");
      return <LoginButton
        setToken={setToken}></LoginButton>
    } else {
      console.log("show sign up button");
      return <SignUpButton></SignUpButton>;
    }
  }

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
        {getToken() ? (
          <h2>
            logged in!!
          </h2>
        ) : (
          <>
            <h2>login/sign up!!</h2>
            <div
              style={{
                color: "#33343d",
                marginLeft: "8px",
              }}
            >
            </div>
          </>
        )}
      </div>

      <div
        className="top-box-content"
      >
        <input type="text" id='username' />
        <input type="text" id='password' />
        <Button
          type="primary"
          onClick={() => swapButtons()}
          style={{
            borderRadius: "10px",
          }}
        >
          toggle signin/login
        </Button>
        <ToggleButton></ToggleButton>
      </div>
    </div>
  );
};

export default Login;
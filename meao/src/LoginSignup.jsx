//import React, { useState } from 'react';
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import SignUpButton from "./SignUpButton.jsx"
import LoginButton from "./LoginButton.jsx"
//import { useState } from 'react';

const Login = ({ setIsLoggedIn, getIsLoggedIn, switchToggle, getToggle }) => {
  //const { token } = theme.useToken();
  //const [toggle, switchToggle] = useState(false);
  console.log("the toggle val is " + getToggle());
  console.log("the logged in val is " + getIsLoggedIn());

  const swapButtons = () => {
    switchToggle((toggle)=> !toggle);
    setIsLoggedIn((loggedIn)=> !loggedIn);
  };

  function ToggleButton(){
    
    if(getToggle())
    {
      console.log("show login button");
      return <LoginButton></LoginButton>;
    }else
    {
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
        {getIsLoggedIn() ? (
          <h2>
            logged in!!
          </h2>
        ) : (
          <>
            <h2>login/sign up!!</h2>
            <div
              id="username"
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
          icon={<LeftOutlined />}
          onClick={() => swapButtons()}
          style={{
            borderRadius: "10px",
          }}
        >
          toggle
        </Button>
        <ToggleButton></ToggleButton>
      </div>
    </div>
  );
};

export default Login;
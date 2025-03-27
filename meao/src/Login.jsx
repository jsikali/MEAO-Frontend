//import React, { useState } from 'react';
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useState } from 'react';

const Login = ({ setIsLoggedIn, getIsLoggedIn }) => {
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
              id="username"
              style={{
                color: "#33343d",
                marginLeft: "8px",
              }}
            >
              login!!
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
        onClick={() =>
          sendLoginDetails(
            document.getElementById("username").value,
            document.getElementById("password").value
          )
        }
        style={{
          borderRadius: "10px",
        }}
      >Login!</Button>
    </div>
  );
};

export default Login;

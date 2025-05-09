import { Button, Typography } from "antd";
import SignUpButton from "./SignUpButton.jsx";
import LoginButton from "./LoginButton.jsx";
import React from "react";
import axios from 'axios';
import { API_ADDRESS } from './App.jsx';

const { Text } = Typography;

const Login = ({ setToken, getToken, switchToggle, getToggle }) => {
  console.log("the toggle val is " + getToggle());
  console.log("the token val is " + getToken());

  // toggle true = show login, false = show signup
  const swapMode = () => {
    switchToggle((toggle) => !toggle);
  };

  const containerStyle = {
    height: "100%",
    overflow: "auto",
    padding: "0 5%",
    backgroundColor: "#c2c6E8",
    borderRadius: "16px",
    boxSizing: "border-box",
  };

  const toggleTextStyle = {
    cursor: "pointer",
    color: "white",
    marginTop: "15px",
    display: "block",
    textAlign: "center",
    fontSize: '10px'
  };

  const addMembership = (randomInfo) => {
    if (randomInfo.length != 16) {
        axios({
            method: 'post',
            url: API_ADDRESS + 'membership/upgrade',
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then(() => {
                console.log("member!!!");
                document.getElementById("membershipPayment").value = "";
            })
            .catch((err) => {
                console.error("couldn't get groups:", err);
            });
    }
};

  return (
    <div style={containerStyle}>
      <div>
        {getToken() ? (
          <>
          <h2>logged in successfully!</h2>
          <Button
            type="primary"
            onClick={() => addMembership( document.getElementById("membershipPayment").value )}
            style={{
              borderRadius: "10px",
              marginBottom: "10px"
            }}
          >
            MEAO Catnip =^o.o^=
          </Button>
          <input
                  type="password" //just so its not visible
                  id="membershipPayment"
                  placeholder="FAKE credit card info THAT ISNT REAL!"
                  style={{ width: '95%' }}/>
          </>
        ) : (
          <h2>{getToggle() ? "login" : "sign up"}</h2>
        )}
      </div>

      {!getToken() && (
        <div className="top-box-content">
          <div className="login-form" style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "48%" }}>
                <input
                  type="text"
                  id="username"
                  placeholder="username"
                  style={{ width: '95%' }}
                />
              </div>

              <div style={{ width: "48%" }}>
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  style={{ width: '95%' }}
                />
              </div>
            </div>

            {getToggle() ? (
              <LoginButton setToken={setToken} />
            ) : (
              <SignUpButton />
            )}

            <Text onClick={swapMode} style={toggleTextStyle}>
              {getToggle()
                ? "don't have an account? sign up here"
                : "already have an account? login here"}
            </Text>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
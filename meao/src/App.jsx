import React, { useState } from "react";
import { Row, Col, Divider, ConfigProvider, Button } from "antd";
<<<<<<< HEAD
import "./App.css";
import PrivateChatBox from "./PrivateChatBox.jsx";
import axios from "axios";
import LoginSignup from "./LoginSignup.jsx";
=======
import './App.css';
import PrivateChatBox from './PrivateChatBox.jsx';
import axios from 'axios';
import Login from './Login.jsx';
import React, { useState } from 'react';
>>>>>>> 61c810dfccacfb1b56854b5573bece9f848fe53b

const testAxios = () => {
  axios
    .get("http://137.112.221.75:5000/")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
<<<<<<< HEAD

  const getIsLoggedIn = () => {
    return isLoggedIn;
  };
=======
  const getIsLoggedIn = () => {
    return isLoggedIn
  }

>>>>>>> 61c810dfccacfb1b56854b5573bece9f848fe53b
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#33343d",
          colorInfo: "#7B7D93",
        },
      }}
    >
<<<<<<< HEAD
      <div
        style={{
          width: "100vw",
          align: "left",
        }}
      >
        <Row
          justify="space-around"
          style={{
            width: "100vw",
            height: "20vh",
          }}
        >
          <Col span={7} style={{}}>
            <Button type="primary" onClick={testAxios}>
              axios.get
            </Button>
            <LoginSignup></LoginSignup>
=======
      <div style={{
        width: '100vw',
        align: 'left'
      }}>
        <Row justify="space-around" style={{
          width: '100vw',
          height: '20vh'
        }}>
          <Col span={7} style={{
          }}>
            <Login
              setIsLoggedIn={setisLoggedIn}
              getIsLoggedIn={getIsLoggedIn}>
            </Login>
>>>>>>> 61c810dfccacfb1b56854b5573bece9f848fe53b
          </Col>
          <Col
            span={7}
            style={{
              fontSize: "7vw",
              textAlign: "center",
            }}
          >
            =^-.-^=
          </Col>
          <Col span={7} style={{}}>
            settings
          </Col>
        </Row>

<<<<<<< HEAD
        <Divider orientation="left" plain style={{}}></Divider>
=======
        <Divider orientation="left" plain style={{
        }}>
        </Divider>
>>>>>>> 61c810dfccacfb1b56854b5573bece9f848fe53b

        <Row
          justify="space-around"
          style={{
            width: "100vw",
            height: "70vh",
          }}
        >
          <Col span={7} className="chat-div" id="one-to-one">
<<<<<<< HEAD
            {!isLoggedIn && (
              <div className="login-cover">
                <h1>log in to see private chats!</h1>
              </div>
            )}
            <PrivateChatBox></PrivateChatBox>
          </Col>
          <Col span={7} className="chat-div" id="one-to-many">
            {!isLoggedIn && (
              <div className="login-cover">
                <h1>log in to see private chats!</h1>
              </div>
            )}
            <PrivateChatBox></PrivateChatBox>
=======
            {!isLoggedIn && <div className="login-cover">
              <h1>
                log in to see private chats!
              </h1>
            </div>}
            <PrivateChatBox>
            </PrivateChatBox>
          </Col>
          <Col span={7} className="chat-div" id="one-to-many">
            {!isLoggedIn && <div className="login-cover">
              <h1>
                log in to see group chats!
              </h1>
            </div>}
            <PrivateChatBox>
            </PrivateChatBox>
>>>>>>> 61c810dfccacfb1b56854b5573bece9f848fe53b
          </Col>
          <Col span={7} className="chat-div" id="all">
            <PrivateChatBox></PrivateChatBox>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
}

export default App;

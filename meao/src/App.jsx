import './App.css';
import { Row, Col, Divider, ConfigProvider, Button } from "antd";
import Login from './LoginSignup.jsx';
import PrivateChatBox from './PrivateChatBox.jsx';
import PublicChatBox from './PublicChatBox.jsx';
import Settings from './Settings.jsx';
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [toggle, switchToggle] = useState(false);
  // const getIsLoggedIn = () => {
  //   return isLoggedIn
  // }
  // const getToggle = () => {
  //   switchToggle((toggle)=> !toggle);
  //   return toggle;
  // }
  const getIsLoggedIn = () => isLoggedIn;
  const getToggle = () => toggle;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#33343d",
          colorInfo: "#7B7D93",
        },
      }}
    >
      <div style={{
        width: '100vw',
        align: 'left'
      }}>
        <Row justify="space-around" style={{
          width: '100vw',
          height: '24vh'
        }}>
          <Col span={7} style={{
          }}>
            <Login
              setIsLoggedIn={setisLoggedIn}
              getIsLoggedIn={getIsLoggedIn}
              switchToggle={switchToggle}
              getToggle={getToggle}>
            </Login>
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
          <Settings
              setIsLoggedIn={setisLoggedIn}
              getIsLoggedIn={getIsLoggedIn}>
            </Settings>
          </Col>
        </Row>

        <div style={{
          width: '100vw',
          height: '3vh',
        }}>
        </div>

        <Row
          justify="space-around"
          style={{
            width: "100vw",
            height: "70vh",
          }}
        >
          <Col span={7} className="chat-div" id="one-to-one">
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
          </Col>
          <Col span={7} className="chat-div" id="all">
            <PublicChatBox></PublicChatBox>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
}

export default App;

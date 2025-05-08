import './App.css';
import { Row, Col, Divider, ConfigProvider, Button } from "antd";
import Login from './LoginSignup.jsx';
import PrivateChatBox from './PrivateChatBox.jsx';
import PublicChatBox from './PublicChatBox.jsx';
import Settings from './Settings.jsx';
import React, { useState } from "react";
import GroupChatBox from './GroupChatBox.jsx';

// jay puter
//export const API_ADDRESS = 'http://137.112.221.169:5000/';

// josh puter
export const API_ADDRESS = 'http://137.112.212.118:5000/';
export const FETCH_FREQUENCY = 10000

function App() {
  const [token, setToken] = useState("");
  const [toggle, switchToggle] = useState(false);
  // const getToken = () => {
  //   return isLoggedIn
  // }
  // const getToggle = () => {
  //   switchToggle((toggle)=> !toggle);
  //   return toggle;
  // }
  const getToken = () => token;
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
              setToken={setToken}
              getToken={getToken}
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
              getToken={getToken}>
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
            {!token && <div className="login-cover">
              <h1>
                log in to see private chats!
              </h1>
            </div>}
            <PrivateChatBox getToken={getToken} />
          </Col>
          <Col span={7} className="chat-div" id="one-to-many">
            {!token && <div className="login-cover">
              <h1>
                log in to see group chats!
              </h1>
            </div>}
            <GroupChatBox getToken={getToken} />
          </Col>
          <Col span={7} className="chat-div" id="all">
            <PublicChatBox
              getToken={getToken}></PublicChatBox>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
}

export default App;

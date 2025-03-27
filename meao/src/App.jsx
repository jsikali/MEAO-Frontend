//import { useState } from 'react';
import { Row, Col, Divider, ConfigProvider, Button } from "antd";
import './App.css';
import PrivateChatBox from './PrivateChatBox.jsx';
import axios from 'axios';
import Login from './Login.jsx';
import React, { useState } from 'react';

const testAxios = () => {
  axios.get('http://137.112.221.75:5000/')
    .then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
}

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const getIsLoggedIn = () => {
    return isLoggedIn
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#33343d',
          colorInfo: '#7B7D93'
        },
      }}
    >
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
          </Col>
          <Col span={7} style={{
            fontSize: '7vw',
            textAlign: 'center'
          }}>
            =^-.-^=
          </Col>
          <Col span={7} style={{
          }}>
            settings
          </Col>
        </Row>

        <Divider orientation="left" plain style={{
        }}>
        </Divider>

        <Row justify="space-around" style={{
          width: '100vw',
          height: '70vh'
        }}>
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
            <PrivateChatBox>
            </PrivateChatBox>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  )
}

export default App

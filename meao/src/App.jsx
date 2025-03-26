//import { useState } from 'react';
import { Row, Col, Divider, ConfigProvider, Button } from "antd";
import './App.css';
import PrivateChatBox from './PrivateChatBox.jsx';
import axios from 'axios';
import Login from './Login.jsx';

const testAxios = () => {
  axios.get('http://137.112.221.75:5000/')
    .then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
}

function App() {
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
        <Row justify="space-evenly" style={{
          width: '100vw',
          height: '20vh'
        }}>
          <Col span={7} style={{
          }}>
            <Button type="primary" onClick={testAxios}>
              axios.get
            </Button>
          <Login></Login>
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

        <Divider orientation="left" plain>
        </Divider>

        <Row justify="space-around" style={{
          width: '100vw',
          height: '70vh'
        }}>
          <Col span={7} className="chat-div" id="one-to-one">
            <PrivateChatBox>
            </PrivateChatBox>
          </Col>
          <Col span={7} className="chat-div" id="one-to-many">
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

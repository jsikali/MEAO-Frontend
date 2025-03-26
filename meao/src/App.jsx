import { useState } from 'react';
import { Row, Col, Divider, ConfigProvider, Button } from "antd";
import './App.css';
import PrivateChatBox from './PrivateChatBox.jsx';
import axios from 'axios';

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
              click to test axios (please work)
            </Button>
          </Col>
          <Col span={14} style={{
            fontSize: '100px',
            textAlign: 'center'
          }}>
            =^-.-^=
          </Col>
          <Col span={7} style={{
          }}>
          </Col>
        </Row>

        <Divider orientation="left" plain>
        </Divider>

        <Row justify="space-around" style={{
          width: '100vw',
          height: '70vh'
        }}>
          <Col span={7} className="chat-div">
            <PrivateChatBox>
            </PrivateChatBox>
          </Col>
          <Col span={7} className="chat-div">
          </Col>
          <Col span={7} className="chat-div">
            one-to-all
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  )
}

export default App

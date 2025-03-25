import { useState } from 'react'
import { Row, Col, Divider, ConfigProvider } from "antd";
import './App.css'
import PrivateChatBox from './PrivateChatBox.jsx'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#33343d',
        },
      }}
    >
      <div style={{
        width: '100vw',
        align: 'left'
      }}>
        <Row justify="space-evenly" style={{
          width: '100%',
          height: '20vh'
        }}>
          <Col span={7} style={{
          }}>
            settings
          </Col>
          <Col span={14} style={{
            fontSize: '100px',
            textAlign: 'center'
          }}>
            =^-.-^=
          </Col>
          {/* <Col span={7} style={{
          }}>
          </Col> */}
        </Row>

        <Divider orientation="left" plain>
        </Divider>

        <Row justify="space-around" style={{
          width: '100%',
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

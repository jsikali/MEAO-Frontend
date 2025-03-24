import { useState } from 'react'
import { Row, Col, Divider } from "antd";
import './App.css'
import PrivateChatBox from './PrivateChatBox.jsx'

function App() {
  return (
    <div style={{
      width:'100vw',
      align:'left'
    }}>
      <Row justify="space-evenly" style={{
        width:'100%',
        height: '30vh'
      }}>
        <Col span={7} style={{
          backgroundColor: 'red'
        }}>
          settings
        </Col>
        <Col span={14} style={{

        }}>
          =^-.-^=
        </Col>
      </Row>
      
      <Divider orientation="left" plain>
      </Divider>

      <Row justify="space-around"style={{
        width:'100%',
        height: '60vh'
      }}>
        <Col span={7} className="chat-div">
          <PrivateChatBox>
          </PrivateChatBox>
        </Col>
        <Col span={7} className="chat-div">
          one-to-many
        </Col>
        <Col span={7} className="chat-div">
          one-to-all
        </Col>
      </Row>
    </div>
    
  )
}

export default App

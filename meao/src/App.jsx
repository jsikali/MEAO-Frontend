import { useState } from 'react'
import { Row, Col, Divider } from "antd";
import './App.css'

const ChatBox = ({ header }) => {
  return (
    <div style={{
      backgroundColor:'green',
      borderRadius:'10%'
    }}>
      <h1>
        { header }
      </h1>
      <div style={{
        height:''
      }}>
        chat content
        chat content
        chat content
      </div>
    </div>
  );
};

function App() {
  return (
    <div style={{
      width:'100vw',
      backgroundColor: 'orange',
      align:'left'
    }}>
      <Row justify="space-evenly" style={{
        width:'100%',
        backgroundColor: 'purple',
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
        backgroundColor: 'aqua',
        height: '60vh'
      }}>
        <Col span={7} className="chat-div">
          <ChatBox header="one-to-one">
          </ChatBox>
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

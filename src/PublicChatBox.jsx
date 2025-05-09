import React, { useState, useEffect, useRef } from "react";
import { Button /*theme*/ } from "antd";
import Messages from "./Messages.jsx";
import axios from "axios";
import MessageSendButton from "./MessageSendButton.jsx";
import { API_ADDRESS, FETCH_FREQUENCY } from './App.jsx';

const PublicChatBox = ({ getToken }) => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null); // Ref for scrolling

  useEffect(() => {
    const fetchMessages = () => {
      axios
        .get(API_ADDRESS + "messages/public")
        .then((res) => {
          setMessages(res.data.messages);
        })
        .catch((err) => {
          console.error("coudldn't get messages:", err);
        });
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, FETCH_FREQUENCY);
    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    height: "100%",
    overflow: "auto",
    padding: "0 5%",
    backgroundColor: "#c2c6E8",
    borderRadius: "16px",
    boxSizing: "border-box",
  };

  const msgRedact = (msg) => {
    console.log("redacting a message");
    axios({
      method: 'post',
      url: API_ADDRESS + 'redact',
      headers: { Authorization: `Bearer ${getToken()}` },
      data: {
        content: msg.sender_id
      }
    })
      .then(() => {
        alert("message will be redacted!!");
      })
      .catch((err) => {
        console.error("coudldn't redact:", err);
      });
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginTop: "2vh", height: "5vh" }}>
        <h2>all chat!</h2>
      </div>
      <div
        style={{
          height: "60vh",
          overflowX: "hidden",
          overflowY: "auto",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "#7B7D93",
            minHeight: "100%",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "10px" }}>
            {messages
              .slice()
              .reverse()
              .map((msg, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "white",
                    padding: "5px 10px",
                    margin: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <div style={{}}>
                    <span
                      style={{
                        color: "#33343d",
                      }}
                    >
                      {msg.sender_username}{" "}
                    </span>
                    <span
                      style={{
                        color: "#7B7D93",
                      }}
                    >
                      {" "}
                      {new Date(msg.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <p
                    style={{
                      color: "#33343d",
                    }}
                  >
                    {msg.content}
                  </p>

                  {/* compliance jumpscare (buttons that do nothing rn) */}
                  <Button
                    type="primary"
                    onClick={() => console.log("send report to server")}
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    Report Misinfo
                  </Button>

                { getToken().length > 0 && //replace this with an actual check beyond being logged in
                  <Button
                    type="primary"
                    onClick={() => msgRedact(msg)}
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    Redact!
                  </Button>
}
                </div>
              ))}
            {/* Empty div to help scroll to bottom */}
            <div ref={messagesEndRef}></div>
            {/* have the input for sending */}
            <input
              type="text"
              id="publicchat"
              style={{
                margin: "5px",
                width: "75%",
              }}
            />
            <MessageSendButton
              chatBoxID="publicchat"
              token={getToken()}
              groupID={0}
            ></MessageSendButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicChatBox;

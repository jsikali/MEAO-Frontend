import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import axios from 'axios';
import { API_ADDRESS } from './App.jsx';
import CatnipAdvert from "./CatnipAdvert";
import React, { useState } from "react";

const MessageSendButton = ({ chatBoxID, token, groupID, recipientID }) => {
  const [showModal, setShowModal] = useState(false);

  const sendMessage = () => {
    console.log(
      `sending message "${document.getElementById(chatBoxID).value}" for: ${chatBoxID}`
    );
    switch (chatBoxID) {
      case 'publicchat':
        axios({
          method: 'post',
          url: API_ADDRESS + 'message/public',
          headers: { Authorization: `Bearer ${token}` },
          data: {
            content: document.getElementById('publicchat').value
          }
        }).then((response) => {
            document.getElementById(chatBoxID).value = "";
            console.log(response.data);
            //console.log(JSON.parse(response.data));
            var resJSON = JSON.stringify(response.data);
            var showAd = JSON.parse(resJSON).showAd;

            console.log(showAd);

            if(!showAd)
            {
              setShowModal(true);
              <CatnipAdvert visible={showModal}></CatnipAdvert>
              console.log("need to show ad um");
            }
          }).then(() => {
            document.getElementById(chatBoxID).value = "";
          })
          .catch((err) => {
            console.error("message send failed:", err);
          });
        break;
      case 'groupchat':
        axios({
          method: 'post',
          url: API_ADDRESS + 'message/group',
          headers: { Authorization: `Bearer ${token}` },
          data: {
            group_id: groupID,
            content: document.getElementById('groupchat').value
          }
        })
          .then(() => {
            document.getElementById(chatBoxID).value = "";
          })
          .catch((err) => {
            console.error("message send failed:", err);
          });
        break;
      case 'privatechat':
        axios({
          method: 'post',
          url: API_ADDRESS + 'message/direct',
          headers: { Authorization: `Bearer ${token}` },
          data: {
            recipient_id: recipientID,
            content: document.getElementById('privatechat').value
          }
        })
          .then(() => {
            document.getElementById(chatBoxID).value = "";
          })
          .catch((err) => {
            console.error("message send failed:", err);
          });
        break;
      default:
        console.log(`bad id, it's ${chatBoxID}`);
        break;
    }
  };

  return (
    <Button
      type="primary"
      onClick={() =>
        sendMessage()
      }
      style={{
        borderRadius: "10px",
      }}
    >
      Send!
    </Button>
  );
};

export default MessageSendButton;

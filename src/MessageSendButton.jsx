import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import axios from 'axios';
import { API_ADDRESS } from './App.jsx';

const MessageSendButton = ({ chatBoxID, token, groupID, recipientID }) => {

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
        })
          .then(() => {
            document.getElementById(chatBoxID).value = "";
          })
          .catch((err) => {
            console.error("message send failed:", err);
          });
        break;
      case 'groupchat':
        axios({
          method: 'post',
          url: 'http://137.112.221.75:5000/message/group',
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
          url: 'http://137.112.221.75:5000/message/direct',
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

import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import axios from 'axios';

const MessageSendButton = ({ chatBoxID }) => {
  
  const sendMessage = () => {
    console.log(
      `sending message for ${chatBoxID}`
    );

    switch (chatBoxID) {
      case 'publicchat':
        axios({
          method: 'post',
          url: 'http://137.112.221.75:5000/message/public',
          //headers: { Authorization: `Bearer ${accessToken}`}
          data: {
            content: document.getElementById("publicchat").value
          }
        })
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

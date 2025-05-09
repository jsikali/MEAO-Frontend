import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import axios from 'axios';
import { API_ADDRESS } from './App.jsx';
import { triggerAdExternally } from "./CatnipAdvert";
import CatnipAdvert from "./CatnipAdvert";

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
        }).then((response) => {
            document.getElementById(chatBoxID).value = "";
            console.log(response.data);
            //console.log(JSON.parse(response.data));
            var resJSON = JSON.stringify(response.data);
            var showAd = JSON.parse(resJSON).showAd;

            console.log(showAd);

            if(!showAd)
            {
              <CatnipAdvert></CatnipAdvert>
              console.log("show an ad!! PLEASE PLESE PLEASE PLEASW EPLEASE PLEASE PLEASE");
              triggerAdExternally();
              console.log("ad is shown?? please?????");
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

import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import axios from 'axios';
import { API_ADDRESS } from './App.jsx';

const LoginButton = ({ setToken }) => {
  const sendLoginDetails = (user, pass) => {
    console.log(
      `logging in with user: ${user} and pass: ${pass}`
    );

    axios({
      method: 'post',
      url: API_ADDRESS + 'login',
      data: {
        username: user,
        password: pass
      }
    }).then(res => {
      console.log(res.data.access_token)
      setToken(res.data.access_token)
    }).catch(err => {
      console.log(err)
    })
  };

  return (
    <Button
      type="primary"
      onClick={() =>
        sendLoginDetails(
          document.getElementById("username").value,
          document.getElementById("password").value
        )
      }
      style={{
        borderRadius: "10px",
      }}
    >
      Login!
    </Button>
  );
};

export default LoginButton;

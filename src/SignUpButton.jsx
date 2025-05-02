import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import axios from 'axios';
import { API_ADDRESS } from './App.jsx';

const sendSignUpDetails = (user, pass) => {
  console.log(
    `signing up with user: ${user} and pass: ${pass}`
  );

    axios({
      method: 'post',
      url: API_ADDRESS + 'signup',
      data: {
        username: user,
        password: pass
      }
    })
  };

const LoginButton = () => {
  return (
    <Button
      type="primary"
      onClick={() =>
        sendSignUpDetails(
          document.getElementById("username").value,
          document.getElementById("password").value
        )
      }
      style={{
        borderRadius: "10px",
      }}
    >
      Sign Up!
    </Button>
  );
};

export default LoginButton;

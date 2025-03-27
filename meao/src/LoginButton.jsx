import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import axios from 'axios';

const sendLoginDetails = (user, pass) => {
    console.log(
      `logging in with user: {user} and pass: {pass}`
    );

    axios({
      method: 'post',
      url: 'http://137.112.221.75:5000/login',
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
      icon={<LeftOutlined />}
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

import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import axios from 'axios';

const sendSignUpDetails = (user, pass) => {
  console.log(
    `signing up with user: ${user} and pass: ${pass}`
  );

    axios({
      method: 'post',
      url: 'http://137.112.221.75:5000/signup',
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

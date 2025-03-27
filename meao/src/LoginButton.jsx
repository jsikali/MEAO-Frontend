import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import axios from 'axios';

const LoginButton = ({ setIsLoggedIn }) => {
  const sendLoginDetails = (user, pass) => {
    console.log(
      `logging in with user: ${user} and pass: ${pass}`
    );

    axios({
      method: 'post',
      url: 'http://137.112.221.75:5000/login',
      data: {
        username: user,
        password: pass
      }
    }).then(res => {
      console.log(res.data.access_token)
      setIsLoggedIn(res.data.access_token)
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

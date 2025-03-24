import React, { useState } from 'react';
import { Button, Drawer, theme } from 'antd';


const PrivateChatBox = () => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const containerStyle = {
    height: '100%',
    overflow: 'auto',
    padding: '10%',
    backgroundColor: '#c2c6E8',
    borderRadius: '16px',
    boxSizing: 'border-box',
  };

  return (
    <div style={containerStyle}>
      Render in this
      <div style={{ marginTop: 16 }}>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </div>
      <Drawer
        title="Choose Chat"
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
      >
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};
export default PrivateChatBox;
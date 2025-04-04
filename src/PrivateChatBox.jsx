import React, { useState } from 'react';
import { Button, /*theme*/ } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import PrivateChatSelector from './PrivateChatSelector.jsx';
import PrivateChatBody from './PrivateChatBody.jsx'

const PrivateChatBox = ({ getToken }) => {
    //const { token } = theme.useToken();
    const [recipientID, setRecipientID] = useState(-1);

    const swapBoxContent = (recipientID) => {
        // console.log("swapping to ", isSelectingChat)
        if (recipientID == -1) {
            console.log("select priv chat");
            return <PrivateChatSelector
                getToken={getToken}
                setRecipientID={setRecipientID} />
        }
        else {
            return <PrivateChatBody
                token={getToken()}
                recipientID={recipientID} />
        }
    };

    const containerStyle = {
        height: '100%',
        overflow: 'auto',
        padding: '0 5%',
        backgroundColor: '#c2c6E8',
        borderRadius: '16px',
        boxSizing: 'border-box',
    };

    return (
        <div style={containerStyle}>
            <div style={{
                marginTop: '2vh',
                height: '5vh',
            }}>
                {(recipientID == -1) ? <h2>select a chat :3</h2> : <Button
                    type="primary"
                    icon={<LeftOutlined />}
                    onClick={() => setRecipientID(-1)}
                    style={{
                        borderRadius: '10px'
                    }}>
                    select chat
                </Button>}

            </div>
            <div style={{
                height: '60vh',
                overflowX: 'hidden',
                overflowY: 'auto',
                borderRadius: '10px',
            }}>
                <div style={{
                    backgroundColor: '#7B7D93',
                    minHeight: '100%',
                    overflow: 'hidden'
                }}>
                    {swapBoxContent(recipientID)}
                </div>
            </div>
        </div>
    );
};

export default PrivateChatBox;
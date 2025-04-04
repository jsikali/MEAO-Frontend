import React, { useState } from 'react';
import { Button, /*theme*/ } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import GroupChatSelector from './GroupChatSelector.jsx';
import GroupChatBody from './GroupChatBody.jsx'

const GroupChatBox = ({ getToken }) => {
    //const { token } = theme.useToken();
    const [isSelectingChat, setIsSelectingChat] = useState(true);

    const swapBoxContent = (isSelectingChat) => {
        // console.log("swapping to ", isSelectingChat)
        if (isSelectingChat) {
            return <GroupChatSelector
                getToken={getToken} 
                setIsSelectingChat={ setIsSelectingChat} />
        }
        else {
            return <GroupChatBody />
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
                {isSelectingChat ? <h2>select a group chat :3</h2> : <Button
                    type="primary"
                    icon={<LeftOutlined />}
                    onClick={() => setIsSelectingChat(true)}
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
                    {swapBoxContent(isSelectingChat)}
                </div>
            </div>
        </div>
    );
};

export default GroupChatBox;
import React, { useState, useEffect } from 'react';
import { Button, /*theme*/ } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import Messages from './Messages.jsx'
import axios from 'axios';
import SendMessage from './MessageSendButton.jsx'
import MessageSendButton from './MessageSendButton.jsx';

const PublicChatBox = () => {

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const messageJSON = () => {
        console.log("getting messages");
        axios({
            method: 'get',
            url: 'http://137.112.221.75:5000/messages/public',
            //headers: { Authorization: `Bearer ${accessToken}`}
        }).then(res => res.data);
    }

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
                <h2>all chat!</h2>

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
                    <div style={{
                        padding: '10px'
                    }}>
                        {/* have the messages */}
                        {/* <Messages
                            messagesJSON={messageJSON()}
                        ></Messages> */}
                        messages here when passing user access token is figured out
                        {/* have the input for sending */}
                        <input type="text" id='publicchat' />
                        <MessageSendButton></MessageSendButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicChatBox;
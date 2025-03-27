import React, { useState, useEffect } from 'react';
import { Button, /*theme*/ } from 'antd';
import Messages from './Messages.jsx'
import axios from 'axios';
import MessageSendButton from './MessageSendButton.jsx';

const PublicChatBox = ({ getIsLoggedIn }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = () => {
            axios
                .get("http://137.112.221.75:5000/messages/public")
                .then((res) => {
                    setMessages(res.data.messages);
                })
                .catch((err) => {
                    console.error("coudldn't get messages:", err);
                });
        };

        fetchMessages();
        const interval = setInterval(fetchMessages, 1000);
        return () => clearInterval(interval);
    });

    const messageJSON = () => {
        console.log("getting messages");
        axios({
            method: 'get',
            url: 'http://137.112.221.75:5000/messages/public'
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

                        {messages.map((msg, index) => (
                            <div key={index} style={{}}>
                                <div style={{}}>
                                    <span style={{}}>{msg.sender_id}</span>
                                    <span style={{}}>{new Date(msg.timestamp).toLocaleString()}</span>
                                </div>
                                <p style={{}}>{msg.content}</p>
                            </div>
                        ))}
                        {/* have the input for sending */}
                        <input type="text" id='publicchat' />
                        <MessageSendButton
                            chatBoxID='publicchat'
                            getIsLoggedIn={getIsLoggedIn}></MessageSendButton>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PublicChatBox;
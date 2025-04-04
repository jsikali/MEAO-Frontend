import React, { useState, useEffect, useRef } from 'react';
import { Button, /*theme*/ } from 'antd';
import Messages from './Messages.jsx';
import axios from 'axios';
import MessageSendButton from './MessageSendButton.jsx';

const PrivateChatBody = ({ getToken }) => {
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null); // Ref for scrolling

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
        const interval = setInterval(fetchMessages, 10000);
        return () => clearInterval(interval);
    }, []);

    // Scroll to bottom when messages update
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

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
            <div style={{ marginTop: '2vh', height: '5vh' }}>
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
                    <div style={{ padding: '10px' }}>
                        {messages.slice().reverse().map((msg, index) => (
                            <div key={index} style={{ backgroundColor: 'white',
                                padding: '5px 10px',
                                margin: '5px',
                                borderRadius: '5px'
                             }}>
                                <div style={{}}>
                                    <span style={{
                                        color: '#33343d'
                                    }}>{msg.sender_username} </span>
                                    <span style={{
                                        color: '#7B7D93'
                                    }}> {new Date(msg.timestamp).toLocaleString()}</span>
                                </div>
                                <p style={{
                                    color: '#33343d'
                                }}>{msg.content}</p>
                            </div>
                        ))}
                        {/* Empty div to help scroll to bottom */}
                        <div ref={messagesEndRef}></div>
                        {/* have the input for sending */}
                        <input type="text" id='privatechat' style={{
                            margin: '5px',
                            width: '75%'
                        }} />
                        <MessageSendButton
                            chatBoxID='privatechat'
                            getToken={getToken}>
                        </MessageSendButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivateChatBody;

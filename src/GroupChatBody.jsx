import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MessageSendButton from './MessageSendButton.jsx';
import { API_ADDRESS, FETCH_FREQUENCY } from './App.jsx';

const GroupChatBody = ({ token, groupID }) => {
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null); // Ref for scrolling

    useEffect(() => {
        const fetchMessages = () => {
            axios
                .get(API_ADDRESS + "messages/group/" + groupID,
                    { headers: { Authorization: `Bearer ${token}` } },
                )
                .then((res) => {
                    setMessages(res.data.messages);
                })
                .catch((err) => {
                    console.error("coudldn't get messages:", err);
                });
        };

        fetchMessages();
        const interval = setInterval(fetchMessages, FETCH_FREQUENCY);
        return () => clearInterval(interval);
    }, [token]);

    return (
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
                    {messages.slice().map((msg, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
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
                    <input type="text" id='groupchat' style={{
                        margin: '5px',
                        width: '75%'
                    }} />
                    <MessageSendButton
                        groupID={groupID}
                        chatBoxID='groupchat'
                        token={token}>
                    </MessageSendButton>
                </div>
            </div>
        </div>
    );
};

export default GroupChatBody;
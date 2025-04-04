import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import PrivateChatBody from './PrivateChatBody';

const PrivateChatSelector = ({ getToken, setIsSelectingChat }) => {
    let content = [];
    let token = getToken();
    console.log(`priv chat sel token: ${token}`)

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchDMs = () => {
            if (token) {
                axios({
                    method: 'get',
                    url: 'http://137.112.221.75:5000/messages/direct' 
                        + '?recipient_id=' + '67ef7a9bdfd7ebaab0b7866b', //everyone messages AwesomeGuy7
                    headers: { Authorization: `Bearer ${token}` },
                })
                    .then((res) => {
                        console.log(`the response from privchatsel: ${res}`);
                        setGroups(res.data.groups);
                    })
                    .catch((err) => {
                        console.error("couldn't get DMs:", err);
                    });
            }
        };
        fetchDMs();
        const interval = setInterval(fetchDMs, 3000);
        return () => clearInterval(interval);
    }, [token]);

    //   axios get all message ids
    // axios get message name/recipient for each id
    for (let i = 0; i < groups.length; i++) {
        const item = <Button
            type="primary"
            key={"chatSelectorButton" + i}
            onClick={() => setIsSelectingChat(false)} //pass back id of dm
            style={{
                borderRadius: 0,
                width: '100%'
            }}>
            {groups[i].group_name}
        </Button>
        content.push(item);
    }

    return (
        <div>
            {content}
        </div>
    )
};

export default PrivateChatSelector;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { API_ADDRESS, FETCH_FREQUENCY } from './App.jsx';

const PrivateChatSelector = ({ getToken, setRecipientID }) => {
    let content = [];
    let token = getToken();
    console.log(`priv chat sel token: ${token}`)

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchDMs = () => {
            if (token) {
                axios({
                    method: 'get',
                    url: API_ADDRESS + 'dms',
                    headers: { Authorization: `Bearer ${token}` },
                })
                    .then((res) => {
                        console.log(`the response from privchatsel: ${res}`);
                        setGroups(res.data.dms);
                    })
                    .catch((err) => {
                        console.error("couldn't get DMs:", err);
                    });
            }
        };
        fetchDMs();
        const interval = setInterval(fetchDMs, FETCH_FREQUENCY);
        return () => clearInterval(interval);
    }, [token]);

    //   axios get all message ids
    // axios get message name/recipient for each id
    for (let i = 0; i < groups.length; i++) {
        const item = <Button
            type="primary"
            key={"chatSelectorButton" + i}
            onClick={() => setRecipientID(groups[i].recipient_id)} //pass back id of dm
            style={{
                borderRadius: 0,
                width: '100%'
            }}>
            {groups[i].recipient}
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
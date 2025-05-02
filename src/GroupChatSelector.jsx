import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { API_ADDRESS, FETCH_FREQUENCY } from './App.jsx';

const GroupChatSelector = ({ getToken, setGroupID, token }) => {
    let content = [];

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchGroups = () => {
            if (token) {
                axios({
                    method: 'get',
                    url: API_ADDRESS + 'groups',
                    headers: { Authorization: `Bearer ${token}` },
                })
                    .then((res) => {
                        setGroups(res.data.groups);
                    })
                    .catch((err) => {
                        console.error("couldn't get groups:", err);
                    });
            }
        };
        fetchGroups();
        const interval = setInterval(fetchGroups, FETCH_FREQUENCY);
        return () => clearInterval(interval);
    }, [token]);

    //   axios get all message ids
    // axios get message name/recipient for each id
    for (let i = 0; i < groups.length; i++) {
        const item = <Button
            type="primary"
            key={"chatSelectorButton" + i}
            onClick={() => setGroupID(groups[i].group_id)} //pass back id of dm
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

export default GroupChatSelector;
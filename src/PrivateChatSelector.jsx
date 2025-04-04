import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';

const PrivateChatSelector = ({ getToken, setIsSelectingChat }) => {
    let content = [];
    console.log(`the token: ${getToken()}`);
    let uid = axios({
        method: 'get',
        url: 'http://137.112.221.75:5000/profile',
        headers: { Authorization: `Bearer ${getToken()}` }
    }).then(function (response) {
        console.log(response.data.user._id); //ok so if i dont console log it only saves as an object which is bad but whatever
    })
    //let params = new URLSearchParams([['recipient_id', uid]]);

    //console.log(`uid: ${uid}`);

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        console.log("hi this is the use effect");
        const fetchDMs = () => {
            if (getToken()) {
                axios({
                    method: 'get',
                    url: 'http://137.112.221.75:5000/messages/direct',
                    headers: { Authorization: `Bearer ${getToken()}` },
                    params: { recipent_id: uid },
                })
                    .then((res) => {
                        console.log("hi use effect found dms");
                        console.log(res);
                        setGroups(res.data.groups);
                    })
                    .catch((err) => {
                        console.error("couldn't get DMs:", err);
                    });
            }
        };
    
        fetchDMs();
        const interval = setInterval(fetchDMs, 1000);
        return () => clearInterval(interval);
    }, []);

    //   axios get all message ids
    // axios get message name/recipient for each id
    for (let i = 1; i <= groups.length; i++) {
        const item = <Button
            type="primary"
            key={"chatSelectorButton" + i}
            onClick={() => setIsSelectingChat(false)} //pass back id of dm
            style={{
                borderRadius: 0,
                width: '100%'
            }}>
            groups[i].group_name
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
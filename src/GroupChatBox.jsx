import React, { useState } from 'react';
import { Button, /*theme*/ } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import GroupChatSelector from './GroupChatSelector.jsx';
import GroupChatBody from './GroupChatBody.jsx'
import axios from "axios";
import { API_ADDRESS } from './App.jsx';

const GroupChatBox = ({ getToken }) => {
    //const { token } = theme.useToken();
    const [groupID, setGroupID] = useState(-1);

    const createGroupChat = () => {
        console.log("trying to add chat to " + document.getElementById('groupMembers').value + ' named ' + document.getElementById('groupName').value)
        axios({
            method: 'post',
            url: API_ADDRESS + 'group',
            headers: { Authorization: `Bearer ${getToken()}` },
            data: {
                group_name: document.getElementById('groupName').value,
                members: document.getElementById('groupMembers').value.split(",")
            }
        })
    }

    const swapBoxContent = (groupID) => {
        // console.log("swapping to ", isSelectingChat)
        if (groupID == -1) {
            return <div style={{ height: '60vh' }}>
                <GroupChatSelector
                    getToken={getToken}
                    setGroupID={setGroupID}
                    token={getToken()} />
                <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '0px',
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <input type="text" id='groupName'
                        placeholder="group name"
                        style={{ width: '30%' }} />
                    <input type="text" id='groupMembers'
                        placeholder="separate w/ comma"
                        style={{ width: '30%' }} />
                    <Button
                        type="primary"
                        onClick={() => { createGroupChat() }}>
                        create group
                    </Button>
                </div>
            </div>

        }
        else {
            return <GroupChatBody
                token={getToken()}
                groupID={groupID} />
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
                {groupID == -1 ? <h2>select a group chat :3</h2> : <Button
                    type="primary"
                    icon={<LeftOutlined />}
                    onClick={() => setGroupID(-1)}
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
                    {swapBoxContent(groupID)}
                </div>
            </div>
        </div>
    );
};

export default GroupChatBox;
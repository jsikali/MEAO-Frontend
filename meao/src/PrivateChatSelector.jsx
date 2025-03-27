//import React, { useState } from 'react';
import { Button } from 'antd';

const PrivateChatSelector = ({ setIsSelectingChat }) => {
    let content = [];
//   axios get all message ids
// axios get message name/recipient for each id
    for (let i = 1; i <= 30; i++) {
        const item = <Button
            type="primary"
            key={"chatSelectorButton" + i}
            onClick={() => setIsSelectingChat(false)} //pass back id of dm
            style={{
                borderRadius: 0,
                width: '100%'
            }}>
            chat # {i}
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
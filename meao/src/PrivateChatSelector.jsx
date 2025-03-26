//import React, { useState } from 'react';
import { Button } from 'antd';

const PrivateChatSelector = ({ setIsSelectingChat }) => {
    let content = [];

    for (let i = 1; i <= 30; i++) {
        const item = <Button
            type="primary"
            key={"chatSelectorButton" + i}
            onClick={() => setIsSelectingChat(false)}
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
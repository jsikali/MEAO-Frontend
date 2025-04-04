//import React, { useState } from 'react';
import { Button } from 'antd';

const Messages = ({ messagesJSON }) => {
    let content = [];
    console.log(messagesJSON)
    let messagearr = JSON.parse(messagesJSON);
//   axios get all message ids
// axios get message name/recipient for each id

    messagearr.array.forEach(m => {
        const message = <Button
            type="primary"
            style={{
                borderRadius: 100,
                width: '100%'
            }}>
            {m}
        </Button>
        content.push(message);
    });

    return (
        <div>
            {content}
        </div>
    )
};

export default Messages;
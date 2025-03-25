import React, { useState } from 'react';
import { Button, Drawer, theme } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

const getChatButtons = num => {
    let content = [];
    for (let i = 1; i <= num; i++) {
        const item = <Button type="primary" onClick={() => setIsVisible(!isVisible)} style={{
            borderRadius: 0,
            width: '100%'
        }}>
            chat # {i}
        </Button>
        content.push(item);
    }
    return content;
};

const PrivateChatBox = () => {
    const { token } = theme.useToken();
    const [isVisible, setIsVisible] = useState(true);

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
                marginTop: '5%',
                height: '10%',
            }}>
                {isVisible &&
                    <Button type="primary" icon={<LeftOutlined />} onClick={() => setIsVisible(!isVisible)} style={{
                        borderRadius: '10px'
                    }}>
                        select chat
                    </Button>
                }

            </div>
            <div style={{
                height: '58vh',
                overflowX: 'hidden',
                overflowY: 'auto',
            }}>
                <div style={{
                    backgroundColor: 'blue'
                }}>

                    { getChatButtons(20) }


                </div>
            </div>
        </div>
    );
};
export default PrivateChatBox;
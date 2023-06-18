import React from 'react';
import {
    MessageContainer,
    MessageInfo,
    MessageLeft,
    MessageRight,
    RemoveIcon
} from './Message.styles';

const Message = ({
    message,
    timestamp,
    user,
    userImage,
    id,
    userId,
    docId,
    removeMessage
}) => {




    return (
        <MessageContainer>
            <img src={userImage} alt="user avatar" />
            <MessageInfo>
                <h4>
                    {user}{''}
                    <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                {userId !== id ? (
                    <MessageLeft>
                        <p>{message}</p>
                    </MessageLeft>
                ) : (
                    <MessageRight>
                        <p>{message}</p>
                        <RemoveIcon onClick={() => removeMessage(docId)} />
                    </MessageRight>
                )}
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message;
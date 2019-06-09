import React from 'react';
import styled from 'styled-components';
import {MessageInterface} from '../../../interfaces';
import Message from './Message';

const StyledMessagesListContainer = styled.div`
    box-sizing: border-bottom;
    display: flex;
    flex-direction: column;
    height: calc(100% - 105px);
    margin: 10px 20px;
`;

const MessagesList: React.FC<{messages: MessageInterface[]}> = ({messages}) => {
    return (
        <StyledMessagesListContainer>
            {messages.map(message => <Message key={message.text + message.username} {...message}/>)}
        </StyledMessagesListContainer>
    );
};

export default MessagesList;
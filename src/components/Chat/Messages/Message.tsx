import React from 'react';
import styled from 'styled-components';
import {MessageInterface} from '../../../interfaces';

const StyledMessageContainer = styled.div<{ isUsers: boolean }>`
    text-align: ${({isUsers}) => isUsers ? 'right' : 'left'};
`;

const StyledInfo = styled.span`
    color: ${({theme: {colors: {secondary}}}) => secondary};
    font-size: .7em;
    font-weight: bold;
`;

const StyledTime = styled(StyledInfo)`
    color: #000;
    margin-left: 5px;
`;

const Message: React.FC<MessageInterface> = ({username, isUsers, time, text}) => {
    return (
        <StyledMessageContainer isUsers={isUsers}>
            <StyledInfo>{username}</StyledInfo>
            <StyledTime>{time}</StyledTime>
            <div>{text}</div>
        </StyledMessageContainer>
    )
};

export default Message;

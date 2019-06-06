import React from 'react';
import styled from 'styled-components';
import OnlineUsers from './OnlineUsers';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
`;

const ChatContainer: React.FC = (props) => {
    return (
        <StyledContainer>
            <OnlineUsers/>
            <OnlineUsers/>
        </StyledContainer>
    )
};

export default ChatContainer;
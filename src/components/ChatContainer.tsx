import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    height: 200px;
    width: 120px;
`;

const ChatContainer: React.FC<{title: string}> = ({title, ...props}) => {
    console.log(title);
    return (
        <StyledContainer/>
    )
};

export default ChatContainer;
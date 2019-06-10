import React from 'react';
import styled from 'styled-components';
import TextArea from './TextArea';
import MessagesList from './MessagesList';

const StyledMessagesContainer = styled.div`
    border-radius: 0 7px 7px 0;
    flex: 3;
    
    ${({theme: {media}}) => media.medium} {
        height: 100%;
    }
`;

const dateToString = (date: Date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
    'December'];
    return `${date.getHours()}:${date.getMinutes()}, ${date.getDay() + 1} ${months[date.getMonth()]}`;
};

const messages = [{
    username: 'dsadsadas',
    isUsers: false,
    time: dateToString(new Date()),
    text: 'siemanko'
}, {
    username: 'xxxxxx',
    isUsers: false,
    time: dateToString(new Date()),
    text: 'dsadsadasdsa'
}, {
    username: 'cccccc',
    isUsers: true,
    time: dateToString(new Date()),
    text: 'dddooopppp'
}, {
    username: 'dddfffzzx',
    isUsers: false,
    time: dateToString(new Date()),
    text: 'dsadasdsadsadsadsadsads'
}];

const MessagesContainer: React.FC = props => {
    return (
        <StyledMessagesContainer>
            <MessagesList messages={messages}/>
            <TextArea/>
        </StyledMessagesContainer>
    );
};

export default MessagesContainer;
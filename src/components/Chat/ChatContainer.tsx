import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import OnlineUsers from './OnlineUsers';
import MessagesContainer from './Messages/MessagesContainer';
import {USER_STATUS} from '../../contants';
import {UserInterface} from '../../interfaces';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    
    ${({theme: {media}}) => media.medium} {
        flex-direction: row;
    }
`;

const ChatContainer: React.FC = () => {
    const [users, setUsers] = useState<Array<UserInterface>>([]);

    useEffect(() => {
        setUsers([{
            username: 'Random name',
            status: USER_STATUS.online
        }, {
            username: 'Random name1',
            status: USER_STATUS.online
        }, {
            username: 'Random name2',
            status: USER_STATUS.online
        }, {
            username: 'Random name3',
            status: USER_STATUS.online
        }, {
            username: 'Random name4',
            status: USER_STATUS.online
        }, {
            username: 'Random name5',
            status: USER_STATUS.online
        }, {
            username: 'Random name6',
            status: USER_STATUS.online
        }, {
            username: 'Random name7',
            status: USER_STATUS.afk
        }, {
            username: 'Random name8',
            status: USER_STATUS.afk
        }, {
            username: 'Random name9',
            status: USER_STATUS.afk
        }, {
            username: 'Random name10',
            status: USER_STATUS.afk
        }, {
            username: 'Random name11',
            status: USER_STATUS.offline
        }, {
            username: 'Random name12',
            status: USER_STATUS.offline
        }])
    }, []);

    return (
        <StyledContainer>
            <OnlineUsers
                usersList={users}
            />
            <MessagesContainer/>
        </StyledContainer>
    )
};

export default ChatContainer;
import React from 'react';
import styled from 'styled-components';
import {UserInterface} from '../../interfaces';
import {USER_STATUS} from '../../contants';

const StyledUserList = styled.div`
    background-color: #ff0000;
    border-radius: 7px 0 0 7px;
    flex: 1;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll; 
`;

const StyledItem = styled.div`
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const OnlineUsers: React.FC<{usersList: Array<UserInterface>}> = ({usersList}) => {
    return (
        <StyledUserList>
            {usersList.map(({username, status}, index) => {
                return <StyledItem
                    key={username}
                    title={username}
                >
                    {username}{USER_STATUS[status]}
                </StyledItem>
            })}
        </StyledUserList>
    );
};

export default OnlineUsers;
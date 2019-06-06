import React from 'react';
import styled from 'styled-components';
import {UserInterface} from '../../interfaces';
import {USER_STATUS} from '../../contants';

const StyledUserList = styled.div`
    background-color: #ff0000;
    border-radius: 7px 0 0 7px;
    flex: 1;
    height: 100%;
    overflow-y: scroll;
`;

const OnlineUsers: React.FC<{usersList: Array<UserInterface>}> = ({usersList}) => {
    return (
        <StyledUserList>
            {usersList.map(({username, status}, index) => {
                return <div key={username}>{username}{USER_STATUS[status]}</div>
            })}
        </StyledUserList>
    );
};

export default OnlineUsers;
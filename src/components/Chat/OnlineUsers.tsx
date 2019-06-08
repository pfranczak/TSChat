import React from 'react';
import styled from 'styled-components';
import {UserInterface} from '../../interfaces';
import {USER_STATUS} from '../../contants';

const StyledUserList = styled.div`
    border-radius: 7px 0 0 7px;
    border-right: 1px solid ${({theme: {colors: {secondary}}}) => secondary};
    box-sizing: border-box;
    flex: 1;
    overflow: hidden;
    padding: 10px;
`;

const StyledItemsWrapper = styled.div`
    max-height: 84%;
    overflow-x: hidden;
    overflow-y: scroll;
`;

const StyledItem = styled.div`
    overflow-x: hidden;
    padding: 4px 0;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const StyledH1 = styled.h1`
    color: ${({theme: {colors: {secondary}}}) => secondary};
    font-size: 1.2em;
    margin: 0;
    max-height: 14%;
`;

const StyledHR = styled.hr`
    background-color: ${({theme: {colors: {secondary}}}) => secondary};
    border: none;
    height: 1px;
    margin: 5px 0;
`;

const OnlineUsers: React.FC<{usersList: Array<UserInterface>}> = ({usersList}) => {
    return (
        <StyledUserList>
            <StyledH1>
                Online users
            </StyledH1>
            <StyledHR/>
            <StyledItemsWrapper>
            {usersList.map(({username, status}) => {
                return <StyledItem
                    key={username}
                    title={username}
                >
                    {username}{USER_STATUS[status]}
                </StyledItem>
            })}
            </StyledItemsWrapper>
        </StyledUserList>
    );
};

export default OnlineUsers;
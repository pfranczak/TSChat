import React, {useState} from 'react';
import styled from 'styled-components';
import {UserInterface} from '../../interfaces';
import {USER_STATUS} from '../../contants';
import {Arrow} from "../styled/StyledComponents";

const StyledUserList = styled.div`
    border-radius: 7px 0 0 7px;
    border-right: 1px solid ${({theme: {colors: {secondary}}}) => secondary};
    box-sizing: border-box;
    padding: 10px;
    
    ${({theme: {media}}) => media.medium} {
        flex-direction: row;
        flex: 1;
        overflow: hidden;
    }
`;

const StyledItemsWrapper = styled.div<{isFull: boolean}>`
    overflow: hidden;
    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    
    ${({theme: {media}}) => media.medium} {
        max-height: 84%;
        overflow-y: scroll;
    }
    
    ${({isFull}) => `
    max-height: ${isFull ? '105px' : '0'};
    overflow-y: scroll;
    `}
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
    position: relative;
    
    ${({theme: {media}}) => media.medium} {
        max-height: 14%;
    }
`;

const StyledHR = styled.hr`
    background-color: ${({theme: {colors: {secondary}}}) => secondary};
    border: none;
    height: 1.5px;
    margin: 5px 0;
`;

const StyledArrow = styled(Arrow)`
    position: absolute;
    right: 2px;
    top: 25%;
`;

const OnlineUsers: React.FC<{usersList: Array<UserInterface>}> = ({usersList}) => {
    const [isFull, setIsFull] = useState<boolean>(false);
    return (
        <StyledUserList>
            <StyledH1 onClick={() => setIsFull((prev => !prev))}>
                Online users
                <StyledArrow
                    size={3}
                    direction={isFull ? 'up' : 'down'}
                />
            </StyledH1>
            <StyledHR/>
            <StyledItemsWrapper isFull={isFull}>
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
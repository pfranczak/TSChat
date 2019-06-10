import React, { useContext, useCallback, useState} from 'react';
import * as _ from 'lodash';
import styled from 'styled-components';
import {Store} from '../StoreContext';
import {Input, Header, Button} from './styled/StyledComponents';

const StyledWrapper = styled.div`
    padding: 0 15px;
    
    ${({theme: {media}}) => media.medium} {
            align-items: center;
            display: flex;
            flex-flow: column;
            justify-content: center;
            padding: 0 125px;
    }
`;

const LoginContainer: React.FC = () => {
    const [isLoginFree, setIsLoginFree] = useState<boolean>(true);
    const {dispatch} = useContext(Store);

    const checkLoginAvailability = (value: string | number): void => {
        setIsLoginFree(true);
        //TODO: check if login is available
    };

    const onChangeHandler = useCallback((payload: string | number): void => {
        dispatch({type: 'SET_USERNAME', payload});
        _.debounce(() => checkLoginAvailability(payload), 300);
    }, []);

    const onClickHandler = useCallback(() => {
        if (isLoginFree) {
            dispatch({type: 'LOG_IN'});
        }
    }, []);

    return (
        <StyledWrapper>
            <Header
                title="Enter your nickname and join the chat!"
            />
            <Input
                label="Login"
                onChange={onChangeHandler}
                width={300}
            />
            <Button
                onClick={onClickHandler}
            >
                Join the chat
            </Button>
        </StyledWrapper>
    );
};

export default LoginContainer;
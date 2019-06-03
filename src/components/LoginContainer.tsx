import React, {Fragment, useContext, useCallback} from 'react';
import * as _ from 'lodash';
import {Store} from '../StoreContext';
import {Input, Header, Button} from './styled/StyledComponents';

const LoginContainer: React.FC = () => {
    const {state, dispatch} = useContext(Store);

    const checkLoginAvailability = (value: string|number): void => {
        //TODO: check if login is available
    };

    const onChangeHandler = useCallback((payload: string | number): void => {
        dispatch({type: 'SET_USERNAME', payload});
        _.debounce(() => checkLoginAvailability(payload), 300);
    }, []);

    const onClickHandler = useCallback(() => console.log('clicked'), []);

    return (
        <Fragment>
            <Header
                title="Enter your nickname and join the chat!"
            />
            <Input
                label="Login"
                onChange={onChangeHandler}
            />
            <Button
                onClick={onClickHandler}
            >
                Join the chat
            </Button>
        </Fragment>
    );
};

export default LoginContainer;
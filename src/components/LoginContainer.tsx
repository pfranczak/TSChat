import React, {Fragment, useContext, useCallback} from 'react';
import {Store} from '../StoreContext';
import Input from './styled/Input';
import Header from './styled/Header';

const LoginContainer: React.FC = () => {
    const {state, dispatch} = useContext(Store);

    const onChangeHandler = useCallback((payload: string | number): void => {
        dispatch({type: 'SET_USERNAME', payload});
    }, []);

    return (
        <Fragment>
            <Header
                title="Enter your nickname and join the chat!"
            />
            <Input
                label="Login"
                onChange={onChangeHandler}
            />
        </Fragment>
    );
};

export default LoginContainer;
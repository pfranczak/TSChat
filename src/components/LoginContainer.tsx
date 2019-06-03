import React, {useContext, useCallback} from 'react';
import {Store} from '../StoreContext';
import Input from './styled/Input';

const LoginContainer: React.FC = () => {
    const {state, dispatch} = useContext(Store);

    const onChangeHandler = useCallback((payload: string | number): void => {
        dispatch({type: 'SET_USERNAME', payload});
    }, []);

    return (
        <Input
            label="Login"
            onChange={onChangeHandler}
        />
    );
};

export default LoginContainer;
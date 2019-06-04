import React, {createContext, useReducer} from 'react';

interface IState {
    username: string,
    isLogged: boolean,
}

interface IAction {
    type: string,
    payload: any,
}

const initialState: IState = {
    username: '',
    isLogged: false,
};

export const Store = createContext<IState | any>(initialState);

export function reducer(state: IState, action: IAction): IState {
    switch(action.type) {
        case 'SET_USERNAME':
            return {...state, username: action.payload};
        case 'LOG_IN':
            return {...state, isLogged: true};
        case 'LOG_OUT':
            return {...state, isLogged: false};
        default:
            return state;
    }
}

export function StoreProvider (props: any): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Store.Provider value={{state, dispatch}}>
            {props.children}
        </Store.Provider>
    );
}
import React, {createContext, useReducer} from 'react';

interface IState {
    username: string,
}

interface IAction {
    type: string,
    payload: any
}

const initialState: IState = {
    username: ''
};

export const Store = createContext<IState | any>(initialState);

export function reducer(state: IState, action: IAction): IState {
    switch(action.type) {
        case 'SET_USERNAME':
            return {...state, username: action.payload};
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
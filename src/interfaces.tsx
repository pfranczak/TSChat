import {USER_STATUS} from './contants';

export interface UserInterface {
    username: string,
    status: USER_STATUS,
}

export interface MessageInterface {
    username: string,
    isUsers: boolean,
    time: string,
    text: string,
}
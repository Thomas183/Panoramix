import {HistoryLog} from "../historyLog";

export interface Profile {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
}

export interface User {
    id: string
    firstName: string,
    lastName: string,
    role: 'User' | 'Admin',
    isActivated: boolean
    log: HistoryLog;
}

export interface UserFormCreate {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: 'ADMIN' | 'ADMIN',
    isActivated: boolean,
}

export interface UserFormPatch {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: 'USER' | 'ADMIN'
}

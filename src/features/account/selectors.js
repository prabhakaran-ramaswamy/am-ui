import {List} from 'immutable';

export const getAccount = state => state.account ||  { id:'', firstName: '', lastName: '', email: '', mobile: ''}
export const getAccounts = state => {
    console.log(state.acc.accounts)
    return state.acc.accounts || List()}


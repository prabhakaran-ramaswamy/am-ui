import {List} from 'immutable';

export const getAccount = state => state.account ||  { id:'', firstName: '', lastName: '', email: '', mobile: ''}
export const getAccounts = state =>state.acc.get("accounts") || List() ;


import {accountActionTypes} from '../features/account';

export const successAllAccount = response => ({type: accountActionTypes.LIST_ACCOUNT_COMPLETED, payload:response });
export const errorAllAccount = error => ({payload:error, type: accountActionTypes.LIST_ACCOUNT_ERROR});
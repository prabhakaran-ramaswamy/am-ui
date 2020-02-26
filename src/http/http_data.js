import axios from 'axios';
import {useDispatch} from 'react-redux';
import {accountActionTypes} from '../features/account';
import * as constants from './constants'


export function fetchAllAccounts() {
    console.log("calling fetchAllAccounts")

    return() => {
        axios.get(constants.FETCH_ALL_ACCOUNT)
          .then((response) =>  {useDispatch({payload:response, type: accountActionTypes.LIST_ACCOUNT_STARTED,
          })})
          .catch(() => {useDispatch({payload:{}, type: accountActionTypes.LIST_ACCOUNT_ERROR,
          })});
      };
  }

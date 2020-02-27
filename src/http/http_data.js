import axios from 'axios';
import {useDispatch} from 'react-redux';
import {accountActionTypes} from '../features/account';
import * as constants from './constants'


export function  fetchAllAccounts() {
    console.log("calling fetchAllAccounts")
    axios.get(constants.FETCH_ALL_ACCOUNT)
      .then((response) =>  {console.log("FETCH_ALL_ACCOUNT") 
      useDispatch({payload:response, type: accountActionTypes.LIST_ACCOUNT_STARTED,
    })})
    .catch(Error,() => {console.log("FETCH_ALL_ACCOUNT") 
    useDispatch({payload:{}, type: accountActionTypes.LIST_ACCOUNT_ERROR,
    })});
  }

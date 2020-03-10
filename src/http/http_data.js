import { useCallback } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import {  successAllAccount, errorAllAccount } from './actionCreators';

const fetchAllAccounts = (endpoint, { verb = 'get', params = {} } = {}) => {
    const makeRequest = useCallback(async (dispatch) => {
        try {
            const response = await axios[verb](endpoint, params);
            dispatch(successAllAccount(response));
        } catch (e) {
            dispatch(errorAllAccount(e));
        }
    }, [endpoint, verb, params]);
    return makeRequest;
};

export const makeAccountRequest=()=>{
    const dispatch = useDispatch();
    const  makeRequest = fetchAllAccounts(
        `https://jsonplaceholder.typicode.com/users/1`,
        {
            verb: 'get',
        }
    );
    makeRequest(dispatch);
}
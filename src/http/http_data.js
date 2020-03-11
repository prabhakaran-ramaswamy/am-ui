import { useCallback } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import {  successAllAccount, errorAllAccount } from './actionCreators';
import * as URI from "./constants";

const fetchMethod = (endpoint, { verb = 'get', params = {} } = {}, successMethod, errorMethod ) => {
    const makeRequest = useCallback(async (dispatch) => {
        try {
            const response = await axios[verb](endpoint, params);
            dispatch(successMethod(response));
        } catch (e) {
            dispatch(errorMethod(e));
        }
    }, [endpoint, verb, params]);
    return makeRequest;
};

export const makeAccountRequest=()=>{
    console.log( URI.FETCH_ALL_ACCOUNT);
    const dispatch = useDispatch();
    const  makeRequest = fetchMethod(
        URI.FETCH_ALL_ACCOUNT,
        {
            verb: 'get'
        },successAllAccount,errorAllAccount
    );
    makeRequest(dispatch);
}
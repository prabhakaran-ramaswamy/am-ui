import { useCallback } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import {  
    successAllAccount,
    errorAllAccount,
    successAllAsset,
    errorAllAsset,
    successAllManagedAsset,
    errorAllManagedAsset 
} from './actionCreators';
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

const postMethod = (endpoint, { verb = 'post', params = {} } = {}, successMethod, errorMethod ) => {
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
    const  makeRequest = fetchMethod(
        URI.FETCH_ALL_ACCOUNT,
        {
            verb: 'get'
        },successAllAccount,errorAllAccount
    );
    makeRequest(useDispatch());
}

export const makeAssetRequest=()=>{
    console.log( URI.FETCH_ALL_ASSET);
    const  makeRequest = fetchMethod(
        URI.FETCH_ALL_ASSET,
        {
            verb: 'get'
        },successAllAsset,errorAllAsset
    );
    makeRequest(useDispatch());
}
export const makeMangedAssetRequest=()=>{
    console.log( URI.FETCH_ALL_MANAGED_ASSET);
    const  makeRequest = fetchMethod(
        URI.FETCH_ALL_MANAGED_ASSET,
        {
            verb: 'get'
        },successAllManagedAsset,errorAllManagedAsset
    );
    makeRequest(useDispatch());
}


export const makeAccountCreate=(values,dispatch)=>{
    console.log( URI.FETCH_ALL_ACCOUNT);
    const  makeRequest = postMethod(
        URI.FETCH_ALL_ACCOUNT,
        {
            verb: 'post',
            params:values
        },successAllAccount,errorAllAccount
    );
    makeRequest(dispatch);
}
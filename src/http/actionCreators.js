import {accountActionTypes} from '../features/account';
import {assetActionTypes} from '../features/asset' 
import {maActionTypes} from '../features/manage_asset'
export const successAllAccount = response => ({type: accountActionTypes.LIST_ACCOUNT_COMPLETED, payload:response });
export const errorAllAccount = error => ({payload:error, type: accountActionTypes.LIST_ACCOUNT_ERROR});
export const successAllAsset = response => ({type: assetActionTypes.LIST_ASSET_COMPLETED, payload:response });
export const errorAllAsset = error => ({payload:error, type: assetActionTypes.LIST_ASSET_ERROR});
export const successAllManagedAsset = response => ({type: maActionTypes.LIST_MANAGE_ASSET_COMPLETED, payload:response });
export const errorAllManagedAsset = error => ({payload:error, type: maActionTypes.LIST_MANAGE_ASSET_ERROR});
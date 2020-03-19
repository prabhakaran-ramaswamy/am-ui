import {Map,List} from 'immutable';

export const accountsInitialState = Map({
        accounts: List(),
        account:{ id:'', firstName: '', lastName: '', email: '', mobile: ''}
});

export const assetsInitialState = Map({
        assets: List(),
        asset:Map()
});

export const managedAssetsInitialState = Map({
        managed_assets: List(),
});
  
import * as baseActions from './baseApp_actions'


export default function ( state= {
  coins: [],
  coinlist:[]
}, action ) {
  let stateCopy = {...state};
  switch(action.type){

  case baseActions.GET_TOP_100_COIN_SUCCESS:
    stateCopy.coins = action.payload;
    return {stateCopy}

  case baseActions.GET_COIN_LIST_SUCCESS:
    stateCopy.coinlist = action.payload.Data;
    return {stateCopy}
    


    default:
        return {...stateCopy}
  }

}
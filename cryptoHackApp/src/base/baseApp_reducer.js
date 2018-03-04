import * as baseActions from './baseApp_actions'


export default function ( state= {
  coins: []
}, action ) {
  let stateCopy = {...state};
  switch(action.type){

  case baseActions.GET_TOP_100_COIN_FAILURE:
    stateCopy.coins = action.payload;
    return {stateCopy}

    default:
        return {...stateCopy}
  }

}
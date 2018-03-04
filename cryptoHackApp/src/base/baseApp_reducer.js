import * as baseActions from './baseApp_actions'


export default function ( state= {
  coins: [],
  coinlist:[]
}, action ) {
  let stateCopy = JSON.parse(JSON.stringify(state))
  switch(action.type){

  case baseActions.GET_TOP_100_COIN_SUCCESS:
    stateCopy.coins = action.payload;
    return {...stateCopy}

  case baseActions.GET_COIN_LIST_SUCCESS:
    stateCopy.coinlist = action.payload.Data;
    return {...stateCopy}

  case baseActions.GET_COIN_HISTORY_SUCCESS:
    let index = stateCopy.coins.findIndex( item => { return item.symbol == action.payload.id})
    console.log(action.payload.data.length)
    stateCopy.coins[index].history = action.payload.data;

    return {...stateCopy}
    default:
        return {...stateCopy}
  }

}
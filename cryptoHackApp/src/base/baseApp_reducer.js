import * as baseActions from './baseApp_actions'


export default function ( state= {
  coins: [],
  coinlist:[],
  user:{
    name: 'Mr. Bit',
    spendingPower: '50,938',
    userCoins: 
      [{
        id: '1', 
        name: 'Bitcoin',
        symbol: 'BTC',
        amount: '2',
        avgCost: '7,800',
        equity: '15,000'
      },
      {
        id: '2',
        name: 'Ethereum',
        symbol: 'ETH',
        amount: '4',
        avgCost: '890',
        equity: '3,901'
      },
      {
        id: '3',
        name: 'Ripple',
        symbol: 'XRP',
        amount: '20',
        avgCost: '0.99',
        equity: '23'
      },
      {
        id: '4',
        name: 'Litecoin',
        symbol: 'LTC',
        amount: '5',
        avgCost: '220',
        equity: '1,124'
      }]
  }
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
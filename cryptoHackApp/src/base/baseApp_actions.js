export const GET_TOP_10_COIN = 'GET_TOP_10_COIN'
export const GET_TOP_10_COIN_FAILURE = 'GET_TOP_10_COIN_FAILURE';
export const GET_TOP_10_COIN_SUCCESS = 'GET_TOP_10_COIN_SUCCESS';

export const GET_TOP_100_COIN = 'GET_TOP_100_COIN';
export const GET_TOP_100_COIN_FAILURE = 'GET_TOP_100_COIN_FAILURE';
export const GET_TOP_100_COIN_SUCCESS = 'GET_TOP_100_COIN_SUCCESS';

export const GET_COIN_CURRENT_PRICE = 'GET_CURRENT_PRICE';
export const GET_COIN_CURRENT_PRICE_SUCCESS = 'GET_CURRENT_PRICE_SUCCESS';
export const GET_COIN_CURRENT_PRICE_FAILURE = 'GET_CURRENT_PRICE_FAILURE';

export const GET_COIN_HISTORY = 'GET_COIN_HISTORY';
export const GET_COIN_HISTORY_SUCCESS = 'GET_COIN_HISTORY_SUCCESS';
export const GET_COIN_HISTORY_FAILURE = 'GET_COIN_HISTORY_FAILURE';


export function getTop10Coin(){
    return {
        type: GET_TOP_100_COIN,
    }
}

export function getTop100Coin(){
    return {
        type: GET_TOP_100_COIN,
    }
}

//Pass and id or name of the coin
export function getCoinCurrentPrice(coinName){
    
    return{
        type: GET_COIN_CURRENT_PRICE,
        payload:{
            id: coinName
        }
    }
}

//find the history of a specific coin, timeLength suggested Value: 9999
export function getCoinDayHistory(coinName, currency, timeLength){

    return {
        type: GET_COIN_HISTORY,
        payload:{
            id: coinName,
            currency,
            limit
        }
    }

}
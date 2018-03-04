import { takeLatest, put, call,takeEvery } from 'redux-saga/effects';
import coinMarketCapAPI from '../api/coinMarketCap';
import cryptoCompareAPI from '../api/cryptoCompare';
import * as baseActions from './baseApp_actions';


export function * getTopTenCoins(action){

    try{
        let response = yield call(coinMarketCapAPI.getTopTen);
        if(response.error)  yield put({ type:baseActions.GET_TOP_10_COIN_FAILURE, payload: response})
        yield put({ type:baseActions.GET_TOP_10_COIN_SUCCESS, payload:response})
    }catch(e){
        yield put({ type:baseActions.GET_TOP_10_COIN_FAILURE, payload: e})
    }

}

export function * getTopHundyCoins(action){

    try{

        let response = yield call(coinMarketCapAPI.getTopHundred);
        if(response.error)  yield put({ type:baseActions.GET_TOP_100_COIN_FAILURE, payload: response})

        yield put({ type:baseActions.GET_TOP_100_COIN_SUCCESS, payload:response})

    }catch(e){
        yield put({ type:baseActions.GET_TOP_100_COIN_FAILURE, payload: e})
    }
}

export function * getCoinCurrentPrice(action){
    try{
        let { id } = action.payload;
        let response = yield call(coinMarketCapAPI.getCurrentPrice, id);
        if(response.error) yield put({ type:baseActions.GET_COIN_CURRENT_PRICE_FAILURE, payload: response})
        yield put({ type:baseActions.GET_COIN_CURRENT_PRICE_SUCCESS, payload:response})
    }catch(e){
        yield put({ type:baseActions.GET_COIN_CURRENT_PRICE_FAILURE, payload: e})
    }
}

export function * getCoinDayHistory(action){
    try{
        let { id, currency, limit } = action.payload;
        let response = yield call(coinMarketCapAPI.getCurrentPrice, id, currency, limit);
        if(response.error) yield put({ type:baseActions.GET_COIN_CURRENT_PRICE_FAILURE, payload: response})
        yield put({ type:baseActions.GET_COIN_CURRENT_PRICE_SUCCESS, payload:response})
    }catch(e){
        yield put({ type:baseActions.GET_COIN_CURRENT_PRICE_FAILURE, payload: e })
    }
}

export function* getCoinList(action){
    try{
        let response = yield call(cryptoCompareAPI.getCoinList);
        if(response.error)  yield put({ type:baseActions.GET_COIN_LIST_FAILURE, payload: response})
        yield put({ type:baseActions.GET_COIN_LIST_SUCCESS, payload:response})
    }catch(e){
        yield put({ type:baseActions.GET_COIN_LIST_FAILURE, payload: e})
    }
}

export default function* baseSaga(){
    yield takeLatest(baseActions.GET_COIN_CURRENT_PRICE, getCoinCurrentPrice);
    yield takeLatest(baseActions.GET_COIN_HISTORY, getCoinDayHistory);
    yield takeLatest(baseActions.GET_TOP_100_COIN, getTopHundyCoins);
    yield takeLatest(baseActions.GET_TOP_10_COIN, getTopTenCoins);
    yield takeLatest(baseActions.GET_COIN_LIST, getCoinList);
}
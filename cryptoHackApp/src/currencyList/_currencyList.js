import CurrencyList from './currencyList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as currencyListAction from './currencyList_actions';


function mapStateToProps(state){
    return {
        app: state.containers.BaseAppReducer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({

        getTopHundyCoins: currencyListAction.getTop100Coin,
        getTopTenCoins: currencyListAction.getTop10Coin,
        getCoinDayHistory: currencyListAction.getCoinDayHistory,
        getCoinCurrentPrice: currencyListAction.getCoinCurrentPrice

    }, dispatch)
}

export const CurrencyListContainer = connect(mapStateToProps, mapDispatchToProps)(CurrencyList);
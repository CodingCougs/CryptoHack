import BaseApp from './baseApp';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as baseActions from './baseApp_actions';

function mapStateToProps(state){
    return {
        app: state.containers.BaseAppReducer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({

        getTopHundyCoins: baseActions.getTop100Coin,
        getTopTenCoins: baseActions.getTop10Coin,
        getCoinDayHistory: baseActions.getCoinDayHistory,
        getCoinCurrentPrice: baseActions.getCoinCurrentPrice,
        getCoinList: baseActions.getCoinList
        
    }, dispatch)
}

export const BaseAppContainer = connect(mapStateToProps, mapDispatchToProps)(BaseApp);
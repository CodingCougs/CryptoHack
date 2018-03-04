import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { List, ListItem, Badge } from 'react-native-elements';


const data = [
    {
        "id": "bitcoin", 
        "name": "Bitcoin", 
        "symbol": "BTC", 
        "rank": "1", 
        "price_usd": "11475.9", 
        "price_btc": "1.0", 
        "24h_volume_usd": "6647760000.0", 
        "market_cap_usd": "193925920758", 
        "available_supply": "16898537.0", 
        "total_supply": "16898537.0", 
        "max_supply": "21000000.0", 
        "percent_change_1h": "0.33", 
        "percent_change_24h": "3.25", 
        "percent_change_7d": "17.85", 
        "last_updated": "1520122465"
    }, 
    {
        "id": "ethereum", 
        "name": "Ethereum", 
        "symbol": "ETH", 
        "rank": "2", 
        "price_usd": "856.022", 
        "price_btc": "0.0750195", 
        "24h_volume_usd": "1694010000.0", 
        "market_cap_usd": "83861796927.0", 
        "available_supply": "97966871.0", 
        "total_supply": "97966871.0", 
        "max_supply": null, 
        "percent_change_1h": "-0.19", 
        "percent_change_24h": "-0.47", 
        "percent_change_7d": "2.43", 
        "last_updated": "1520122452"
    }, 
    {
        "id": "ripple", 
        "name": "Ripple", 
        "symbol": "XRP", 
        "rank": "3", 
        "price_usd": "0.906843", 
        "price_btc": "0.00007932", 
        "24h_volume_usd": "280196000.0", 
        "market_cap_usd": "35450267295.0", 
        "available_supply": "39091956706.0", 
        "total_supply": "99992520283.0", 
        "max_supply": "100000000000", 
        "percent_change_1h": "0.2", 
        "percent_change_24h": "-0.83", 
        "percent_change_7d": "-4.08", 
        "last_updated": "1520122741"
    }, 
    {
        "id": "bitcoin-cash", 
        "name": "Bitcoin Cash", 
        "symbol": "BCH", 
        "rank": "4", 
        "price_usd": "1264.95", 
        "price_btc": "0.110857", 
        "24h_volume_usd": "370139000.0", 
        "market_cap_usd": "21501873090.0", 
        "available_supply": "16998200.0", 
        "total_supply": "16998200.0", 
        "max_supply": "21000000.0", 
        "percent_change_1h": "0.01", 
        "percent_change_24h": "-1.07", 
        "percent_change_7d": "7.01", 
        "last_updated": "1520122452"
    }, 
    {
        "id": "litecoin", 
        "name": "Litecoin", 
        "symbol": "LTC", 
        "rank": "5", 
        "price_usd": "209.788", 
        "price_btc": "0.0183502", 
        "24h_volume_usd": "654162000.0", 
        "market_cap_usd": "11636577365.0", 
        "available_supply": "55468270.0", 
        "total_supply": "55468270.0", 
        "max_supply": "84000000.0", 
        "percent_change_1h": "-0.21", 
        "percent_change_24h": "-1.52", 
        "percent_change_7d": "2.42", 
        "last_updated": "1520122741"
    }, 
    {
        "id": "neo", 
        "name": "NEO", 
        "symbol": "NEO", 
        "rank": "6", 
        "price_usd": "121.514", 
        "price_btc": "0.0106289", 
        "24h_volume_usd": "132474000.0", 
        "market_cap_usd": "7898410000.0", 
        "available_supply": "65000000.0", 
        "total_supply": "100000000.0", 
        "max_supply": "100000000.0", 
        "percent_change_1h": "-0.36", 
        "percent_change_24h": "-2.73", 
        "percent_change_7d": "3.53", 
        "last_updated": "1520122747"
    }, 
    {
        "id": "cardano", 
        "name": "Cardano", 
        "symbol": "ADA", 
        "rank": "7", 
        "price_usd": "0.295729", 
        "price_btc": "0.00002592", 
        "24h_volume_usd": "114597000.0", 
        "market_cap_usd": "7667386643.0", 
        "available_supply": "25927070538.0", 
        "total_supply": "31112483745.0", 
        "max_supply": "45000000000.0", 
        "percent_change_1h": "-0.12", 
        "percent_change_24h": "-0.6", 
        "percent_change_7d": "-8.04", 
        "last_updated": "1520122453"
    }, 
    {
        "id": "stellar", 
        "name": "Stellar", 
        "symbol": "XLM", 
        "rank": "8", 
        "price_usd": "0.361738", 
        "price_btc": "0.00003164", 
        "24h_volume_usd": "61809500.0", 
        "market_cap_usd": "6680618853.0", 
        "available_supply": "18468114639.0", 
        "total_supply": "103728679130", 
        "max_supply": null, 
        "percent_change_1h": "5.51", 
        "percent_change_24h": "12.35", 
        "percent_change_7d": "2.66", 
        "last_updated": "1520122743"
    }, 
    {
        "id": "eos", 
        "name": "EOS", 
        "symbol": "EOS", 
        "rank": "9", 
        "price_usd": "7.972", 
        "price_btc": "0.00069865", 
        "24h_volume_usd": "140984000.0", 
        "market_cap_usd": "5620874209.0", 
        "available_supply": "705077046.0", 
        "total_supply": "900000000.0", 
        "max_supply": "1000000000.0", 
        "percent_change_1h": "-0.32", 
        "percent_change_24h": "-2.3", 
        "percent_change_7d": "-1.55", 
        "last_updated": "1520122451"
    }, 
    {
        "id": "monero", 
        "name": "Monero", 
        "symbol": "XMR", 
        "rank": "10", 
        "price_usd": "354.057", 
        "price_btc": "0.0309694", 
        "24h_volume_usd": "195107000.0", 
        "market_cap_usd": "5588788075.0", 
        "available_supply": "15784995.0", 
        "total_supply": "15784995.0", 
        "max_supply": null, 
        "percent_change_1h": "-0.39", 
        "percent_change_24h": "2.4", 
        "percent_change_7d": "29.66", 
        "last_updated": "1520122742"
    }, 
    {
        "id": "iota", 
        "name": "IOTA", 
        "symbol": "MIOTA", 
        "rank": "11", 
        "price_usd": "1.85271", 
        "price_btc": "0.00016237", 
        "24h_volume_usd": "25713500.0", 
        "market_cap_usd": "5149663551.0", 
        "available_supply": "2779530283.0", 
        "total_supply": "2779530283.0", 
        "max_supply": "2779530283.0", 
        "percent_change_1h": "-0.01", 
        "percent_change_24h": "-3.41", 
        "percent_change_7d": "2.25", 
        "last_updated": "1520122450"
    }, 
    {
        "id": "dash", 
        "name": "Dash", 
        "symbol": "DASH", 
        "rank": "12", 
        "price_usd": "607.8", 
        "price_btc": "0.0531643", 
        "24h_volume_usd": "111199000.0", 
        "market_cap_usd": "4812644259.0", 
        "available_supply": "7918138.0", 
        "total_supply": "7918138.0", 
        "max_supply": "18900000.0", 
        "percent_change_1h": "-0.08", 
        "percent_change_24h": "0.48", 
        "percent_change_7d": "2.79", 
        "last_updated": "1520122741"
    }
]

export default class CurrencyList extends Component {

  constructor(props){
    super(props)
    this.state = {
      currencyUpdate: 'hello',
      checkCurr: true
    }
  }

  onLearnMore = () => {
    this.props.navigation.navigate('Details');
    };

  onCheckCurInfo = (currency) => {
    
    if(this.state.checkCurr){
      console.log(this.state.currencyUpdate);
      this.setState({currencyUpdate: currency.price_usd,checkCurr: false })
      console.log(this.state.currencyUpdate)
    }
    else {
      console.log(this.state.currencyUpdate)
      this.setState({currencyUpdate: currency.percent_change_24h, checkCurr: true })
      console.log(this.state.currencyUpdate)
    }
    
  }

  render() {
    return ( 
    <View style={styles.container}>
        <FlatList
            data={data}
            renderItem={({item}) =>
                <ListItem
                roundAvatar
                onPress={() => this.onLearnMore()}
                key={item.Id}
                title={item.name}
                avatar={{uri:`https://www.cryptocompare.com${item.ImageUrl}`}}
                rightIcon={
                    <Badge containerStyle={styles.badge} onPress={() => this.onCheckCurInfo(item)}>
                    <Text style={styles.badgeText} >{this.state.currencyUpdate}</Text>
                    </Badge>
                }
                />
            }
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  badge:{
      backgroundColor: '#52c45d'
  },
  badgeText: {
      color: '#ffff'
  }
})

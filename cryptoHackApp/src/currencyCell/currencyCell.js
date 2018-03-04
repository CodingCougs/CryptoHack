import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { List, ListItem, Badge } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
var ok = require('../media/act.svg')

export default class CurrencyCell extends Component {
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
            <ListItem
            roundAvatar
            onPress={()=>this.onLearnMore()}
            key={this.props.currency.id}
            title={this.props.currency.name}
            avatar={{uri:ok}}
            rightIcon={
                <Badge containerStyle={styles.badge} onPress={() => this.onCheckCurInfo(this.props)}>
                <Text style={styles.badgeText} >{this.props.currency.price_usd}</Text>
                </Badge>
            }
            />
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

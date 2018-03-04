import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { List, ListItem, Badge } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';


export default class CurrencyCell extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataDisplayed: null,
            badgeColor: '#52c45d',
            checkCurr: true
            
        }
    }

    componentWillMount() {
        if (!this.state.dataDisplayed) {
            this.setState({dataDisplayed: `${this.props.currency.percent_change_24h}%`});
            this.setBadgeColor();
        }
    }

    onLearnMore = () => {
        this.props.navigation.navigate('Details');
    };

    onCheckCurInfo = (currency) => {
        if (this.state.checkCurr){
            this.setState({dataDisplayed: `$${currency.price_usd}`,checkCurr: false });
        }
        else {
            this.setState({dataDisplayed: `${currency.percent_change_24h}%`, checkCurr: true });
        }
    }

    setBadgeColor() {
        if (this.props.currency.percent_change_24h < 0) {
            this.setState({badgeColor: '#d6251b'});
        }
        else {
            this.setState({badgeColor: '#52c45d'});
        }
    }


    render() {
    
    return (
            <ListItem
            roundAvatar
            onPress={()=>this.onLearnMore()}
            key={this.props.currency.id}
            title={this.props.currency.name}
            avatar={{uri: `https://www.cryptocompare.com${this.props.url ? this.props.url.ImageUrl : "sorry"}`}}
            rightIcon={
                <Badge containerStyle={{backgroundColor: this.state.badgeColor}} onPress={() => this.onCheckCurInfo(this.props.currency)}>
                    <Text style={styles.badgeText} >{this.state.dataDisplayed}</Text>
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

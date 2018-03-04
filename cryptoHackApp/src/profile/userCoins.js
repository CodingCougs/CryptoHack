import React, {Component} from 'react';
import { Button, ListItem, List, Icon } from 'react-native-elements';
import { View , StyleSheet, FlatList, Text } from 'react-native';
import { data } from '../data/data';



export default class UserCoins extends Component {
    render() {
        let item = data[0]
        return (
            <View>
                <Text style={styles.headerText}>Portfolio</Text>
            <List >
            
                <ListItem
                key={'1'}
                title="Bitcoin|BTC"
                rightIcon={
                    <View>
                        <Text>Coins: 32</Text> 
                        <Text>Avg. Cost: $7800</Text> 
                        <Text>Equity Value: $15,000</Text> 
                    </View>
                    }
                />
                <ListItem
                key={'2'}
                title="Price in BTC"
                rightIcon={
                    <Text>{data[0].price_btc}</Text>            
                    }
                />

                <ListItem
                key={'3'}
                title="Total Supply"
                rightIcon={
                    <Text>{data[0].total_supply}</Text>            
                    }
                />

                <ListItem
                key={'4'}
                title="24 Hour Update"
                rightIcon={
                    <Text>{data[0].percent_change_24h}%</Text>            
                    }
                />

                
            </List>
            </View>
        );}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      }
  })
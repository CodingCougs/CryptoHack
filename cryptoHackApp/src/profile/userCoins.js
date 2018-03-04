import React, {Component} from 'react';
import { Button, ListItem, List, Icon,Badge } from 'react-native-elements';
import { View , StyleSheet, FlatList, Text } from 'react-native';
import { data } from '../data/data';



export default class UserCoins extends Component {
    render() {
        console.log(this.props.navigation);
        let item = data[0]
        return (
            <View>
                <Text style={styles.headerText}>Portfolio</Text>
            <List >
            {
            this.props.coins.map((coin) => (
                <View>
                    <ListItem
                    key={coin.id}
                    title={`${coin.name}`}
                    subtitle={coin.symbol}
                    rightIcon={
                        <View>
                        <View style={styles.cellInfo}>
                            <Badge containerStyle={{margin: 3, backgroundColor: 'orange'}}>
                                <Text style={styles.badgeText} >Coins: {coin.amount}</Text>
                            </Badge>
                            <Badge containerStyle={{margin: 3, backgroundColor: 'orange'}}>
                                <Text style={styles.badgeText} >Avg. Cost: {coin.avgCost}</Text>
                            </Badge>
                        </View>
                        <View style={styles.cellInfo}>
                        <Badge containerStyle={{margin: 3, backgroundColor: 'orange'}}>
                            <Text style={styles.badgeText} >Equity Value: {coin.equity}</Text>
                        </Badge>
                        </View>
                        </View>
                        }
                    />
                    
                </View>
            ))
            }
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
      },
      cellInfo:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'row',
        marginRight: 5
      },
      badgeText:{
          color:'#ffff'
      }
  })
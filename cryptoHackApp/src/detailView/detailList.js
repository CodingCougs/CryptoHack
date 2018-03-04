import React, {Component} from 'react';
import { Button, ListItem, List } from 'react-native-elements';
import { View , StyleSheet, FlatList, Text } from 'react-native';
import { data } from '../data/data';



export default class DetailList extends Component {

    constructor(props){
        super(props);

    }

    render() {
        return (
            // <View style={styles.container}>
            //     <FlatList
            //         data={this.props.coin}
            //         renderItem={
            //             <ListItem
            //             key={this.props.coin.id}
            //             title="Price in USD"
            //             rightIcon={
                            
            //                 <Text>{this.props.coin.price_usd}</Text>
                        
            //             }
            //             />
            //         }
            //     />

            // </View>
            <View>
                <Text style={styles.headerText}>{this.props.coin ? this.props.coin.name : "Loading"} | {this.props.coin.symbol}</Text>
            <List >
                <ListItem
                key={'1we'}
                title="Price in USD"
                rightIcon={
                    <Text>${this.props.coin.price_usd}</Text>            
                    }
                />
                <ListItem
                key={'211'}
                title={`Price in BTC`}
                rightIcon={
                    <Text>{this.props.coin.price_btc}</Text>            
                    }
                />

                <ListItem
                key={'3qweq'}
                title="Total Supply"
                rightIcon={
                    <Text>{this.props.coin.total_supply}</Text>            
                    }
                />

                <ListItem
                key={'4123'}
                title="24 Hour Update"
                rightIcon={
                    <Text>{this.props.coin.percent_change_24h}%</Text>            
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
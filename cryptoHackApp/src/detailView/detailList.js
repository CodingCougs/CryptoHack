import React, {Component} from 'react';
import { Button, ListItem, List } from 'react-native-elements';
import { View , StyleSheet, FlatList, Text } from 'react-native';
import { data } from '../data/data';



export default class DetailList extends Component {
    render() {
        let item = data[0]
        return (
            // <View style={styles.container}>
            //     <FlatList
            //         data={data[0]}
            //         renderItem={
            //             <ListItem
            //             key={data[0].id}
            //             title="Price in USD"
            //             rightIcon={
                            
            //                 <Text>{data[0].price_usd}</Text>
                        
            //             }
            //             />
            //         }
            //     />

            // </View>
            <View>
                <Text style={styles.headerText}>{item.name} | {item.symbol}</Text>
            <List >
            
                <ListItem
                key={'1'}
                title="Price in USD"
                rightIcon={
                    <Text>${data[0].price_usd}</Text>            
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
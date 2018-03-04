import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { List, ListItem, Badge } from 'react-native-elements';
import CurrencyCell from '../currencyCell/currencyCell';
import { data } from '../data/data';

export default class CurrencyList extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return ( 
    <View style={styles.container}>
        <FlatList
            data={data}
            renderItem={({item}) =>
              <CurrencyCell currency={item} navigation={this.props.navigation}/>
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
  }
})

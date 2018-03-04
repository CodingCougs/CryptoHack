import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FeedStack, Tabs } from '../config/router';
export default class BaseApp extends Component {

  constructor(props){
    super(props)
    this.state = { }
  }
  
  componentDidMount(){
    this.props.getTopHundyCoins();
    this.props.getCoinList();
    
  }


  render() {
    return (
      <Tabs/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

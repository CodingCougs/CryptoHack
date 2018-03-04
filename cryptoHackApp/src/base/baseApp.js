import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FeedStack } from '../config/router';
export default class BaseApp extends Component {

  constructor(props){
    super(props)
    this.state = { }
  }
  
  componentDidMount(){
    this.props.getTopHundyCoins();
    
  }


  render() {
    return (
      <FeedStack/>
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

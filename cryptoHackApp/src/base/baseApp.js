import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BaseApp extends Component {

  constructor(props){
    super(props)
    this.state = { }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>GO GO CODING COUGS GO GO</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
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

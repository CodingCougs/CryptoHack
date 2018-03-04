import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default class CurrencyList extends Component {

  constructor(props){
    super(props)
    this.state = { }
  }

  onLearnMore = () => {
    this.props.navigation.navigate('Details');
    };
  
  render() {
    return ( 
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>GO GO CODING COUGS GO GO</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
            onPress={() => this.onLearnMore()}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
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

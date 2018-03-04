import React, {Component} from 'react';
import { Button } from 'react-native-elements';
import { View , StyleSheet, } from 'react-native';



export default class BuySell extends Component {

    render() {
        return (
            <View style={styles.contianer}>
                <Button
                    text='Buy'
                    buttonStyle={styles.buttonStyle}
                />
                <Button
                    text='Sell'
                    buttonStyle={styles.buttonStyle}
                />
            </View>
        );}
}

const styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor: '#52c45d',
        margin: 20,
        width: 100
        }
})
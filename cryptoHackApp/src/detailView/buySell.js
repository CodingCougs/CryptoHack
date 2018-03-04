import React, {Component} from 'react';
import { Button } from 'react-native-elements';
import { View , StyleSheet, } from 'react-native';



export default class BuySell extends Component {

    render() {
        return (
            <View style={styles.container}>
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
    container: {
        // flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        // flexWrap: 'wrap',
        padding: 10
    },
    buttonStyle:{
        backgroundColor: '#52c45d',
        margin: 20,
        width: 100
        }
})
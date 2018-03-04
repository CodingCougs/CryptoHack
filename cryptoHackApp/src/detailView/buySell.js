import React, {Component} from 'react';
import { Button } from 'react-native-elements';
import { View , StyleSheet, } from 'react-native';



export default class BuySell extends Component {

    render() {
        return (
            <View style={styles.contianer}>
                <Button style={styles.buttonStyle}
                text='Buy'
                buttonStyle={{
                backgroundColor: '#52c45d'
                }}
                />
                <Button style={styles.buttonStyle}
                text='Sell'
                buttonStyle={{
                    backgroundColor: '#52c45d'
                }}
                />
            </View>
        );}
}

const styles = StyleSheet.create({
    contianer: {
        // flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        // flexWrap: 'wrap',
        padding: 10
    },
    buttonStyle:{
        margin: 20,
        width: 100
    }
})
import React, {Component} from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import UserCoins from './userCoins';



export default class DetailView extends Component {
    render() {
        return (
            <View>
            <View style={styles.container}>
            <Avatar
                xlarge
                rounded
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{flexDirection: 'row',
                alignItems:'center',
                justifyContent:'center'}}

            />
            <Text style={styles.headerText}>Mr. Bit | $54,951</Text>
            </View>
            <UserCoins />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
    }

})


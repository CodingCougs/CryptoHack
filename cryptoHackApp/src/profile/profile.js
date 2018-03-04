import React, {Component} from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import UserCoins from './userCoins';



export default class DetailView extends Component {

    constructor(props){
        super(props);
        this.state={};
    }

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
            <Text style={styles.headerText}>{this.props.screenProps.name} | ${this.props.screenProps.spendingPower}</Text>
            </View>
            <UserCoins coins={this.props.screenProps.userCoins}/>
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


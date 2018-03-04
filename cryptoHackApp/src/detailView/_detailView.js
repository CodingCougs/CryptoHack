import React, {Component} from 'react';
import Graph from './graph';
import BuySell from './buySell';
import DetailList from './detailList';
import { View } from 'react-native';



export default class DetailView extends Component {
    render() {
        return (
            <View>
                <Graph />
                <BuySell/>
                <DetailList/>
            </View>
        )
    }

}


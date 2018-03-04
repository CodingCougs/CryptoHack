import React, {Component} from 'react';
import Graph from './graph';
import BuySell from './buySell';
import DetailList from './detailList';
import { View } from 'react-native';



export default class DetailView extends Component {

    constructor(props){
        super(props);
        this.state={};
    }

    render() {

        return (
            <View>
                <Graph />
                <BuySell/>
                <DetailList coin={this.props.navigation.state.params.coin}/>
            </View>
        )
    }

}


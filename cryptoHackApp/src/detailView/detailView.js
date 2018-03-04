import React, {Component} from 'react';
import {GraphContainer} from './_graph';
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
                <GraphContainer coin={this.props.navigation.state.params.coin} />
                <BuySell/>
                <DetailList coin={this.props.navigation.state.params.coin}/>
            </View>
        )
    }

}


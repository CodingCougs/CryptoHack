import React, {Component} from 'react';
import { LineChart, YAxis, XAxis } from 'react-native-svg-charts'
import { View } from 'react-native'
import * as shape from 'd3-shape'


export default class Graph extends Component {
    
    constructor(props){
        super(props)
        this.state={ };
    }

    generateData(){
        console.log(this.props.coin.history);
        return this.props.coin.history.map(item => item.high)
    }


    render() {
        console.log("Graph",this.props.coin.history);
        const data = this.props.coin.history ? this.generateData() :[ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
        const contentInset = { top: 20, bottom: 20 }

        return (
            <View style={ { height: 200, flexDirection: 'row' } }>
                
                <YAxis
                  data={data}
                  contentInset={ contentInset }
                  svg={{
                      fill: 'grey',
                      fontSize: 10,
                  }}
                  formatLabel={ value => `${value}ºC` }
                />
                <LineChart
                    style={ { flex: 1, marginLeft: 16 } }
                    data={data}
                    svg={{ stroke: 'rgb(82,196,93)' }}
                    contentInset={ contentInset }
                />
            </View>
        )
    }
}
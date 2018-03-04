import React, {Component} from 'react';
import { LineChart, YAxis, XAxis } from 'react-native-svg-charts'
import { View } from 'react-native'
import * as shape from 'd3-shape'


export default class Graph extends Component {

    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
        const contentInset = { top: 20, bottom: 20 }

        return (
            <View style={ { height: 250, flexDirection: 'row' } }>
                
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
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={ contentInset }
                />
            </View>
        )
    }
}
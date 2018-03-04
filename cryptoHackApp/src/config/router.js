import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import {CurrencyListContainer} from '../currencyList/_currencyList';
import DetailView from '../detailView/_detailView';

export const FeedStack = StackNavigator({
    Feed: {
      screen: CurrencyListContainer,
      navigationOptions: {
        title: 'Currencies',
      },
    },
    Details: {
      screen: DetailView,
      navigationOptions: ({ navigation }) => ({
        title: "Detail View",
      }),
    },
  });

  // export const DetailView = StackNavigator ({
  //     Cell:{
  //       screen: CurrencyCell
  //       },
  //       Details: {
  //           screen: baseApp,
  //           navigationOptions: ({ navigation }) => ({
  //             title: "Detail View",
  //           }),
  //         },
  // });

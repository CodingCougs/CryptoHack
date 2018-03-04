import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import {CurrencyListContainer} from '../currencyList/_currencyList';
import CurrencyCell from '../currencyCell/currencyCell';
import baseApp from './baseApp';

export const FeedStack = StackNavigator({
    Feed: {
      screen: CurrencyListContainer,
      navigationOptions: {
        title: 'Currencies',
      },
    },
    Details: {
      screen: baseApp,
      navigationOptions: ({ navigation }) => ({
        title: "Detail View",
      }),
    },
  });

  export const DetailView = StackNavigator ({
      Cell:{
        screen: CurrencyCell
        },
        Details: {
            screen: baseApp,
            navigationOptions: ({ navigation }) => ({
              title: "Detail View",
            }),
          },
  });

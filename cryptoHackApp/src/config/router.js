import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import currencyList from '../currencyList/currencyList';
import baseApp from '../base/baseApp';

export const FeedStack = StackNavigator({
    Feed: {
      screen: currencyList,
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
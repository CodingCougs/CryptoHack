import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import {CurrencyListContainer} from '../currencyList/_currencyList';
import DetailView from '../detailView/_detailView';
import Profile from '../profile/profile';

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

  export const Tabs = TabNavigator({
    Feed: {
      screen: FeedStack,
      navigationOptions: {
        tabBarLabel: 'Feed',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      },
    },
    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: 'Prfoile',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
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

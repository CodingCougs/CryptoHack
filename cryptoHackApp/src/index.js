import React from 'react';
import { Provider } from 'react-redux';

import { CurrencyListContainer } from './currencyList/_currencyList';
import store from './global/global-store'


import { FeedStack } from './config/router';

const Main = () => (
    <Provider store={store}>
       <FeedStack/>
    </Provider>
  )

export default Main;
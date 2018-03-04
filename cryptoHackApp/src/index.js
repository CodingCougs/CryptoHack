import React from 'react';
import { Provider } from 'react-redux';

import { BaseAppContainer } from './base/_baseApp';
import store from './global/global-store'


const Main = () => (
    <Provider store={store}>
       <BaseAppContainer/>
    </Provider>
  )

export default Main;
import React from 'react';
import { Provider } from 'react-redux';
import store from './global/global-store'

import {BaseAppContainer} from './base/_baseApp'

const Main = () => (
    <Provider store={store}>
    <BaseAppContainer/>
    </Provider>
  )

export default Main;
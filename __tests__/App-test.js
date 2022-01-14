/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { createStore } from 'redux';
import {rootReducer} from '../src/store'
import { Provider } from 'react-redux';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
const store = createStore(rootReducer);
       
it('renders correctly', () => {
  renderer.create(<Provider store={store}>
                    <App/>
                  </Provider>
  ).toJSON();
})

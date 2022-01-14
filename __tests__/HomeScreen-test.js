import React from 'react';
import Home from '../src/screens/Home';
import { render, act, fireEvent } from 'react-native-testing-library'
import { rootReducer } from '../src/store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';

const store = createStore(rootReducer);
const tree = create(
     <Provider store={store}>
        <Home/>
     </Provider>
        
        );
test('snapshot'),()=>{
    expect(tree).toMatchInlineSnapshot();
}

it ('does stuff', () => {
    const mock = jest.fn()
    const component = render(<Home onChangeItem={mock}/>)
    fireEvent.changeText(component.findByType(TextInput), 'test')
    expect(mock).toHaveBeenCalledWith('test')
  })
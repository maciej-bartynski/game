import { combineReducers, createStore } from 'redux';
import exampleReducer from 'reducers/exampleState';
import React from 'react';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  exampleState: exampleReducer
});

const store = createStore(rootReducer);

export default function WrapWithRedux({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

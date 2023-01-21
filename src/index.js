import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import {createStore} from 'redux';

import {reducer} from './reducer/reducer'
import App from './App';

//помещаем редюсеры в хранилище
const store = createStore(reducer);

const ConnectedApp = connect((state) => {
  console.log(state);
  return state;
})(App)

ReactDOM.render(
  //фиксируем хранилище store в провайдере
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
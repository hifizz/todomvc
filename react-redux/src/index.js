import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducers';

console.log('todoApp:', todoApp);
let store = createStore(todoApp);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app")
);

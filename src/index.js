import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store/configure-store';
import App from './App';

import './index.css';

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);

console.log('initial state:');
console.log(store.getState());
console.log('--------');

console.log('Dispatching ADD_TODO');
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------');

console.log('Dispatching ADD_TODO');
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Go shopping'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------');

console.log('Dispatching TOGGLE_TODO');
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 1,
});
console.log('Current state:');
console.log(store.getState());
console.log('--------');

console.log('Dispatching SET_VISIBLITIY_FILTER');
store.dispatch({
  type: 'SET_VISIBLITIY_FILTER',
  filter: 'SHOW_COMPLETED',
});
console.log('Current state:');
console.log(store.getState());
console.log('--------');
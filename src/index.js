import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from './TodoApp';
import store from './redux/store/configure-store';

import './index.css';

// ReactDOM.render(
//     <App store={store} />,
//     document.getElementById('root')
// );

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();


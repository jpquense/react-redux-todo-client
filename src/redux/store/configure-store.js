import { createStore, compose } from 'redux';
import appConfig from '../../config/appConfig';
import todoAppReducer from '../reducers/index.reducer';

const initialState = [];
const enhancers = [];


if (appConfig.SHOW_REDUX_DEV_TOOLS) {
    const { devToolsExtension } = window;

    if ( typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    ...enhancers
);

const store = createStore(
    todoAppReducer,
    initialState,
    composedEnhancers
);

export default store;
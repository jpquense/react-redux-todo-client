import { combineReducers } from 'redux';
import todosReducer from './todos.reducer';
import visibilityFilterReducer from './visibilityFilter.reducer';

// const combineReducers = (reducers) => {
//     return (state = {}, action) => {
//         return Object.keys(reducers).reduce(
//             (nextState, key) => {
//                 nextState[key] = reducers[key](
//                     state[key],
//                     action
//                 );
//                 return nextState;
//             },
//             {}
//         );
//     };
// };

const mainReducer = combineReducers({
    todosReducer,
    visibilityFilterReducer
})

// const todoAppReducer = (state = {}, action) => {
//     return {
//         todos: todosReducer(
//             state.todos,
//             action
//         ),
//         visibilityFilter: visibilityFilterReducer(
//             state.visibilityFilter,
//             action
//         )
//     };
// };

export default mainReducer;
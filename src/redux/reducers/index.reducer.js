const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todoReducer(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todoReducer(t, action));
        default:
            return state;
    }
};

const visibilityFilterReducer = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

const todoAppReducer = (state = {}, action) => {
    return {
        todos: todosReducer(
            state.todos,
            action
        ),
        visibilityFilter: visibilityFilterReducer(
            state.visibilityFilter,
            action
        )
    };
};

export default todoAppReducer;
import React from 'react';
import { connect } from 'react-redux';
// import store from './redux/store/configure-store';

let nextTodoId = 0;

export class TodoApp extends React.Component {
    
  render() {
      console.log(this.props)
      
    return (
      <div>
        <input ref={node => {
            this.input = node;
        }} />
        <button
          onClick={() => {
            this.props.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: nextTodoId++
            });
            console.log(this.input.value)
            this.input.value = '';
          }}>
            Add Todo
          </button>
        <ul>
          {this.props.todos.map(todo => 
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(TodoApp);

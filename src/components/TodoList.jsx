import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleComplete } from '../features/todoSlice';

/**
 * A React component representing a list of to do items.
 *
 * Renders the list of to do items in the Redux state, with buttons to toggle
 * the completion status of each item and remove the item from the list.
 *
 * @returns {React.ReactElement} A React component representing the list of to
 * do items.
 */
const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  
  /**
   * Handles the toggle completion button being clicked.
   *
   * Dispatches the `toggleComplete` action with the id of the todo item.
   *
   * @param {string} id The id of the todo item to toggle the completion status
   * of.
   */
  const handleToggleCompleted = (id) => {
    dispatch(toggleComplete(id));
  }

  /**
   * Handles the remove button being clicked.
   *
   * Dispatches the `removeTodo` action with the id of the todo item.
   *
   * @param {string} id The id of the todo item to remove from the list.
   */
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  }

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.title} - {todo.description}
          <button onClick={() => handleToggleCompleted(todo.id)}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => handleRemoveTodo(todo.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList;

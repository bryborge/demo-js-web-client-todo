import { useSelector, useDispatch } from 'react-redux';
import { toggleComplete } from '../features/todoSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  
  const handleToggleCompleted = (id) => {
    dispatch(toggleComplete(id));
  }

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.title} - {todo.description}
          <button onClick={() => handleToggleCompleted(todo.id)}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList;

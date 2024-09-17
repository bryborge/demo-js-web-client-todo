import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  console.log(todos);
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.title} - {todo.description}
        </li>
      ))}
    </ul>
  )
}

export default TodoList;

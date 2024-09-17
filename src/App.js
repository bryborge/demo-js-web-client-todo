import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

/**
 * Top-level component for the entire application.
 *
 * Renders a simple header and delegates to {@link TodoForm} and {@link TodoList}
 * to handle the core application logic.
 *
 * @returns {React.ReactElement} A React component representing the application.
 */
function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;

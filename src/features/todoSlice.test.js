import todoReducer, { addTodo, removeTodo, toggleComplete } from './todoSlice';

describe('todoSlice reducer', () => {
  it('should add a new todo', () => {
    // Arrange
    const initialState = {
      todos: [],
    };
    // Act
    const newState = todoReducer(initialState, addTodo({ id: '1', text: 'Test Todo', completed: false }));
    // Assert
    expect(newState.todos.length).toBe(1);
  });

  it('should remove a todo', () => {
    // Arrange
    const initialState = {
      todos: [
        { id: '1', text: 'Test Todo', completed: false }, // incomplete todo
        { id: '2', text: 'Test Todo 2', completed: true }, // completed todo
      ],
    };
    // Act
    const newState = todoReducer(initialState, removeTodo('1'));
    // Assert
    expect(newState.todos.length).toBe(1);

    // Act
    const newState2 = todoReducer(newState, removeTodo('2'));
    // Assert
    expect(newState2.todos.length).toBe(0);
  });

  it('should toggle the completion status of a task', () => {
    // Arrange
    const initialState = {
      todos: [{ id: '1', text: 'Test Todo', completed: false }],
    };

    // Act
    const newState = todoReducer(initialState, toggleComplete('1'));
    // Assert
    expect(newState.todos[0].completed).toBe(true);

    // Act
    const toggledBackState = todoReducer(newState, toggleComplete('1'));
    // Assert
    expect(toggledBackState.todos[0].completed).toBe(false);
  });
});

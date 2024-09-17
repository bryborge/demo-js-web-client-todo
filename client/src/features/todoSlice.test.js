import todoReducer, { addTodo, toggleComplete } from './todoSlice';

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

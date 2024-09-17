import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';
import { v4 as uuidv4 } from 'uuid';

/**
 * React component representing a form to add a new todo item.
 *
 * Calls {@link addTodo} with the form data when the form is submitted.
 *
 * @returns {React.ReactElement} The rendered form.
 */
const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  /**
   * Handles the submission of the form.
   *
   * Calls {@link addTodo} with the form data, and resets the state of the
   * component to empty strings.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo({
      id: uuidv4(),
      title,
      description
    }));
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Add Item</button>
    </form>
  )
}

export default TodoForm;

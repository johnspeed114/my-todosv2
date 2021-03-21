import { v4 as uuidv4 } from 'uuid';
import './App.css';
import React, { useState } from 'react';
import HeadingArea from './components/HeadingArea';
import TodoList from './components/TodoList';

function App() {
	const [ newTodo, setNewTodo ] = useState('');
	const [ todoItems, setTodoItems ] = useState([]);
	//want to setup todos with console the new submitted to do item

	const handleSubmit = (theEvent) => {
		theEvent.preventDefault();

		console.log(newTodo);
		setTodoItems([ ...todoItems, {name: newTodo, completed: false, id: uuidv4()}]);
		console.log(todoItems);
		setNewTodo('');
	};

	const handleRemove = (id) => {
		console.log(id);
		const newList = todoItems.filter((item) => item.id !== id);
		setTodoItems(newList);
	};

  const handleComplete = (id) => {
    const booleanChange = todoItems.map(
      (item) => {
        if (item.id === id) {
          item.completed = !item.completed
        } 
        return item;
      })
    setTodoItems(booleanChange);

  }

	return (
		<div className="App">
      <HeadingArea handleSubmit={handleSubmit} setNewTodo={setNewTodo} newTodo={newTodo}/>
      <TodoList todoItems={todoItems} handleRemove={handleRemove} handleComplete={handleComplete}/>
		</div>
	);
}

export default App;

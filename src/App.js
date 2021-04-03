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
		theEvent.preventDefault(); //I forgot what is this again for?

		setTodoItems([ ...todoItems, { name: newTodo, completed: false, toggle: true, id: uuidv4() } ]);

		setNewTodo('');
	};

	const handleRemove = (id) => {
		console.log(id);
		const newList = todoItems.filter((item) => item.id !== id);
		setTodoItems(newList);
	};

	const handleEdit = (id, newTodoName) => {
		const editedMap = todoItems.map((item) => {
			if (item.id === id) {
				item.name = newTodoName;
				item.toggle = !item.toggle;
			}
			return item;
		});
		setTodoItems(editedMap);
	};

	const handleComplete = (id) => {
		const booleanChange = todoItems.map((item) => {
			if (item.id === id) {
				item.completed = !item.completed;
			}
			return item;
		});
		setTodoItems(booleanChange);
	};

	const toggleInput = (id) => {
		const changeToggle = todoItems.map((item) => {
			if (item.id === id) {
				item.toggle = !item.toggle;
			}
			return item;
		});
		setTodoItems(changeToggle);
	};

	return (
		<div className="App">
			<HeadingArea handleSubmit={handleSubmit} setNewTodo={setNewTodo} newTodo={newTodo} />
			<TodoList
				todoItems={todoItems}
				handleRemove={handleRemove}
				handleComplete={handleComplete}
				handleEdit={handleEdit}
				toggleInput={toggleInput}
			/>
		</div>
	);
}

export default App;

import React, { useState } from 'react';
import './../App.css';

function Todo({ handleRemove, item, handleComplete, toggleInput, editTodo, setEditTodo, handleEdit }) {
	const [ currentTodoText, setCurrentTodoText ] = useState(item.name);

	function doEdit(event) {
		event.preventDefault();
		// call up to the parent with the new value
		handleEdit(item.id, currentTodoText);
	}

	return (
		<li className={item.completed ? 'done' : ''}>
			<input type="checkbox" onClick={() => handleComplete(item.id)} />
			{item.toggle ? (
				<span onDoubleClick={() => toggleInput(item.id)}>{item.name}</span>
			) : (
				<form onSubmit={(event, id) => doEdit(event, id)}>
					<input
						type="text"
						value={currentTodoText}
						onChange={(event) => setCurrentTodoText(event.target.value)}
					/>
				</form>
			)}
			<button type="button" onClick={() => handleRemove(item.id)}>
				delete
			</button>
		</li>
	);
}

export default Todo;

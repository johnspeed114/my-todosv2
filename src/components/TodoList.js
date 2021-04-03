import React from 'react';
import Todo from './Todo';

function TodoList({ todoItems, handleRemove, handleComplete, handleEdit, toggleInput, set, editTodo, setEditTodo }) {
	return (
		<div className="todoList">
			{todoItems.map((item) => (
				<Todo
					key={item.toString()}
					handleRemove={handleRemove}
					handleComplete={handleComplete}
					handleEdit={handleEdit}
					toggleInput={toggleInput}
					item={item}
				/>
			))}
		</div>
	);
}

export default TodoList;

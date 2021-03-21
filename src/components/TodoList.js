import React from 'react';
import Todo from './Todo';

function TodoList({todoItems, handleRemove, handleComplete}) {
    return (
        <div className="todoList">
            {todoItems.map((item) => <Todo handleRemove={handleRemove} handleComplete={handleComplete} item={item}/>)}
        </div>
    )
}

export default TodoList;
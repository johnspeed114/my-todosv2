import React from 'react';

function HeadingArea({handleSubmit, setNewTodo, newTodo}) {
    return(
    <header className="App-header">
        <form onSubmit={handleSubmit}>
            {' '}
            {/*default set on the event for the function */}
            <input
                type="text"
                onChange={(event) => setNewTodo(event.target.value)}
                value={newTodo}
                placeholder="Enter Todo Item"
            />
            </form>
    </header>
    )
}

export default HeadingArea;
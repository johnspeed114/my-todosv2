import React from 'react';

function Todo({handleRemove, item, handleComplete}) {
    return (
    <li>
        <input type="checkbox" onClick={()=>handleComplete(item.id)}/>
        {item.name}
        <button type="button" onClick={() => handleRemove(item.id)}>
            delete
        </button>
    </li>
    )
}

export default Todo;
import React from 'react';
import './../App.css'

function Todo({handleRemove, item, handleComplete}) {
    return (
    <li key= {item.id} className={(item.completed)? 'done': ''}>
        <input type="checkbox" onClick={()=>handleComplete(item.id)}/>
        {item.name}
        
        <button type="button" onClick={() => handleRemove(item.id)}>
            delete
        </button>
    </li>
    )
}


export default Todo;
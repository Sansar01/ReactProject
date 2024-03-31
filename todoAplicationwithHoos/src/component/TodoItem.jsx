import React from 'react'

function TodoItem() {
    return (
        <li className='todo-item'>
            <span className='todo-item-text'>
                <input type='checkbox' />
                <span>Eat</span>
            </span>
            <p>...</p>
        </li>
    )
}

export default TodoItem
import React from 'react'

function TodoItem(props) {
    return (
        <>
        {props&& props.map((item)=>(
            <li className='todo-item'>
                <span className='todo-item-text'>
                    <input type='checkbox' />
                    <span>{item}</span>
                </span>
                <p>...</p>
            </li>
            ))}
        </>
    )
}

export default TodoItem
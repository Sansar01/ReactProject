/* eslint-disable react/prop-types */
import React from 'react'

function TodoItem(props) {
    return (
        <>
            <li className='todo-item'>
                <span className='todo-item-text'>
                    {props.completed?<></>:<input type='checkbox' />}
                    <span>{props.item}</span>
                </span>
                <p>...</p>
            </li>
        
        </>
    )
}

export default TodoItem
import React from 'react'

function TodoItem(props) {

  const value =  props.value;

    return (
        <>
            <li className='todo-item'>
                <span className='todo-item-text'>
                    <input type='checkbox' />
                    <span>{value.map((value) => (value))}</span>
                </span>
                <p>...</p>
            </li>
        
        </>
    )
}

export default TodoItem
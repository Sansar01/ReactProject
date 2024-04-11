/* eslint-disable react/prop-types */
import React from 'react'

function TodoItem(props) {
  return (
    <>
      
      {props.item.map((item, index) => (
        <li className="todo-item" key={index}>
          <span className="todo-item-text">
            {item.completed?<></>:<input type="checkbox" />}
            <span>{item.name}</span>
          </span>
          <p>...</p>
        </li>
      ))}

      {/* {props.item.map((item, index) =>
        console.log('component render  ' + item.name + ' **** ' + index),
      )} */}
    </>
  )
}

export default TodoItem

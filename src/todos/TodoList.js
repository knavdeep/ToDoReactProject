import React from  'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './ToDoList.css';

const ToDoList = ({todos =[{text:'hello'}] }) =>
(
    <div className='list-wrapper'>
        <NewTodoForm/>
        {todos.map(todo=><TodoListItem todo={todo}/>)}
        </div>
)

export default ToDoList;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {}
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => toggleComplete(todo.id)} 
                id={`check-${todo.id}`}
                className="custom-checkbox"
            />
            <label htmlFor={`check-${todo.id}`} className="todo-text">
                {todo.text}
            </label>

            {}
            <div className="todo-actions">
                <button 
                    onClick={() => editTodo(todo.id, todo.text)} 
                    className="action-btn edit-btn"
                >
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button 
                    onClick={() => deleteTodo(todo.id)} 
                    className="action-btn delete-btn"
                >
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
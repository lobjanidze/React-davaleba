import React from 'react';
// Imports for child components and assets
import TodoItem from './TodoItem';
import EmptyIllustration from './Detective.png'; 

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
    // Check for the empty state condition explicitly
    const isEmpty = todos.length === 0;

    if (isEmpty) {
        return (
            <div className="empty-state">
                {/* Display an image and a message when the list is empty */}
                <img 
                    src={EmptyIllustration} 
                    alt="No tasks found" 
                    className="empty-illustration"
                />
                <p className="empty-message">Looks like your to-do list is empty. Time to relax!</p>
            </div>
        );
    }

    // If the list is NOT empty, render the list container
    return (
        <div className="todo-list-container">
            {/* Map over the todos array to render the TodoItem for each entry */}
            {todos.map(todo => (
                <TodoItem
                    // Use todo.id as the key for efficient list rendering
                    key={todo.id} 
                    // Pass the todo object itself
                    todo={todo}
                    // Pass down the handler functions
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
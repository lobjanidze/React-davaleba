import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList';
import PromptModal from './components/PromptModal';
import './App.css'; 
import Moon from './moon.png';
import Search from './loopa.png';

function App() {
    const [todos, setTodos] = useState([]);

    const [showPrompt, setShowPrompt] = useState(false);
    

    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState(null);

    const addTodo = (text) => {
        const newTodo = {
            id: uuidv4(),
            text: text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setShowPrompt(false);   
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const startEdit = (id, text) => {
        setCurrentTodo({ id, text });
        setIsEditing(true);
        setShowPrompt(true);     
    };

    const saveEdit = (newText) => {
        setTodos(todos.map(todo => 
            todo.id === currentTodo.id ? { ...todo, text: newText } : todo
        ));
        setIsEditing(false);
        setCurrentTodo(null);
        setShowPrompt(false);
    };

    const handleCancel = () => {
        setShowPrompt(false);
        setIsEditing(false);
        setCurrentTodo(null);
    };

    return (
        <div className="app-container">
            <header className="todo-header">
                <h1>TODO LIST</h1>
            </header>

            <div className="search-bar-container">
                <div>
                    <input 
                    type="text" 
                    placeholder="Search note..." 
                    className="search-input"/>
                    <img src={Search} alt="Search" className="search"/>
                </div>
                <button className="search-all-btn">ALL</button>
                <button className="search-theme-btn"><img src={Moon} alt="Change Theme"/></button>
            </div>
            
            <TodoList 
                todos={todos}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={startEdit} 
            />

            {}
            <button 
                onClick={() => setShowPrompt(true)}
                className="add-btn"
            >
                +
            </button>

            {}
            {showPrompt && (
                <PromptModal
                    onApply={isEditing ? saveEdit : addTodo}
                    onCancel={handleCancel}
                    initialValue={currentTodo ? currentTodo.text : ''}
                    mode={isEditing ? 'edit' : 'add'}
                />
            )}
        </div>
    );
}

export default App;
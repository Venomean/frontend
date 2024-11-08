import React, { useEffect, useState } from 'react';
import axios from 'axios';


interface Todo {
    id: number;
    text: string;
}

const TodoList: React.FC = () => {
    
    const [todos, setTodos] = useState<Todo[]>([]);
    const [error, setError] = useState<string | null>(null);

    
    useEffect(() => {
        axios
            .get<Todo[]>('/api/todo') 
            .then((response) => {
                setTodos(response.data); 
            })
            .catch((error) => {
                setError('Error fetching todo list: ' + error.message); 
            });
    }, []); 

    return (
        <div>
            <h1>Todo List</h1>
            {error && <p>{error}</p>} {'ERROR'}
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li> {/* Display each todo item */}
                    ))}
            </ul>
        </div>
    );
};

export default TodoList;
import React, { useEffect, useState } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const token = localStorage.getItem('token'); // Token'i localStorage'den al
        const response = await fetch('your-api-endpoint/todos', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` }, // Token'i Authorization başlığına ekle
        });
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Fetch Todos Error:', error);
      }
    };
  
    fetchTodos();
  }, []);
  return (
    <div>
      <Typography variant="h4" gutterBottom>Todo List</Typography>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoList;

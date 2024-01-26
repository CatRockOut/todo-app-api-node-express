const express = require('express');
const bodyParser = require('body-parser');
const { writeTodos } = require('./utils/writeData');
const { readTodos } = require('./utils/readData');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Get all todo items:
app.get('/api/todos', (req, res) => {
    const todos = readTodos();

    res.json(todos);
});

// Get a single todo item:
app.get('/api/todos/:id', (req, res) => {
    const todos = readTodos();
    const todo = todos.find((item) => item.id === parseInt(req.params.id));

    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json(
            {
                error: 'Todo not found'
            }
        );
    }
});

// Create a todo item:
app.post('/api/todos', (req, res) => {
    const todos = readTodos();
    const newTodo = {
        id: todos.length + 1,
        title: req.body.title,
        completed: false,
    };

    todos.push(newTodo);
    writeTodos(todos);
    res.json(newTodo);
});

// Update a todo item:
app.put('/api/todos/:id', (req, res) => {
    const todos = readTodos();
    const todoIndex = todos.findIndex((item) => item.id === parseInt(req.params.id));

    if (todoIndex !== -1) {
        const updatedTodo = todos[todoIndex];

        if (req.body.title) {
            updatedTodo.title = req.body.title;
        }

        if (req.body.completed !== undefined) {
            updatedTodo.completed = JSON.parse(req.body.completed);
        }

        writeTodos(todos);
        res.json(todos[todoIndex]);
    } else {
        res.status(404).json(
            {
                error: 'Todo not found'
            }
        );
    }
});

// Delete a todo item:
app.delete('/api/todos/:id', (req, res) => {
    const todos = readTodos();
    const todoIndex = todos.findIndex((item) => item.id === parseInt(req.params.id));

    if (todoIndex !== -1) {
        const deletedTodo = todos.splice(todoIndex, 1);

        writeTodos(todos);
        res.json(deletedTodo[0]);
    } else {
        res.status(404).json(
            {
                error: 'Todo not found'
            }
        );
    }
});

app.listen(port, (error) => {
    if (!error) {
        console.log(`Server is running on http://localhost:${port}/api/todos/...`);
    } else {
        console.log("Error occurred, server can't start!!!", error);
    }
});

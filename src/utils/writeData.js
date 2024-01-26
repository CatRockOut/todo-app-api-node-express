const dataFilePath = './src/todos.json';
const fs = require('fs');

// Function to write data to the JSON file:
const writeTodos = (todos) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(todos, null, 2), 'utf8');
};

module.exports = { writeTodos };

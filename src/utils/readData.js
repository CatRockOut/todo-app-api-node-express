const dataFilePath = './src/todos.json';
const fs = require('fs');

// Function to read data from the JSON file:
const readTodos = () => {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');

        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

module.exports = { readTodos };

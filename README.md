# Minimalistic TODO app API

This is a minimalistic TODO app API developed using Node.js with the Express library, designed to operate without the need for a user interface. The primary functionality is centered around managing TODO items, and the data is stored in a JSON file.

### Endpoints:
1. **Get All TODO Items:**
    - Endpoint: /todos
    - Method: GET
    - Description: Retrieves a list of all TODO items.		
2. **Get a Single TODO Item:**
    - Endpoint: /todos/:id
    - Method: GET
    - Description: Retrieves details for a specific TODO item identified by its unique ID.
3. **Create a TODO Item:**
    - Endpoint: /todos
    - Method: POST
    - Description: Creates a new TODO item.
4. **Update a TODO Item:**
    - Endpoint: /todos/:id
    - Method: PUT
    - Description: Updates details for a specific TODO item identified by its unique ID.
5. **Delete a TODO Item:**
    - Endpoint: /todos/:id
    - Method: DELETE
    - Description: Deletes a specific TODO item identified by its unique ID.
    
This TODO app API provides a straightforward and efficient solution for managing and interacting with TODO items, making it an ideal foundation for building more extensive applications or integrating into projects that require TODO functionality.
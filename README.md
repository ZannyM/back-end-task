# back-end-task
        ''
        const express = require('express');
        const app = express();
        app.use(express.json());
        const foodItems = [
            { id: 1, name: "Pizza", price: 100 },
            { id: 2, name: "Burger", price: 50 },
            { id: 3, name: "Pasta", price: 75 }
            ];
        // TODO: Implement an API route to return food items
        app.get('/api/food', (req, res) => {
        // Implement this function
        });

        const PORT = 5000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); ''

### To Run

    node foodapp.js


### API Endpoints

GET	/api/food - Get all food items
GET	/api/food/:id - Get a specific food item by ID


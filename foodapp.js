const express = require('express');
const app = express();
app.use(express.json());

const foodItems = [
  { id: 1, name: "Pizza", price: 100 },
  { id: 2, name: "Burger", price: 50 },
  { id: 3, name: "Pasta", price: 75 }
];

app.get('/api/food', (req, res) => {
    res.status(200).json(foodItems);
  });

// return a single food item by ID
app.get('/api/food/:id', (req, res) => {
    const foodId = parseInt(req.params.id);
    const foodItem = foodItems.find(item => item.id === foodId);
  
    if (!foodItem) {
      return res.status(404).json({ message: "Food item not found" });
    }
  
    res.json(foodItem); 
  });

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 


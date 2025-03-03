const express = require('express');
const app = express();
app.use(express.json());

const foodItems = [
  { id: 1, name: "Pizza", price: 100 },
  { id: 2, name: "Burger", price: 50 },
  { id: 3, name: "Pasta", price: 75 }
];


// app.get('/api/food', (req, res) => {
//   res.json(foodItems); 
//   //I AM getting Cannot GET /
// });
// GET route to return all food items
app.get('/api/food', (req, res) => {
    res.status(200).json(foodItems);
  });

// GET route to return a single food item by ID
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
 

// const express = require('express');
// const app = express();
// app.use(express.json());

// const foodItems = [
//   { id: 1, name: "Pizza", price: 100 },
//   { id: 2, name: "Burger", price: 50 },
//   { id: 3, name: "Pasta", price: 75 }
// ];

// // API route to return all food items
// app.get('/api/food', (req, res) => {
//   res.json(foodItems);
// });

// // API route to return a single food item by ID
// app.get('/api/food/:id', (req, res) => {
//   const foodId = parseInt(req.params.id);
//   const foodItem = foodItems.find(item => item.id === foodId);

//   if (foodItem) {
//     res.json(foodItem);
//   } else {
//     res.status(404).json({ message: 'Food item not found' });
//   }
// });

// // API route to add a new food item
// app.post('/api/food', (req, res) => {
//   const { name, price } = req.body;

//   if (!name || !price) {
//     return res.status(400).json({ message: 'Name and price are required' });
//   }

//   const newFoodItem = {
//     id: foodItems.length + 1,
//     name,
//     price,
//   };

//   foodItems.push(newFoodItem);
//   res.status(201).json(newFoodItem);
// });

// // API route to update a food item
// app.put('/api/food/:id', (req, res) => {
//   const foodId = parseInt(req.params.id);
//   const { name, price } = req.body;
//   const foodIndex = foodItems.findIndex(item => item.id === foodId);

//   if (foodIndex !== -1) {
//     foodItems[foodIndex] = {
//       ...foodItems[foodIndex],
//       name: name || foodItems[foodIndex].name,
//       price: price || foodItems[foodIndex].price,
//     };
//     res.json(foodItems[foodIndex]);
//   } else {
//     res.status(404).json({ message: 'Food item not found' });
//   }
// });

// // API route to delete a food item
// app.delete('/api/food/:id', (req, res) => {
//   const foodId = parseInt(req.params.id);
//   const foodIndex = foodItems.findIndex(item => item.id === foodId);

//   if (foodIndex !== -1) {
//     foodItems.splice(foodIndex, 1);
//     res.status(204).send();
//   } else {
//     res.status(404).json({ message: 'Food item not found' });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
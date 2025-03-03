

// const request = require('supertest');
// const app = require('../app');

// describe('Food API', () => {
//   it('should get all food items', async () => {
//     const res = await request(app).get('/api/food');
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toEqual([
//       { id: 1, name: 'Pizza', price: 100 },
//       { id: 2, name: 'Burger', price: 50 },
//       { id: 3, name: 'Pasta', price: 75 },
//     ]);
//   });

//   it('should get a single food item', async () => {
//     const res = await request(app).get('/api/food/1');
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toEqual({ id: 1, name: 'Pizza', price: 100 });
//   });

//   it('should return 404 if food item is not found', async () => {
//     const res = await request(app).get('/api/food/4');
//     expect(res.statusCode).toEqual(404);
//   });


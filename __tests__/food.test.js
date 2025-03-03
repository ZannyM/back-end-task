const request = require('supertest');
const app = require('../app');

describe('Food API', () => {
  it('should get all food items', async () => {
    const res = await request(app).get('/api/food');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([
      { id: 1, name: 'Pizza', price: 100 },
      { id: 2, name: 'Burger', price: 50 },
      { id: 3, name: 'Pasta', price: 75 },
    ]);
  });

  it('should get a single food item', async () => {
    const res = await request(app).get('/api/food/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ id: 1, name: 'Pizza', price: 100 });
  });

  it('should return 404 if food item is not found', async () => {
    const res = await request(app).get('/api/food/4');
    expect(res.statusCode).toEqual(404);
  });

  it('should create a new food item', async () => {
    const res = await request(app)
      .post('/api/food')
      .send({ name: 'Salad', price: 60 });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({ id: 4, name: 'Salad', price: 60 });
  });

  it('should update a food item', async () => {
    const res = await request(app)
      .put('/api/food/1')
      .send({ name: 'Super Pizza', price: 150 });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ id: 1, name: 'Super Pizza', price: 150 });
  });

  it('should delete a food item', async () => {
    const res = await request(app).delete('/api/food/1');
    expect(res.statusCode).toEqual(204);
  });
});
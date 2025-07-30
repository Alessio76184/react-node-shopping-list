// backend/tests/api.test.js
const request = require('supertest');
const app = require('../server'); // This works if server.js exports `app`

describe('API Tests', () => {
  describe('POST /login', () => {
    it('should login with valid credentials', async () => {
      const res = await request(app)
        .post('/login')
        .send({ username: 'admin', password: 'admin' });

      expect(res.statusCode).toEqual(200);
      expect(res.body.success).toBe(true);
    });

    it('should fail with invalid credentials', async () => {
      const res = await request(app)
        .post('/login')
        .send({ username: 'wrong', password: 'user' });

      expect(res.statusCode).toEqual(401);
      expect(res.body.success).toBe(false);
    });
  });

  describe('Shopping List CRUD', () => {
    let itemId;

    it('should GET all items', async () => {
      const res = await request(app).get('/items');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });

    it('should POST a new item', async () => {
      const res = await request(app)
        .post('/items')
        .send({ item: 'Eggs' });

      expect(res.statusCode).toBe(201);
      expect(res.body.item).toBe('Eggs');
      itemId = res.body.id;
    });

    it('should PUT update an item', async () => {
      const res = await request(app)
        .put(`/items/${itemId}`)
        .send({ item: 'Organic Eggs' });

      expect(res.statusCode).toBe(200);
      expect(res.body.item).toBe('Organic Eggs');
    });

    it('should DELETE an item', async () => {
      const res = await request(app).delete(`/items/${itemId}`);
      expect(res.statusCode).toBe(204);
    });
  });
});

const request = require('supertest');
const app = require('../src/index');

describe('GET /hello', () => {
    it('should return Hello, World!', async () => {
        const res = await request(app).get('/hello');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello, World!');
    });
});

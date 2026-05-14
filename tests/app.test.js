const request = require('supertest');
const app = require('../src/app.js');

describe('Taskify 核心路由测试', () => {
    test('首页应该能正常访问', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

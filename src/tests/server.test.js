const server = require('../../server');
var http = require('http');
const db = require('../models/db');

beforeAll(() => {
    db.initDB();
    if (!server.address()) {
        server.listen(3000);
    }
})

test("Test server creation", () => {
    expect(server).toBeDefined();
});

test("Test server start listening", () => {
    expect(server._connectionKey).toBeDefined();
});

afterAll(() => {
    server.close();
})
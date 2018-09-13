const server = require('../../server');
var http = require('http');
const db = require('../models/db');

beforeAll(() => {
    db.initDB();
    if (!server.address()) {
        server.listen(3000);
    }
})

describe("Test get asks", () => {
    test("by one amount", done => {
        http.get({ port: 3000, path: '/asks/search-by-amount?amount=0.63322053' }, (res) => {
            expect(res).toBeDefined();
            var rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                expect(rawData).toEqual("[[45300,0.63322053]]");
                done();
            });
        })
    });

    test("by more than one amount", done => {
        http.get({ port: 3000, path: '/asks/search-by-amount?amount=0.63322053&amount=0.5&amount=0.02213' }, (res) => {
            expect(res).toBeDefined();
            var rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                expect(rawData).toEqual("[[45300,0.63322053],[46499,0.5],[47000,0.02213],[47880,0.5],[49950,0.5],[59900.5,0.5],[65309.02,0.5],[70010,0.5],[76015,0.5]]");
                done();
            });
        })
    });

    test("order by price ascending", done => {
        http.get({ port: 3000, path: '/asks/search-by-amount?amount=0.63322053&amount=0.5&amount=0.02213&order=asc' }, (res) => {
            expect(res).toBeDefined();
            var rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                expect(rawData).toEqual("[[45300,0.63322053],[46499,0.5],[47000,0.02213],[47880,0.5],[49950,0.5],[59900.5,0.5],[65309.02,0.5],[70010,0.5],[76015,0.5]]");
                done();
            });
        })
    });

    test("order by price descending", done => {
        http.get({ port: 3000, path: '/asks/search-by-amount?amount=0.63322053&amount=0.5&amount=0.02213&order=desc' }, (res) => {
            expect(res).toBeDefined();
            var rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                expect(rawData).toEqual("[[76015,0.5],[70010,0.5],[65309.02,0.5],[59900.5,0.5],[49950,0.5],[47880,0.5],[47000,0.02213],[46499,0.5],[45300,0.63322053]]");
                done();
            });
        })
    });
});

afterAll(() => {
    server.close();
})
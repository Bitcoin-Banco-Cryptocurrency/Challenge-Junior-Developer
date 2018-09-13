const server = require('../../server');
var http = require('http');
const db = require('../models/db');

beforeAll(() => {
    db.initDB();
    if (!server.address()) {
        server.listen(3000);
    }
})

describe("Test get bids", () => {
    test("by one amount", done => {
        http.get({ port: 3000, path: '/bids/search-by-amount?amount=0.42444' }, (res) => {
            expect(res).toBeDefined();
            var rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                expect(rawData).toEqual("[[45000,0.42444]]");
                done();
            });
        })
    });

    test("by more than one amount", done => {
        http.get({ port: 3000, path: '/bids/search-by-amount?amount=0.42444&amount=0.15268&amount=5.67057' }, (res) => {
            expect(res).toBeDefined();
            var rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                expect(rawData).toEqual("[[44000,5.67057],[44200,0.15268],[45000,0.42444]]");
                done();
            });
        })
    });

    test("order by price ascending", done => {
        http.get({ port: 3000, path: '/bids/search-by-amount?amount=0.42444&amount=0.15268&amount=5.67057&order=asc' }, (res) => {
            expect(res).toBeDefined();
            var rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                expect(rawData).toEqual("[[44000,5.67057],[44200,0.15268],[45000,0.42444]]");
                done();
            });
        })
    });

    test("order by price descending", done => {
        http.get({ port: 3000, path: '/bids/search-by-amount?amount=0.42444&amount=0.15268&amount=5.67057&order=desc' }, (res) => {
            expect(res).toBeDefined();
            var rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                expect(rawData).toEqual("[[45000,0.42444],[44200,0.15268],[44000,5.67057]]");
                done();
            });
        })
    });
});

afterAll(() => {
    server.close();
})

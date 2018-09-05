## About the project
This is a RESTful API made in Node Express only to consume data. You can run the project and consume the API from the browser, Postman, etc.

## Running the project
Install Node 8 or higher. After installing it, run the following commands in terminal inside the project's root folder:
```
npm install # 1. install the dependencies
npm run start # 2. run the project
```
The project will run on port 5000.

## API Documentation
`asks` endpoint:
* to list `asks`
```
GET /api/offers/asks
```

`bids` endpoint:
* to list `bids`
```
GET /api/offers/bids
```

to filter data by `order_price` and/or `amount` in any endpoint:
```
GET /api/offers/asks?order_price=asc
GET /api/offers/bids?order_price=desc
GET /api/offers/asks?amount=0.5
GET /api/offers/bids?order_price=desc&amount=0.5
```

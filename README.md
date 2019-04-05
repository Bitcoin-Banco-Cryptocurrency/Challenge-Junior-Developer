

# OrderBook API

For this project, a simple API was developed to consult an orderbook. If desired the client can filter by ordering (ASC / DESC) and by amount or by amount list
___
### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes
___
### Prerequisites

``` java
- Windows Environment (not tested on Linux)
- Visual Studio Community 2019 (16.0.0)
- .NET Framework 4.7.2
- Postman
```
___
### How make project work ?
```java
1. Import/Clone project inside Visual Studio 2019.
2. Run project with F5 or click in "Run" button on the top of the IDE.
3. Wait open an page in your browser. (Keep open to project work !)
```
___
### How test ?
##### ● You can run in postman clicking here (with running project)
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/d1619df9925b886335ca)

**OR**
##### ● Access collection from this URL (with running project)
https://www.getpostman.com/collections/d1619df9925b886335ca

**OR**

##### ● Manual Test (with running project)
**Localhost basepath:  localhost:53376/**
>
    1) Get OrderBook without filter
        [POST] ~ api/orderbook


>
    2) Get OrderBook filtering by 1 amount
        [POST] ~ api/orderbook
            HEADERS: Content-Type: application/json
            DATA: [0.63322053]


>
    3) Get OrderBook filtering by N amount
        [POST] ~ api/orderbook
            HEADERS: Content-Type: application/json
            DATA: [0.63322053, 0.36389000, 1.16911000]


>
    4) Get OrderBook filtering by orderBy ASC
        [POST] ~ api/orderbook?orderBy=ASC


>
    5) Get OrderBook filtering by orderBy DESC
        [POST] ~ api/orderbook?orderBy=DESC

>
    6) Get OrderBook filtering by N amount & orderBy ASC
        [POST] ~ api/orderbook?orderBy=ASC]
            HEADERS: Content-Type: application/json
            DATA: [0.63322053, 0.36389000, 1.16911000]


> 
    7) Get OrderBook filtering by N amount & orderBy DESC
        [POST] ~ api/orderbook?orderBy=DESC
            HEADERS: Content-Type: application/json
            DATA: [0.63322053, 0.36389000, 1.16911000]

### C# Project - Main files worked
+ Data/OrderBook.json.
+ Model/Order.cs.
+ Model/OrdeBook.cs.
+ Model/OrderType.cs.
+ Model/ResponseObj.cs.
+ Controllers/OrderBookController.cs.
+ Operations/OrderBookOperations.cs.
+ Util/HttpResponseUtil.cs.

* Other files is for configuration of C# / .NET
### Contact
+ LinkedIn: https://www.linkedin.com/in/reenan-campos/.
+ Email: reenan.campos@gmail.com.



# Thanks for visit !


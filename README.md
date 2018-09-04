<p align="center">
  <a href="https://www.btc-banco.com">
      <img src="https://s3.amazonaws.com/assinaturas-de-emails/btc.png" alt="Grupo Bitcoin Banco"/>
  </a>
</p>

## Challenge for Developer

To run this API, follow the following instructions:

* You need Node v8 installed.
* There is no need to run `npm install` yet, because the project has *no dependencies*
* Run the command `npm start`
* The server should start on port configured by the enviroment variable `PORT`, or `8080`.

## Commands

The API has a two endpoints, `bids` and `asks`, and both only accepts the verb `GET`.

All parameters must be encoded in the URL, folowing the following schema:


## Bid 

### Path: `/bids`

Parameter|Value|Description
----|----|----
|bid| Array\<number\> | Filters only bids containing these ammounts
|sort| "asc" or "desc"| Orders by price

## Ask

### Path: `/asks`

Parameter|Value|Description
----|----|----
|ask| Array\<number\> | Filters only bids containing these ammounts
|Sort| "asc" or "desc"| Orders by price


## Examples:
* `http://localhost:8080/bids?bid=2.208832&bid=0.009&bid=0.16966000&sort=asc` - Searches all Bids with ammount equal to 2.208832 or 0.009 or 0.16966000
* `http://localhost:8080/asks?ask=2.208832&ask=0.009&ask=0.00107197&sort=desc` - The same as above, but searches Asks 

## Testing
* To test, run the command `npm install`
* Then run the command `npm test`

## Notes
* There are no dependencies to the project, therefore it is only using vanilla Node.js
* The test coverage is 100%
 
<p align="center">
  <a href="https://www.btc-banco.com">
      <img src="" alt="Coverage"/>
  </a>
</p>
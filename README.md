  <p align="center">
  <a href="https://www.btc-banco.com">
      <img src="https://s3.amazonaws.com/assinaturas-de-emails/btc.png" alt="Grupo Bitcoin Banco"/>
  </a>
</p>

## Challenge for Backend Developer

This project is a simple API to search offers

## Configurating and running

- Install node js v8.11.4 or above, you can find it <a href="https://nodejs.org/en/">here</a>
- To enable tests, run `npm install`
- To run the API, run `npm start`

## Endpoints

This API has two endpoints, one search for bids and the other search for asks

#### BIDS

  * **URL**

    /bids/search-by-amount?&amount&order

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `amount=[number]` (One or more)

   **Optional:**
 
   `order=[string]` ('asc' or 'desc', default is 'asc')


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** An array with the matches results

#### ASKS

  * **URL**

    /asks/search-by-amount?&amount&order

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `amount=[number]` (One or more)

   **Optional:**
 
   `order=[string]` ('asc' or 'desc', default is 'asc')


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** An array with the matches results

## Examples

  #### Asks 
  * `http://localhost:3000/asks/search-by-amount?amount=0.63322053&amount=0.5&order=asc`
    - Returns: "[[45300,0.63322053],[46499,0.5],[47880,0.5],[49950,0.5],[59900.5,0.5],[65309.02,0.5],[70010,0.5],[76015,0.5]]"

  * `http://localhost:3000/asks/search-by-amount?amount=0.63322053&amount=0.5&order=desc`
    - Returns: "[[76015,0.5],[70010,0.5],[65309.02,0.5],[59900.5,0.5],[49950,0.5],[47880,0.5],[46499,0.5],[45300,0.63322053]]"

  #### Bids
   * `http://localhost:3000/bids/search-by-amount?amount=0.63322053&amount=0.5`
     - Returns: "[[704,0.5],[37001,0.5]]"

  * `http://localhost:3000/bids/search-by-amount?amount=0.5&amount=0.42444000&order=asc`
    - Returns: "[[704,0.5],[37001,0.5],[45000,0.42444]]"
    

### Running tests

Run `npm test` to execute the tests via <a href="https://jestjs.io/">[Jest]</a>

- You can find the test files in src/tests



<p align="center">
  <a href="https://www.btc-banco.com">
      <img src="https://s3.amazonaws.com/assinaturas-de-emails/btc.png" alt="Grupo Bitcoin Banco"/>
  </a>
</p>

## Challenge for Backend Developer

A customer needs to search in our orderbook (available in this <a href="https://github.com/Bitcoin-Banco-Cryptocurrency/Challenge-OneDay/blob/master/OrderBook.json">JSON</a>) and he wants to buy offers below some price also sell offer offer to recieve some money.
Based on this you will need to develop:

- a simple API to search offers in the .json available;
- it should be possible to search for offer by their amount (one or more);
- it must be possible to order the result by price (asc and desc);

The test should be done in Ruby, Go, Python or Node and we do like if you avoid frameworks. We expect at the end of the test, outside the API running, the following items:

- an explanation of what is needed to make your project work;
- an explanation of how to perform the tests;

Remember that at the time of the evaluation we will look at:

- Code organization;
- Object-Oriented Principles;
- Maintenance;

To send us your code, you must:

Make a fork of this repository, and send us a pull-request.

-------------------------------------------------------------- INSTRUCTIONS -----------------------------------------------

INTRODUÇÃO:

- O Projeto utiliza conceitos de Orientação a Objeto e boas práticas através de SOLID.
- Linguagem Utilizada: PHP 7.1
- Framework Utilizado: Lumen 1.0.2

UTILIZAÇÃO:

- Para rodar o projeto em sua máquina, deverá instalar o PHP 7.1.* e o Framework Lumen 1.0.*
- O comando para utilizar os recursos é: <b> php -S localhost:8000 -t public </b> 
- As rotas do projetos estão em: /routes/web.php

EXEMPLO DE UTILIZAÇÃO:

- Pesquisa de quantidade para quem está vendendo: <b> http://localhost:8000/api/Ask/GetAmount?Amount=1&OrderBy=desc ou asc </b>
- Pesquisa de quantidade para quem está comprando: <b> http://localhost:8000/api/Bid/GetAmount?Amount=1&OrderBy=asc ou desc </b>
- Pesquisa de ordem no preço de quem está vendendo: <b> http://localhost:8000/api/Ask/GetPrice?Price=45000&OrderBy=desc </b
- Pesquisa de ordem no preço de quem está comprando: <b> http://localhost:8000/api/Bid/GetPrice?Price=45000&OrderBy=asc </b>

CONTATO:
Autor : Lucas Pires
Email : lucasrp.lp@gmail.com 
Tel   : (41) 99569-0719

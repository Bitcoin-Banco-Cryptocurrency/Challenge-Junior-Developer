# WebApi
Challenge-Junior-Developer

#Definições do projeto

Projeto desenvolvido em asp.net core + entityFramework

Padrão utilizado Repository Pattern :

Para isolar as camadas de acesso(com isso fica mais fácil realizar o teste) e não duplicar a logica no código.

#Armazenamento do objeto

Neste projeto foi usado o SQL server como forma de armazenamento de dados, para realizar o teste é necessario uma string de conexão de uma base com uma tabela com o mesmo nome do DbSet indicado na classe OrderDbContext.cs linha 10

#Passo a passo para executar

1.Iniciando aplicação 

  dotnet run

#Passo a passo para testar as requisições no Browser

1.Pesquisar por todos os elementos
https://localhost:5001/api/orders/Getall

2.Pesquisar um ou mais elemento por Id:

Obs: para requisitar mais de um id, é necessario colocar o caracter '+' entre os ids

2.1 Somente 1 id

Nesse caso foi pesquisado o id 1

https://localhost:5001/api/orders/GetOrders/1 

2.1 Multiplos ids

No seguinte caso retorna os elementos com ids {1,2,5,6}

https://localhost:5001/api/orders/GetOrders/1+2+5+6 

3.Pesquisar por ordem de preço

3.1 Ordem Decrescente

https://localhost:5001/api/orders/Getalldesc

3.2 Por Ordem Crescente

https://localhost:5001/api/orders/Getallasc

<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group(['prefix' => 'api'], function () use ($router) {	

	// FORÇANDO USUÁRIO A DIGITAR CORRETAMENTE AS ROTAS DE BIDS E ASKS

	$router->group(['prefix' => 'Bid'], function () use ($router) {	
  		$router->get('GetAmount',  ['uses' => 'BidController@getAmount']);
  		$router->get('GetPrice',   ['uses' => 'BidController@getPrice']);
	});

	$router->group(['prefix' => 'Ask'], function () use ($router) {	
  		$router->get('GetAmount',  ['uses' => 'AskController@getAmount']);
  		$router->get('GetPrice',   ['uses' => 'AskController@getPrice']);
	});
});

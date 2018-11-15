<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\ServiceBook;
use App\Http\Services\IServiceBook;
use App\Http\Classes\Ask;
use App\Traits\ApiResponser;

class BidController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    use ApiResponser;

    private $serviceBook;

    public function __construct(Request $request) {

    	// CONSTRUINDO UMA INTERFACE PARA ENCAPSULAR OS MÉTODOS DE BUSCA POR ORDENS, PASSANDO COMO PARAMETRO O TIPO DE 
        // ORDEM DESEJADA.
        // NO CASO ESTOU PASSANDO A CLASSE ASK, POIS QUEM ESTÁ VENDENDO DEVERÁ EXECUTAR ORDENS DE VENDA (ASKS)

        app()->bind('IOrder', function () {
            return new IServiceBook(new Ask);
        });
        $this->serviceBook = new ServiceBook(app()->make('IOrder'), $request);
    }

    public function getAmount(Request $request)
    {
        // VALIDANDO CAMPOS E VALORES

    	$this->validate($request, [
	        'Amount'  => 'required|numeric|min:1',
            'OrderBy' => 'required|min:3'
		]);

        return $this->successResponse($this->serviceBook->getAmount($request),200);
    } 

    public function getPrice(Request $request)
    {
        // VALIDANDO CAMPOS E VALORES

    	$this->validate($request, [
	        'Price'   => 'required|numeric|min:1',
	        'OrderBy' => 'required|min:3'
		]);

        return $this->successResponse($this->serviceBook->getPrice($request),200);
    }

}

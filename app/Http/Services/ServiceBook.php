<?php

namespace App\Http\Services;

use App\Http\Classes\Contract\IOrder;

class ServiceBook {

	private $orderType;

	public function __construct(IOrder $iOrder, $request) {
		$this->orderType = $iOrder;
		$this->orderType->orderBy($request['OrderBy']);
	}

	public function getAmount($request) {
		return $this->orderType->getByAmount($request['Amount']);
	}

	public function getPrice($request) {
		return $this->orderType->getByPrice($request['Price']);
	} 

}
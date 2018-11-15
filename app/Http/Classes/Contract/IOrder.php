<?php

namespace App\Http\Classes\Contract;


interface IOrder {

	public function getByAmount($amount);
	public function getByPrice($price);

}
<?php

namespace App\Http\Services;

use App\Http\Classes\Contract\IOrder;

class IServiceBook implements IOrder{

	// ESTE OBJETO IMPLEMENTA MÉTODOS EM COMUM EM ABOS OS TIPOS DE ORDEM, E RECEBE COMO PARAMETRO A CLASSE
	// DO TIPO DE ORDEM ESCOLHIDA

	private $book;

	public function __construct($class) {
		$this->book = $class->book;
	}

	public function orderBy($orderBy) {
		$orders = array();

		foreach ($this->book as $key => $row) {
			$orders[$key] = [$row[0], $row[1]];
		}

		if ($orderBy == "asc")
			array_multisort($orders, SORT_ASC, $this->book);
		else
			array_multisort($orders, SORT_DESC, $this->book);

		$this->book = $orders;
	}

	public function getByAmount($amount) {
		$executeds = [];
		$amount    = number_format($amount,8);

		foreach ($this->book as $order) {
			if ($amount > 0) {
				if ($order[1] <= $amount) {
					$amount = bcsub($amount, $order[1], 8);
					array_push($executeds, $order);
				} else {
					$order[1] = $amount;
					$amount = 0;
					array_push($executeds, $order);
				}
			}
		}

		return $executeds;
	}

	public function getByPrice($price) {
		$executed = [];

		foreach ($this->book as $order) {
			if ($order[0] == $price) { 
				array_push($executed, $order);
			} 
		}
		return $executed;
	}
}
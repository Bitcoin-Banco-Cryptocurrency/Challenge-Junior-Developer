<?php

namespace App\Http\Classes;

class Ask {

	public $book;

	public function __construct() 
	{
		$json          = json_decode(file_get_contents(base_path().'/OrderBook.json'), true);
		$this->book    = $json['asks'];
	}
}
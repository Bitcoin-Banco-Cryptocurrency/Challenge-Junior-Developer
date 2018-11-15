<?php

namespace App\Traits;
use Illuminate\Http\Exceptions\HttpResponseException;

trait ApiResponser {

	protected function successResponse($Message, $Code){
		return response()->json(['data'=>$Message, 'code'=> $Code], $Code);
	}

	protected function errorResponse($Message, $Code){
		return response()->json(['error'=>$Message, 'code'=>$Code], $Code);
	}

	protected function httpexception($mensagem, $code = 422){
		throw new HttpResponseException($this->errorResponse($mensagem,$code));
	}
}
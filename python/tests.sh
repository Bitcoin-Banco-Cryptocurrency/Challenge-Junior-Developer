#!/bin/sh

# test 1

TEST1=`curl -X GET 'http://localhost:8000?search=0.50000000&order=desc' --header 'Content-Type: application/json' --header 'Accept: application/json'`

RESPONSE1='{"asks": [[76015.0, 0.5], [70010.0, 0.5], [65309.02, 0.5], [59900.5, 0.5], [49950.0, 0.5], [47880.0, 0.5], [46499.0, 0.5]]}'

if [ "$TEST1" = "$RESPONSE1" ]; then
	echo "Test 1 aproved !"
else
	echo "Test 1 error !"
fi

# test 2

TEST2=`curl -X GET 'http://localhost:8000?search=0.02' --header 'Content-Type: application/json' --header 'Accept: application/json'`

RESPONSE2='{"asks": [[58932.0, 0.02], [62357.0, 0.02], [64998.67, 0.02], [66830.13, 0.02], [67259.0, 0.02], [68890.1, 0.02], [68891.0, 0.02], [69780.0, 0.02]]}'

if [ "$TEST2" = "$RESPONSE2" ]; then
	echo "Test 2 aproved !"
else
	echo "Test 2 error !"
fi

# test 3

TEST3=`curl -X GET 'http://localhost:8000?search=0.99999999' --header 'Content-Type: application/json' --header 'Accept: application/json'`

RESPONSE3='{"asks": []}'

if [ "$TEST3" = "$RESPONSE3" ]; then
	echo "Test 3 aproved !"
else
	echo "Test 3 error !"
fi
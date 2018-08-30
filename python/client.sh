#!/bin/sh

curl -X GET \
    'http://localhost:8000?search=0.50000000&order=desc' \
        --header 'Content-Type: application/json' \
            --header 'Accept: application/json' | python -m json.tool
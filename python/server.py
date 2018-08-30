#!/usr/bin/env python

"""
    Server file API
    @author Feijó
    @created_at 29/08/2018
"""

import json
import urllib

from http.server import BaseHTTPRequestHandler, HTTPServer
 
class HTTPServer_RequestHandler(BaseHTTPRequestHandler):
    """
        Class http server handler basead simple request
    """
 
    def do_GET(self):
        """
            Method do GET request
        """

        # get params url send
        params = urllib.parse.parse_qs(self.path[2:])

        # open file json asks
        with open('OrderBook.json', 'r') as f:
            dict_file = json.load(f)

        list_asks = dict_file.get('asks', [])

        # case exists in params search, filter
        if params.get('search'):
            list_asks = [x for x in list_asks if x[1] == float(params.get('search', [''])[0])]

        # case exists in params order, ordering
        if params.get('order'):
            list_asks = sorted(list_asks, reverse=params.get('order', [''])[0] == 'desc')

        result = {'asks': list_asks}

        # Send headers
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

        # Write content as utf-8 data
        self.wfile.write(json.dumps(result).encode())
        return

# Server settings
# Choose port 8000, which is normally used for a http server, you need root access
server_address = ('127.0.0.1', 8000)

httpd = HTTPServer(server_address, HTTPServer_RequestHandler)

print('running server...')

try:
    httpd.serve_forever()
except KeyboardInterrupt as interrupt:
    pass

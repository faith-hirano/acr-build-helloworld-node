var http = require('http')

var port = 80

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('Hello World 2018/08/23 16:38\n')
  response.end('Version: ' + process.env.NODE_VERSION + '\n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)

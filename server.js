var Hapi = require('hapi');

var server = new Hapi.Server();
var port = process.env.PORT || 3000;

server.connection({ port: port });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
    	reply.file('./app/index.html')
    }
});

server.route({
  method : "GET",
  path :  "/{param*}",
  handler :  {
    directory: {
      path: "./app",
      listing: false,
      index: false
    }
  }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});	
/* Establecemos la configuracion ya vista para un server en node.js */
var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var io      = require('socket.io').listen(server);

var cons = require('consolidate');

server.listen(3000);

app.engine('.html', cons.jade);
app.set('view engine', 'html');

app.use(express.static('./public'));

app.get('/', function (req, res) {
	res.render('index',{
		titulo : 'Applicacion Grip'
	});
});

/* Establecemos la funcion que hara la coneccion son los sockets */
var connection = function(socket){
	/* mostramos en consola un mensaje hola */
	console.log('hola');
	/* Cuando el socket este prendido y halla una accion pintar ejecute una funcion que recibira data */
	socket.on('pintar', function(data){
		/* tenemos un socket que emitira pintar y el data */
		socket.broadcast.emit('pintar', data);
	})
}
/* cuando establesca coneccion con el socket debemos ejecutar la funcion conecction */
io.sockets.on('connection', connection)

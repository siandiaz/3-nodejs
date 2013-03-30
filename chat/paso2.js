var express = require('express');
var app = express();
var mensajes = [];

app.get('/', function (req, res) {
	res.send('Hello world');
});

app.get('/mensajes/new/:mensaje', function(req, res){
	mensajes.push(req.params.mensaje);
	res.send('Tu mensaje es ' + req.params.mensaje);
});

app.get('/mensajes/list', function(req, res){
	res.send(mensajes + '<script>setTimeout(function(){window.location.reload()},1000)</script>');
});

app.listen(3000);
console.log('Aplicacion funcionando');
var onReady = function () {
	/* creamos un grid con el constructor Grid() */
	var grid = new Grid();
	/* renderizamos el grid en elemento #grid */
	grid.render( $('#grid') );
	/* establecemos una coneccion al socket por parte del cliente */
	window.client = io.connect(window.location.href);
	/* cunado el cliente este on y ejecute la accion pintar(en este caso de un click) haremos la funcion que recibira data */
	client.on('pintar', function(data){
		/* pintara segun los parametros y x y el color */
		grid.pintar(data.x, data.y, data.color);
	});
}

$(document).on('ready', onReady)
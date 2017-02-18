$(document).ready(function(){
//inicializa el Scketch Path

	for(var i = 0; i < 144; i++){
			$('.scketch-body').append('<div class="inner"></div>');
		}

	$('.inner').css({'width': 798/12, 'height': 798/12})

	function colorear(pintura){
		$('.inner').on('mouseenter', function(){
			$(this).css({'background-color': pintura, 'background-image': '', 'border-color': pintura});
		});
	}

	function fondo (imagen) {
		$('.inner').on('mouseenter', function () {
			$(this).css({'background-image': imagen, 'background-size': 'cover'})
		})
	}


	colorear('black');

	$('#reset').on('click', function(){
		$('.inner').remove();
		var cuadros = prompt('numero de cuadros');
				ancho = 798/cuadros;
				color = 'black';
		

		for(var i = 0; i < cuadros*cuadros; i++){
			$('.scketch-body').append('<div class="inner"></div>');
		}
		$('.inner').css({'width': ancho, 'height': ancho})
		$('.scketch-body').css('background-color', 'white');
		$('.scketch-body').css('background-image', '');
		colorear('black');
	});

	

	$('#black').on('click', function(){
		colorear('black');
	});

	$('#red').on('click', function(){
		colorear('red');
	});

	$('#green').on('click', function(){
		colorear('green');
	});

	$('#blue').on('click', function(){
		colorear('blue');
	});

	$('#odin').on('click', function(){
		fondo('url(img/odin.jpg)')
	});

	$('#discurpa').on('click', function(){
		fondo('url(img/discurpa.jpg)')		
	});

	$('#atilio').on('click', function(){
		$('.inner').on('mouseenter', function(){
			var arcoiris = Math.floor(Math.random()*6);
			var colores = ['white', 'red', 'green', 'blue', 'yellow', 'orange', 'purple']
			colorear(colores[arcoiris])
		})
	})
});
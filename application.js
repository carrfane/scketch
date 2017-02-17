$(document).ready(function(){
//inicializa el Scketch Path
	var color = 'black'

	for(var i = 0; i < 144; i++){
			$('.scketch-body').append('<div class="inner"></div>');
		}

	$('.inner').css({'width': 798/12, 'height': 798/12})

	function colorear(){
		$('.inner').on('mouseenter', function(){
			$(this).css({'background-color': color, 'background-image': ''});
		});
	}

	colorear();

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
		colorear();
	});

	

	$('#black').on('click', function(){
		color = 'black';
		colorear();
	});

	$('#red').on('click', function(){
		color = 'red';
		colorear();
	});

	$('#green').on('click', function(){
		color = 'green';
		colorear();
	});

	$('#blue').on('click', function(){
		color = 'blue';
		colorear();
	});

	$('#odin').on('click', function(){
		$('.inner').on('mouseenter', function(){
			$(this).css({'background-image': 'url(img/odin.jpg)', 'background-size': 'cover'});
		})
	});
});

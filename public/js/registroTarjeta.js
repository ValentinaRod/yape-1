$(document).ready(function(){
	
	$("#boton_continuar").attr('disabled', 'true');

	var tarjeta;
	var contador = 16;
	var mes, anio;
	var continuar1, continuar2, continuar3;


//validacion de tarjeta
	$(".numeroTj").on("keyup", function(){
		tarjeta = $(this).val(); //tomo el valor
		if(tarjeta.length >= 16){ // si el largo del valor es mayor a 16 es 
			$(".numeroTj").val($(".numeroTj").val().substring(0,contador));
			continuar1 = true;
		}
		else{
			$("#boton_continuar").attr('disabled', 'true');
			$("#boton_continuar").css("background", "buttonface");
			var miTarjeta = localStorage.setItem("tarjeta", $(".numeroTj").val());
			return continuar1 = false;


		}
		validation();
		console.log(tarjeta.length)
	})

	//validación de mes
	$(".mes").on("keyup", function(){
			validation();
			mes = $(this).val();
			if(mes > 12){
				$("#boton_continuar").attr('disabled', 'true');
				$("#boton_continuar").css("background", "buttonface");
				$(this).val("");
				$(this).css("border-bottom", "1px solid red")
				$(this).css("box-shadow", "none");
				continuar2 = false
				validation();
			}
			else if(mes < 13){
				continuar2 = true
				validation();
			}
			return continuar2;

	})

	//validación de año
	$(".año").on("keyup", function(){
		
		anio = $(this).val();
		validation();
		if(anio.length > 1){
			if(anio< 17 || anio > 24){
				$("#boton_continuar").attr('disabled', 'true');
				$("#boton_continuar").css("background", "buttonface");
				$(this).val("");
				$(this).css("border-bottom", "1px solid red");
				$(this).css("box-shadow", "none");
				continuar3 = false
			}
			else{
				continuar3 = true;
				validation();
			}
		}
		return continuar3
	});

function validation(){
	if(continuar1 == true && continuar2 == true && continuar3 == true  ){
		$("#boton_continuar").removeAttr('disabled');
		$("#boton_continuar").css("background", "#00c3a3");

	}
	console.log(continuar1, continuar2, continuar3)
}
$("#boton_continuar").click(function(){
		$("#continuar-P6").css({
			position: 'fixed',
			top: '0'
		});
		$("#continuar-P6").addClass("slideInUp");


		console.log(localStorage.getItem("tarjeta"));
		console.log(continuar1, continuar2, continuar3)
	})

	/*$(".año").click(function(){
		$("#boton_continuar").removeAttr('disabled')
	})

	$("#boton_continuar").click(function(){
		alert("hola")
	})*/


})
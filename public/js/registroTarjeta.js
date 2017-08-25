$(document).ready(function(){
	
	$("#boton_continuar").attr('disabled', 'true');

	var tarjeta;
	var contador = 16;
	var mes, anio;
	var continuar1, continuar2, continuar3;


	//validacion de tarjeta
	$(".numeroTj").on("keyup", function(){
		tarjeta = $(this).val(); //tomo el valor
		if(tarjeta.length == 16){
			continuar1 = true;
		}
		else if(tarjeta.length > 16){ // si el largo del valor es mayor a 16 es 
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
			localStorage.setItem("mes", mes);
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
				localStorage.setItem("anio", anio);
				validation();

			}
		}
		return continuar3
	});
	//validación de clave
	$(".clave_tarjeta").on("keyup", function(){
		validation();
		clave = $(this).val();
		if(clave.length > 4){
			$("#boton_continuar").attr('disabled', 'true');
			$("#boton_continuar").css("background", "buttonface");
			$(this).val("");
			$(this).css("border-bottom", "1px solid red")
			$(this).css("box-shadow", "none");
			continuar2 = false
			validation();
		}
		else if(clave.length == 4){
			continuar2 = true
			validation();
			localStorage.setItem("clave", clave);
			$(".siguiente").removeAttr('disabled');
			$(".siguiente").css("background", "#00c3a3");
		}
	})

	//función de validación de datos
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
			top: '0',
			'z-index': '2'
		});
		$(".nro_Tarjeta").html("**** " + localStorage.getItem("tarjeta").substring(11))

		
		$("#continuar-P6").addClass("slideInUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
			$("#continuar-P6").removeClass('slideOutDown')
		);;
		$(".fa-angle-left").click(function(){
			$("#continuar-P6").addClass("slideOutDown").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
			$("#continuar-P6").removeClass('slideInUp'));;
			$("#continuar-P6").css({
				position: 'fixed',
				top: '0',
				'z-index': '0'
			});
		});
	});

	$(".siguiente").click(function(){
		var phoneNumber = localStorage.getItem("telefonoYape");
		$.ajax({
		    url: '/api/registerCard',
		    type: 'POST',
		    data: {
		        'userId': phoneNumber,
		        'cardNumber': localStorage.getItem("tarjeta"),
		        'cardMonth': localStorage.getItem("mes"),
		        'cardYear': localStorage.getItem("anio"),
		        'cardPassword': localStorage.getItem("clave")
		    },
		})
		.done(function(res) {
		    console.log("success");
		    console.log(res);
		    $(".siguiente_index").attr('href', 'index-pantalla7.html');

		    console.log(localStorage)

		})
		.fail(function() {
		    console.log("error");
		})
		.always(function() {
		    console.log("complete");
		});
	});
});
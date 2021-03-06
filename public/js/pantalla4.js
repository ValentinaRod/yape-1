$(document).ready(function() {
    var number = localStorage.getItem("telefonoYape"); //este local esta conectado con el de la pantalla 2.
    //solo letras numeros @ y . en el input
    $(document).on('keypress', '#email', function (event) {
        var regex = new RegExp("^[a-z0-9@.]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });
    //Solo numeros y máximo 6 caracteres en el input
    $(document).on('keypress', '#password', function (event) {
        var regex = new RegExp("^[0-6]{1,6}$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });
    $("#btn_waves").on("click", function(e){
        var email = $("#email").val();
        var password = $("#password").val();
        var nombre = $(".nombre-usuario").val();
        if( email == "" || password == "" ){
            alert("No puede ingresar un campo vacío")
        }
        if( email.indexOf('@') == -1){
            alert("Ingrese un correo válido");
        }
        if( password.length > 6 ){
            alert("Su contraseña debe ser máximo 6 caracteres.");
            e.preventDefault();
        }
        if( password != "" && email.indexOf('@') != -1 && nombre != ""){
            localStorage.setItem("email", email);
            
            $.ajax({
            url: '/api/createUser',
            type: 'POST',
            data: {
                'phone': number,
                'name': nombre,
                'email': email,
                'password': password
            },
            })
            .done(function(res) {
                console.log("success");
                console.log(res);
                registro(res);
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
        } else {
            e.preventDefault();
        }
        
        
    
        function registro(res){
            
        }
        });//cierre boton crear cuenta.
}); //cierre document.ready.
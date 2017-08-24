$(document).ready(function() {



//funcionalidad pantalla3
    $(".btn-codigo").addClass('disabled');
    $(".btn-codigo").attr('disabled', 'disabled');
    var codigo = localStorage.getItem("codigoYape");
    var telefono = localStorage.getItem("telefonoYape");
    alert("Tu código es: " + codigo);
    validCode(codigo);
    //aquí validar que el numero ingresado por usuario sea igual a var codigo
 
        function valide(){ 
            
            $.ajax({
            url: '/api/resendCode',
            type: 'POST',
            data: {
                'phone': telefono
            },
            })
            .done(function(res) {
                console.log("success");
                console.log(res);
                validCode(res.data);
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
        }setInterval(valide, 10000);
    
    function validCode(res){
        //alert(res);
        //aquí mandar de nuevo un alert con el código nuevo y que lo valide
        alert("Se acabó el tiempo! \n Tu nuevo código es: " + res);
        
        $(".input-codigo").on("keyup", function(){
            var codeYape = $(".input-codigo").val();
            if(codeYape == res){
                $(".btn-codigo").removeClass('disabled');
                $(".btn-codigo").removeAttr('disabled', 'disabled');
            }else{
                $(".btn-codigo").addClass('disabled');
                $(".btn-codigo").attr('disabled', 'disabled');
            }
        })
    }

//fin funcionalidad pantalla3

});
$(document).ready(function() {
 
	$("#btn-continuar").prop("disabled", true);  
	$("#btn-continuar").addClass('disabled');

	$("#filled-in-box").on("click", function(){
		$("#btn-continuar").prop("disabled", false);  
			var number = $("#icon_telephone").val();
			if(number.length > 4){
				$("#filled-in-box").attr('checked', "checked");
				$("#btn-continuar").removeAttr("disabled");
				$("#btn-continuar").removeClass('disabled');
			}
		
	});

	//trabajando en otra alternativa
	
/*	$("#btn-continuar").attr('disabled', 'disabled');
	$("#btn-continuar").addClass('disabled');

	$("#icon_telephone").on("focus", function(){
		
		$("#icon_telephone").unbind('keyup change input paste').bind('keyup change input paste',function(e){
		    var $this = $(this);
		    var val = $this.val();
		    var valLength = val.length;
		    var maxCount = 4;
		    if(valLength>maxCount ){
		    	$this.val($this.val().substring(0,maxCount));
		    	if( $('#filled-in-box').is(':checked')){

			        $("#btn-continuar").removeAttr('disabled');
			        $("#btn-continuar").removeClass('disabled');
			        $("#btn-continuar").focus();
			        $("#filled-in-box").attr('checked', "checked");
		    	}
		        
		        
		    }
		});
	
});*/

/*$("#icon_telephone").validate({
        
        rules: {
            phone: {
                required: true,
                minlength: 5
            }
        },
        submitHandler: function(form) { // <- pass 'form' argument in
            $("#btn-continuar").attr("disabled", true);
            form.submit(); // <- use 'form' argument here.
        }
    });*/

});
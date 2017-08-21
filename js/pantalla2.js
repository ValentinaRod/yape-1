$(document).ready(function() {

	$("#btn-continuar").addClass('disabled');
	$("#filled-in-box").attr('disabled', 'disabled');

	$("#filled-in-box").on("click", function(){
		$("#filled-in-box").attr('checked', "checked");
		$("#btn-continuar").removeClass('disabled');
		$("#btn-continuar").focus();
	});

	$(".phone-number").on("focus", function(){
		$(".phone-number").unbind('keyup change input paste').bind('keyup change input paste',function(e){
		    var $this = $(this);
		    var val = $this.val();
		    var valLength = val.length;
		    var maxCount = 8;
		    if(valLength>maxCount ){
		    	$this.val($this.val().substring(0,maxCount));
				$("#filled-in-box").removeAttr('disabled');   
		    }
		});
	});

});
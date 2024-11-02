$(document).ready(function() {

	'use strict';

	$('#contactForm').submit(function(e) {
		e.preventDefault(); // Prevent default form submission
		console.log("#contactForm submit");
		console.log( $(form).serialize() );
	});


	// Form
	/* var contactForm = function() {
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					xname: "required",
					xemail: {
						required: true,
						email: true
					},
					xmessage: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "nome é obrigatório",
					email: "nome é obrigatório",
					message: "mensagem é obrigatória"
				},
				// submit via ajax 
				submitHandler: function(form) {		
					var $submit = $('.submitting'),
						waitText = 'A enviar...';

					$.ajax({   	
				      type: "POST",
				      url: "https://www2.cloudpro.pt/contactform.php",
				      data: $(form).serialize(),

				      beforeSend: function() { 
				      	$submit.css('display', 'block').text(waitText);
				      },
				      success: function(msg) {
						console.log(msg);
		               if (msg == 'OK') {
		               	$('#form-message-warning').hide();
				            setTimeout(function(){
		               		$('#contactForm').fadeOut();
		               	}, 1000);
				            setTimeout(function(){
				               $('#form-message-success').fadeIn();   
		               	}, 1400);
			               
			            } else {
			               $('#form-message-warning').html(msg);
				            $('#form-message-warning').fadeIn();
				            $submit.css('display', 'none');
			            }
				      },
				      error: function() {
				      	$('#form-message-warning').html("Mensagem não enviada.");
				         $('#form-message-warning').fadeIn();
				         $submit.css('display', 'none');
				      }
			      });    		
		  		}
				
			} );
		}
	};
	// contactForm();
	*/


	console.log("ready");
});
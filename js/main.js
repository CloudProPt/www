$(document).ready(function() {

	'use strict';

	$("#contactForm").on("submit", function(event) {
        event.preventDefault(); // Evita o comportamento padrão de envio
    });

	function contactForm_submit(form){
		console.log("#contactForm submit");
		//console.log( $("#contactForm").serialize() );

		var submit = $('.submitting');
		var waitText = 'A enviar...';

		$.ajax({   	
			type: "POST",
			url: "https://www2.cloudpro.pt/contactform.php",
			data: $("#contactForm").serialize(),

			beforeSend: function() { 
				submit.css('display', 'block').text(waitText);
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
					submit.css('display', 'none');
				}
			},
			error: function() {
				$('#form-message-warning').html("Mensagem não enviada.");
				$('#form-message-warning').fadeIn();
				submit.css('display', 'none');
			}
		});    		
	};

	$( "#contactForm" ).validate( {
		rules: {
			name: "required",
			email: {
				required: true,
				email: true
			},
			message: {
				required: true,
				minlength: 5
			}
		},
		messages: {
			name: "nome é obrigatório",
			email: "email é obrigatório ou está incorrecto",
			message: "mensagem é obrigatória"
		},
		submitHandler:  function(form) {	
			contactForm_submit(form);
		}
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
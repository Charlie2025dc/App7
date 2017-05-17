// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		
		$('#izquierda').on("swipeleft",function(){			
			navigator.notification.alert("¡Ha deslizado a la izquierda!",function(){"Aplicacion7", "Aceptar"});
		});		
	$('#izquierda').on("swiperight",function(){
		navigator.notification.confirm("¿Qué desea hacer?",function(opt) {
			switch(opt)
			{ 
			  case 1:
			  navigator.notification.beep(1);
			  break;
			  
			  case 2:
			  navigator.notification.vibrate(1000);
			   break;
			}
		},"Applicacion7","Beep,Vibrar,Cancelar");
	
});
	},false);
	});
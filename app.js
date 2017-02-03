$(document).ready(function() {
    // Thibault start

    $(".btnFlexFlow").click(function(){
                var outils = $(this).attr("id");
                console.log(outils);
                if(outils === "containercolrev"){
                    $("#TestFlexFlow").css('flex-direction', 'column-reverse');
                    if(!($("#activeFF").is(':checked'))){
                        $("#TestFlexFlow").css('flex-wrap', '');
                    }
                }else if(outils === "containercol"){
                    $("#TestFlexFlow").css('flex-direction', 'column');
                    if(!($("#activeFF").is(':checked'))){
                        $("#TestFlexFlow").css('flex-wrap', '');
                    }
                }else if(outils === "row"){
                    $("#TestFlexFlow").css('flex-direction', 'row');
                    if(!($("#activeFF").is(':checked'))){
                        $("#TestFlexFlow").css('flex-wrap', '');
                    }
                }else if(outils === "row-reverse"){
                    if(!($("#activeFF").is(':checked'))){
                        $("#TestFlexFlow").css('flex-wrap', '');
                    }
                    $("#TestFlexFlow").css('flex-direction', 'row-reverse');
                    if(!($("#activeFF").is(':checked'))){
                        $("#TestFlexFlow").css('flex-wrap', '');
                    }
                }else if(outils === "wrap"){
                    if(!($("#activeFF").is(':checked'))){
                        $("#TestFlexFlow").css('flex-direction', '');
                    }
                    $("#TestFlexFlow").css('flex-wrap', 'wrap');
                    if(!($("#activeFF").is(':checked'))){
                        $("#TestFlexFlow").css('flex-direction', '');
                    }
                }else if(outils === "wraprev"){
                    $("#TestFlexFlow").css('flex-wrap', 'wrap-reverse');
                    if(!($("#activeFF").is(':checked'))){
                        $("#TestFlexFlow").css('flex-direction', '');
                    }
                }else if(outils === "nowrap"){
                    $("#TestFlexFlow").css('flex-wrap', 'nowrap');
                    if(!($("#activeFF").is(':checked'))){
                        $("#TestFlexFlow").css('flex-direction', '');
                    }
                }

            });



// Thibault end
	// Cyril début, btn fonctionel pour le grow le shrink et basis
	$(".btnFlex").click(function(){
		var inp;
		var outils = $(this).attr("id");
		if(outils == "grow"){
			inp = $('#growinp').val();
            $("#groshrbas2").css('flex-grow', inp);
		}else if(outils === "basis"){
			inp = $('#basisinp').val();
    		$("#groshrbas2").css('flex-basis', inp);
		} else if(outils === "shrink"){
			inp = $('#shrinkinp').val();
            $("#groshrbas3").css('flex-shrink', inp);
		}
	});
// 	// Cyril Fin.
//
});

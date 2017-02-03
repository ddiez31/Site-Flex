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
	// Cyril début, btn fonctionel pour le grow
	$(".inpgrowshrink").change(function(e){
            var inp;
            var outils = $(this).attr("id");
            if(outils == "grow"){
               inp = $('#growinp').val();
               $("#grobas2").css('flex-grow', inp);
           }else if(outils === "basis"){
               inp = $('#basisinp').val();
               $("#grobas3").css('flex-basis', inp);
           } else if(outils === "shrink"){
               inp = $('#shrinkinp').val();
               $("#shr2").css('flex-shrink', inp);
           }
   });
	// Cyril Fin.


    //cyril et julien mettre des couleurs sur les ellements
    var colorarray = ["blue","red","green","white","orange","yellow","purple", "lime", "Olive", "DeepPink", "GreenYellow", "MediumPurple", "OrangeRed", "Pink", "MidnightBlue", "MediumSpringGreen", "PapayaWhip", "PeachPuff", "LawnGreen", "Gold", "Fuchsia", "DarkMagenta", "Crimson"]
    var prevrand = 8;
    $('.element').each(function(){
        var rand = Math.floor(Math.random()*colorarray.length);
        if(rand === prevrand){
            console.log(rand)
            while(rand === prevrand){
                rand = Math.floor(Math.random()*colorarray.length);
            }
        }
        $(this).css("background-color", colorarray[rand]);
        prevrand = rand;
    })
    //cyril et julien fin
});

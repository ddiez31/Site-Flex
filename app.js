$(document).ready(function() {
    // Thibault start

    $(".btnFlexFlow").click(function() {
        var outils = $(this).attr("id");
        console.log(outils);
        if (outils === "containercolrev") {
            $("#TestFlexFlow").css('flex-direction', 'column-reverse');
            if (!($("#activeFF").is(':checked'))) {
                $("#TestFlexFlow").css('flex-wrap', '');
            }
        } else if (outils === "containercol") {
            $("#TestFlexFlow").css('flex-direction', 'column');
            if (!($("#activeFF").is(':checked'))) {
                $("#TestFlexFlow").css('flex-wrap', '');
            }
        } else if (outils === "row") {
            $("#TestFlexFlow").css('flex-direction', 'row');
            if (!($("#activeFF").is(':checked'))) {
                $("#TestFlexFlow").css('flex-wrap', '');
            }
        } else if (outils === "row-reverse") {
            if (!($("#activeFF").is(':checked'))) {
                $("#TestFlexFlow").css('flex-wrap', '');
            }
            $("#TestFlexFlow").css('flex-direction', 'row-reverse');
            if (!($("#activeFF").is(':checked'))) {
                $("#TestFlexFlow").css('flex-wrap', '');
            }
        } else if (outils === "wrap") {
            if (!($("#activeFF").is(':checked'))) {
                $("#TestFlexFlow").css('flex-direction', '');
            }
            $("#TestFlexFlow").css('flex-wrap', 'wrap');
            if (!($("#activeFF").is(':checked'))) {
                $("#TestFlexFlow").css('flex-direction', '');
            }
        } else if (outils === "wraprev") {
            $("#TestFlexFlow").css('flex-wrap', 'wrap-reverse');
            if (!($("#activeFF").is(':checked'))) {
                $("#TestFlexFlow").css('flex-direction', '');
            }
        } else if (outils === "nowrap") {
            $("#TestFlexFlow").css('flex-wrap', 'nowrap');
            if (!($("#activeFF").is(':checked'))) {
                $("#TestFlexFlow").css('flex-direction', '');
            }
        }

    });

    // Thibault end
    // Cyril début, btn fonctionel pour le grow le shrink et basis
    $(".btnFlex").click(function() {
        var nb = $(this).attr("name");
        var inp;
        var outils = $(this).attr("type");
        if (outils === "grow") {
            inp = $('.growinp'+nb).val();
            $("#grobas"+nb).css('flex-grow', inp);
        } else if (outils === "basis") {
            inp = $('.basisinp'+nb).val();
            console.log(inp)
            $("#grobas"+nb).css('flex-basis', inp+"px");
        } else if (outils === "shrink") {
            inp = $('.shrinkinp'+nb).val();
            $("#shr"+nb).css('flex-shrink', inp);
        }
    });
    // Cyril Fin.


    // David début
    $("#order").click(function() {
        var inp;

        inp = $('#orderinp1').val();
        $("#orderbox1").css("order", inp);

        inp = $('#orderinp2').val();
        $("#orderbox2").css("order", inp);

        inp = $('#orderinp3').val();
        $("#orderbox3").css("order", inp);

        inp = $('#orderinp4').val();
        $("#orderbox4").css("order", inp);

    });



    //cyril et julien mettre des couleurs sur les elements et virrer les console.log()
    var colorarray = ["blue", "red", "green", "white", "orange", "yellow", "purple", "lime", "Olive", "DeepPink", "GreenYellow", "MediumPurple", "OrangeRed", "Pink", "MidnightBlue", "MediumSpringGreen", "PapayaWhip", "PeachPuff", "LawnGreen", "Gold", "Fuchsia", "DarkMagenta", "Crimson"]
    var prevrand = (colorarray.length)+1;
    $('.element').each(function() {
            var rand = Math.floor(Math.random() * colorarray.length);
            if (rand === prevrand) {
                console.log(colorarray[rand])
                while (rand === prevrand) {
                    rand = Math.floor(Math.random() * colorarray.length);
                }
            }
            $(this).css("background-color", colorarray[rand]);
            prevrand = rand;
        })
        //cyril et julien fin
});
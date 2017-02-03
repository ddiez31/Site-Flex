$(document).ready(function() {
    // Thibault start

    $(".btnFlexFlow").click(function() {
        var outils = $(this).attr("id");
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
        var inp;
        var outils = $(this).attr("id");
        if (outils == "grow") {
            inp = $('#growinp').val();
            $("#groshrbas2").css('flex-grow', inp);
        } else if (outils === "basis") {
            inp = $('#basisinp').val();
            $("#groshrbas2").css('flex-basis', inp);
        } else if (outils === "shrink") {
            inp = $('#shrinkinp').val();
            $("#groshrbas3").css('flex-shrink', inp);
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

    $(".btnSelf").click(function() {
        var outils = $(this).attr("id");
        if (outils == "auto") {
            $("#self3").css('auto');
        } else if (outils === "start") {
            $("#self3").css('flex-start');
        } else if (outils === "end") {
            $("#self3").css('flex-end');
        } else if (outils === "center") {
            $("#self3").css('center');
        } else if (outils === "baseline") {
            $("#self3").css('baseline');
        } else if (outils === "strech") {
            $("#self3").css('strech');
        }
    });



    // Cyril début, btn fonctionel pour le grow
    $(".inpgrowshrink").change(function(e) {
        var inp;
        var outils = $(this).attr("id");
        if (outils == "grow") {
            inp = $('#growinp').val();
            $("#grobas2").css('flex-grow', inp);
        } else if (outils === "basis") {
            inp = $('#basisinp').val();
            $("#grobas3").css('flex-basis', inp);
        } else if (outils === "shrink") {
            inp = $('#shrinkinp').val();
            $("#shr2").css('flex-shrink', inp);
        }
    });
    // Cyril Fin.


    //cyril et julien mettre des couleurs sur les ellements
    var colorarray = ["blue", "red", "green", "white", "orange", "yellow", "purple", "lime", "Olive", "DeepPink", "GreenYellow", "MediumPurple", "OrangeRed", "Pink", "MidnightBlue", "MediumSpringGreen", "PapayaWhip", "PeachPuff", "LawnGreen", "Gold", "Fuchsia", "DarkMagenta", "Crimson"]
    var prevrand = 8;
    $('.element').each(function() {
            var rand = Math.floor(Math.random() * colorarray.length);
            if (rand === prevrand) {
                while (rand === prevrand) {
                    rand = Math.floor(Math.random() * colorarray.length);
                }
            }
            $(this).css("background-color", colorarray[rand]);
            prevrand = rand;
        })
        //cyril et julien fin
});
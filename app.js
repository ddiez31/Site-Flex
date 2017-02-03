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
    // Cyril début, CURSEUR
    $(".btnFlex").click(function() {
        var nb = $(this).attr("name");
        var inp;
        var outils = $(this).attr("type");
        if (outils === "grow") {
            inp = $('.growinp' + nb).val();
            $("#grobas" + nb).css('flex-grow', inp);
        } else if (outils === "basis") {
            inp = $('.basisinp' + nb).val();
            $("#grobas" + nb).css('flex-basis', inp + "px");
        } else if (outils === "shrink") {
            inp = $('#shrinkinp' + nb).val();
            $("#shr" + nb).css('flex-shrink', inp);
        }
    });
    $("#TestFlexShrinkCurseur").change(function() {
            var inp = $("#TestFlexShrinkCurseur").val();
            $('#TestFlexShrink').css("width", inp)
            $('#shrinkDivRange').html(inp)
        })
        // Cyril Fin.


    // David début
    var count = 0;
    $(".btnDisplay").click(function() {
        count++
        if (count % 2 !== 0) {
            $(".divDisplay").css("display", "flex");
        } else {
            $(".divDisplay").css("display", "");
        }
    });


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
        var inp1 = $('#selfinp1').val();
        var inp2 = $('#selfinp2').val();
        var inp3 = $('#selfinp3').val();
        var outils = $(this).attr("id");
        if (outils === "auto") {
            $("#self" + inp1).css("height", '');
            $("#self" + inp2).css("height", '');
            $("#self" + inp3).css("height", '');
            $("#self" + inp1).css('align-self', 'auto');
            $("#self" + inp2).css('align-self', 'auto');
            $("#self" + inp3).css('align-self', 'auto');
        } else if (outils === "start") {
            $("#self" + inp1).css("height", '');
            $("#self" + inp2).css("height", '');
            $("#self" + inp3).css("height", '');
            $("#self" + inp1).css('align-self', 'flex-start');
            $("#self" + inp2).css('align-self', 'flex-start');
            $("#self" + inp3).css('align-self', 'flex-start');
        } else if (outils === "end") {
            $("#self" + inp1).css("height", '');
            $("#self" + inp2).css("height", '');
            $("#self" + inp3).css("height", '');
            $("#self" + inp1).css('align-self', 'flex-end');
            $("#self" + inp2).css('align-self', 'flex-end');
            $("#self" + inp3).css('align-self', 'flex-end');
        } else if (outils === "center") {
            $("#self" + inp1).css("height", '');
            $("#self" + inp2).css("height", '');
            $("#self" + inp3).css("height", '');
            $("#self" + inp1).css('align-self', 'center');
            $("#self" + inp2).css('align-self', 'center');
            $("#self" + inp3).css('align-self', 'center');
        } else if (outils === "baseline") {
            $("#self" + inp1).css("height", '');
            $("#self" + inp2).css("height", '');
            $("#self" + inp3).css("height", '');
            $("#self" + inp1).css('align-self', 'baseline');
            $("#self" + inp2).css('align-self', 'baseline');
            $("#self" + inp3).css('align-self', 'baseline');
        } else if (outils === "stretch") {
            $("#self" + inp1).css('align-self', 'stretch');
            $("#self" + inp2).css('align-self', 'stretch');
            $("#self" + inp3).css('align-self', 'stretch');
            $("#self" + inp1).css("height", 'inherit');
            $("#self" + inp2).css("height", 'inherit');
            $("#self" + inp3).css("height", 'inherit');
        }
    });


    //cyril et julien mettre des couleurs sur les elements et virrer les console.log()
    var colorarray = ["blue", "red", "green", "white", "orange", "yellow", "purple", "lime", "Olive", "DeepPink", "GreenYellow", "MediumPurple", "OrangeRed", "Pink", "MidnightBlue", "MediumSpringGreen", "PapayaWhip", "PeachPuff", "LawnGreen", "Gold", "Fuchsia", "DarkMagenta", "Crimson"]
    var prevrand = (colorarray.length) + 1;
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
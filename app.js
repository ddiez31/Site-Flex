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
            $('#TestFlexShrink').css("width", inp);
            $('#shrinkDivRange').html("Modifier la largeur initiale: " + inp + "px");
        })
        // Cyril Fin.


    // David début

    $(".btnDisplay").click(function() {
        $(".divDisplay").css("display", "flex");
    });
    $(".btnNoDisplay").click(function() {
        $(".divDisplay").css("display", "");
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


    //cyril et julien mettre des couleurs sur les elements et virer
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

    //début justify-Content et align-content

    $(".btnFlexJustifAlign").click(function() {
        var outils1 = $(this).attr("name");
        var outils = $(this).attr("type");
        if (outils1 == "justify-content" || outils1 == "align-items") {
            if (outils !== 'stretch' && outils1 !== "justify-content") {
                $(".elementjudtifalign").css("height", '');
            }
            $("#TestFlexJustifAlign").css(outils1, outils);
            if (outils === 'stretch') {
                $(".elementjudtifalign").css("height", 'inherit');
            }
        } else if (outils1 == "align-content") {
            $("#TestFlexAlign").css(outils1, outils);
        }
    });
    //fin justify-Content et align-content

    //final
    var nb = 0;
    var finalselect = 'TestFinal';
    var btncolors = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown"];
    $('#TestFinal').on('click', function() { //listener du conteneur pour le selectionner
        finalselect = $(this).attr('id');
    });
    $('.menuFinal').each(function() {
        rand = Math.floor(Math.random() * btncolors.length);
        if (rand === prevrand) {
            while (rand === prevrand) {
                rand = Math.floor(Math.random() * btncolors.length);
            }
        }
        prevrand = rand;
        $(this).addClass(btncolors[rand])
    })

    $('.menuFinal').click(function() {
        outils = $(this).attr('type');
        if (outils === 'ajout') {
            $('#finalreceiver').html('<button class="small ui button inverted btnFinal" type="ajout" name="+">+</button><button class="small ui button inverted btnFinal" type="ajout" name="-">-</button><button class="small ui button inverted btnFinal" type="ajout" name="reset">Reset</button>');
        } else if (outils === 'dirwrap') {
            $('#finalreceiver').html('<button class="small ui button inverted btnFinal" type="modifcont" name="flex-wrap,wrap">Wrap</button><button class="small ui button inverted btnFinal" type="modifcont" name="flex-wrap,nowrap">No-wrap</button><button class="small ui button inverted btnFinal" type="modifcont" name="flex-direction,column">Columns</button><button class="small ui button inverted btnFinal" type="modifcont" name="flex-direction,row">Row</button>')
        } else if (outils === 'alignit') {
            $('#finalreceiver').html('<button class="small ui button inverted btnFinal" type="modifcont" name="align-items,flex-start">Start</button><button class="small ui button inverted btnFinal" type="modifcont" name="align-items,flex-end">End</button><button class="small ui button inverted btnFinal" type="modifcont" name="align-items,center">Center</button><button class="small ui button inverted btnFinal" type="modifcont" name="align-items,stretch">Stretch</button>')
        } else if (outils === 'aligncont') {
            $('#finalreceiver').html('<button class="small ui button inverted btnFinal" type="modifcont" name="align-content,flex-start">Start</button><button class="small ui button inverted btnFinal" type="modifcont" name="align-content,flex-end">End</button><button class="small ui button inverted btnFinal" type="modifcont" name="align-content,center">Center</button><button class="small ui button inverted btnFinal" type="modifcont" name="align-content,space-between">Space-between</button><button class="small ui button inverted btnFinal" type="modifcont" name="align-content,space-around">Space-around</button>')
        } else if (outils === 'justifycont') {
            $('#finalreceiver').html('<button class="small ui button inverted btnFinal" type="modifcont" name="justify-content,flex-start">Start</button><button class="small ui button inverted btnFinal" type="modifcont" name="justify-content,flex-end">End</button><button class="small ui button inverted btnFinal" type="modifcont" name="justify-content,center">Center</button><button class="small ui button inverted btnFinal" type="modifcont" name="justify-content,space-around">Space-around</button>')
        }else if (outils === 'order') {
            $('#finalreceiver').html("<span>Order</span><input type='number' id='FinalOrder'>")
        } else if (outils === 'sizing') {
            $('#finalreceiver').html("<span>Largeur en % de l'élément</span><input type='number' id='FinalCurseurW' placeholder='Largeur'><br><span>Hauteur en % de l'élément</span><input type='number' id='FinalCurseurH' placeholder='Hauteur'>")
        } else if (outils === 'placement') {
            $('#finalreceiver').html('<button class="small ui button inverted btnFinal" type="changeselec" name="parent">Parent</button><button class="small ui button inverted btnFinal" type="changeselec" name="enfant">Enfant</button>')
        } else if (outils === 'text') {
            $('#finalreceiver').html('<input type="text" id="FinalTextinp" placeholder="ajouter du text">')
        }
        $('.btnFinal').each(function() {
            rand = Math.floor(Math.random() * btncolors.length);
            if (rand === prevrand) {
                while (rand === prevrand) {
                    rand = Math.floor(Math.random() * btncolors.length);
                }
            }
            prevrand = rand;
            $(this).addClass(btncolors[rand])
        })
        listenFinal();
    })

    function listenFinal() {
        $('.btnFinal').click(function() {
            outils = $(this).attr('type');
            outils1 = $(this).attr('name');
            if (outils === 'ajout') {
                if (outils1 === "+") {
                    nb++;
                    rand = Math.floor(Math.random() * colorarray.length);
                    while (rand === prevrand) {
                        rand = Math.floor(Math.random() * colorarray.length); // style='background-color: "+colorarray[rand]+"' 
                    }
                    prevrand = rand;
                    // "<button class='element elementFinal'id='final"+nb+"'>"+nb+"</button>"
                    but = $('<span/ class="elementFinal" style="background-color: ' + colorarray[rand] + '"">');
                    butt = but.attr('id', 'final' + nb);
                    butto = butt.css('display', 'flex')
                    $('#' + finalselect).append(butt);
                    $('.elementFinal').each(function() {
                        if ($(this).attr('type') !== 'ok') {
                            $(this).attr('type', 'ok');
                            $(this).on('click', function(e) {
                                e.stopPropagation();
                                finalselect = $(this).attr('id');
                            });
                        }
                    })
                }
                if (outils1 === "-") {
                    if (finalselect !== 'TestFinal') {
                        $('#' + finalselect).remove()
                    }
                }
                if (outils1 === "reset") {
                    $('#TestFinal').html("")
                }
            }
            if (outils === 'modifcont') {
                if ((outils1).split(",")[1] === 'stretch') {
                    $('#' + finalselect).children().css("height", 100 + '%');
                } else {
                    $('#' + finalselect).css((outils1).split(",")[0], (outils1).split(",")[1]);
                }
            }
            if (outils === 'changeselec') {
                if (outils1 === 'parent') {
                	if($('#'+finalselect).parent().attr('id')!==undefined)
                    finalselect = $('#' + finalselect).parent().attr('id');
                }if(outils1 === 'enfant'){
                	if($('#'+finalselect).children().attr('id')!==undefined)
                	finalselect = $('#'+finalselect).children().attr('id');
                }
            }
        });

        $("#FinalCurseurW").keyup(function() {
            var inp = $(this).val();
            if (finalselect !== 'TestFinal') {
                $('#' + finalselect).css("width", inp + "%");
            }
        });

        $("#FinalCurseurH").keyup(function() {
            var inp = $(this).val();
            if (finalselect !== 'TestFinal') {
                $('#' + finalselect).css("height", inp + "%");
            }
        });

        $('#FinalTextinp').on('keypress', function(e) {
            if (e.which === 13) {
                inp = $('#FinalTextinp').val();
                $('#' + finalselect).append("<p>" + inp + "</p>");
                $('#FinalTextinp').html('');
            }
        });

        $('#FinalOrder').on('change', function(){
        	inp = $('#FinalOrder').val();
        	$('#'+finalselect).css('order', inp);
        })
    }

    setInterval(function() {
    	slect = $('#' + finalselect);
        var color = slect.attr('style').split(';')[0].split(':')[1];
        var styltabl = slect.attr('style').split(';');
        $('#finalSelectCol').css('backgroundColor', color);
        $('#finalStyleDisplay').html(styltabl.join(','));
    }, 500);
    //final
});
function setup() {
	createCanvas(200, 600, WEBGL);
	noStroke();
}

function draw() {
	background(0);

    // Orange point light on the right
    pointLight(150, 100, 0, 500, 0, 200);

    // Blue directional light from the left
    directionalLight(0, 102, 255, -1, 0, 0);

    // Yellow spotlight from the front
    pointLight(255, 255, 109, 0, 0, 300);

    rotateY(map(mouseX, 0, width, 0, PI));
    rotateX(map(mouseY, 0, height, 0, PI));
    box(50);
}



$(document).ready(function() {

        console.log('jquery fonctionne');
        // Thibault start


        $(".btnFlexFlow").click(function(){
                var outils = $(this).attr("id");
                console.log(outils);
                if(outils === "containercolrev"){
                    $("#TestFlexFlow").css('flex-direction', '');
                }else if(outils === "containercol"){
                    $("#TestFlexFlow").css('flex-direction', 'column');
                }else if(outils === "row"){
                    $("#TestFlexFlow").css('flex-direction', 'row');
                }else if(outils === "row-reverse"){
                    $("#TestFlexFlow").css('flex-direction', 'row-reverse');
                }else if(outils === "wrap"){
                    if(!($("#activeFF").is(':checked'))){
                        $("#TestFlexFlow").css('flex-direction', '');
                    }
                    $("#TestFlexFlow").css('flex-wrap', 'wrap');
                }else if(outils === "wraprev"){
                    $("#TestFlexFlow").css('flex-wrap', 'wrap-reverse');
                }else if(outils === "nowrap"){
                    $("#TestFlexFlow").css('flex-wrap', 'nowrap');
                // } else if(outils === "dirwrap"){
                //     $("#TestFlexFlow").css('flex-flow', 'column-reverse wrap');
                }
            });
    });


// Thibault end
// Cyril début,

// Cyril Fin.


//

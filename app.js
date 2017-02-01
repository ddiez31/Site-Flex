function setup() {
    createCanvas(200, 100, WEBGL);
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

// Thibault start :

    // $("#containercol").click(function(){    // pour illustrer flex direction
    //   console.log('le click a été detecté');
    //   console.log($(".element").text());
    //   $("#TestFlexFlow").css('flex-direction', 'column-reverse');

    });


    // $("#wrap").click(function(){
    //   console.log('le click a été detecté'); // pour illustrer flex-wrap
    //   $("#TestFlexFlow").css('flex-wrap', 'wrap');

    // });

//     $("#dirwrap").click(function(){
//       console.log('le click a été detecté'); // pour illustrer flex-wrap
//       $("#TestFlexFlow").css('flex-flow', 'column-reverse wrap');
// });

    $(".btnFlexFlow").click(function(){
        var outils = $(this).attr("id");
        console.log(outils);
        if(outils === "containercolrev"){
             $("#TestFlexFlow").css('flex-direction', 'column-reverse');
        }else if(outils === "containercol"){
            $("#TestFlexFlow").css('flex-direction', 'column');
        }else if(outils === "wrap"){
            $("#TestFlexFlow").css('flex-wrap', 'wrap');
        } else if(outils === "dirwrap"){
            $("#TestFlexFlow").css('flex-flow', 'column-reverse wrap');
        }
    });

	// Thibault end
	// Cyril début,
	
	// Cyril Fin.



//

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
    // Thibault start : création function qui applique column-reverse

    $("button").click(function(){
      console.log('le click a été detecté');
      $(".container").css('flex-direction', 'column-reverse');



    });

	// Thibault end
	// Cyril début,


	// Cyril Fin.

});


//

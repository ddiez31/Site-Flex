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
    // Thibault start : création function qui applique column-reverse

    $("#col-rev").click(function(){
    	console.log('le click a été detecté');
    	$("#containercol").css('flex-direction', 'column-reverse');

    });

    console.log('jquery fonctionne');
    // Thibault start : création function qui applique wrap

    $("#wrap").click(function(){
    	console.log('le click a été detecté');
    	$("#containerwrap").css('flex-wrap', 'wrap');

    });


// Thibault end


});


//

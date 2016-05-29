var sketch = function(p) {

  var x = 100; 
  var y = 100;
  var grammar, yaml, lines;
  var animating = false;
  var countdown = 0;
  var alpha = 255;

  p.preload = function() {
  	yaml = p.loadStrings('strings/haiku.yaml');
  };

  p.setup = function() {
    var canvas = p.createCanvas(400, 200);
    canvas.class("displayed");
    canvas.parent('p5sketch');
    p.select('canvas').style("visibility","visible");
    p.textSize(20);
    p.fill(255);
    p.textAlign(p.CENTER);
    p.noStroke();
    grammar = new RiGrammar(yaml.join('\n'));
    lines = [" ", " ", " "];
    generatePoem();
  };

  p.draw = function() {
  	animate(countdown, alpha);
  	p.background(0);
  	p.text(lines[0], p.width/2, 75);
  	p.text(lines[1], p.width/2, 100);
  	p.text(lines[2], p.width/2, 125);

  };

  var animate = function(_time,_alpha){
  	if (countdown > 0 && alpha < 255) {
  		countdown--;
  		alpha += p.random(-2,5);
  		p.fill(255,alpha);
  		animating = true;
  	}
  	else {
  		countdown = 0;
  		alpha = 255;
  		animating = false;
  	}
  };

  var generatePoem = function() {
  	if (!animating){
	  	var result = grammar.expand();
	  	var haiku = result.split("%");
	  	for (var i = 0; i < lines.length; i++)
	  		lines[i] = haiku[i];
	  	countdown = 1000;
	  	alpha = 0;
  	}
  };

  p.mousePressed = function() {
    if (!p.fullscreen()) p.fullscreen(true);
    //generatePoem();
};

  p.deviceTurned = function() {
  	nextPoem(generatePoem);
};
};

var myp5 = new p5(sketch);
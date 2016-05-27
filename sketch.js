var sketch = function(p) {

  var x = 100; 
  var y = 100;
  var grammar, yaml, lines;

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
    generatePoem();
  };

  p.draw = function() {
  	p.background(0);
  	p.text(lines[0], p.width/2, 75);
  	p.text(lines[1], p.width/2, 100);
  	p.text(lines[2], p.width/2, 125);

  };

  var generatePoem = function() {
  	var result = grammar.expand();
  	var haiku = result.split("%");
  	for (var i = 0; i < lines.length; i++)
  		lines[i] = haiku[i];
  };

  p.mousePressed = function() {
    if (!p.fullscreen()) p.fullscreen(true);
};

  p.deviceTurned = function() {
  	generatePoem();
};
};

var myp5 = new p5(sketch);
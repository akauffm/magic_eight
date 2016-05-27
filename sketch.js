var sketch = function( p, sketch ) {

  var x = 100; 
  var y = 100;
  var grammar, yaml, lines;

  p.preload = function() {
  	yaml = p.loadStrings('strings/haiku.yaml');
  };

  p.setup = function() {
    var canvas = p.createCanvas(650, 200);
    canvas.class("displayed");
    p.textSize(30);
    p.fill(255);
    p.textAlign(p.CENTER);
    p.noStroke();
    grammar = new RiGrammar(yaml.join('\n'));
    lines = [" ", " ", " "];
  };

  p.draw = function() {
  	p.background(0);
  	p.text(lines[0], p.width/2, 75);
  	p.text(lines[1], p.width/2, 110);
  	p.text(lines[2], p.width/2, 145);

  };


  p.mousePressed = function() {
    if (!p.fullscreen()) p.fullscreen(true);
};

  p.deviceTurned = function() {
  if (p.turnAxis == 'Z'){
    var result = grammar.expand();
  	var haiku = result.split("%");
  	for (var i = 0; i < lines.length; i++)
  		lines[i] = haiku[i];
  }
};
};

var myp5 = new p5(sketch);
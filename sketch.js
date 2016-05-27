var sketch = function( p, p5sketch ) {

  var x = 100; 
  var y = 100;
  var grammar, yaml, lines;

  p.preload = function() {
  	yaml = p.loadStrings('strings/haiku.yaml');
  };

  p.setup = function() {
    p.createCanvas(600, 1000);
    p.textSize(80);
    p.fill(255);
    p.textAlign(p.CENTER);
    p.noStroke();
    grammar = new RiGrammar(yaml.join('\n'));
    lines = [" ", " ", " "];
  };

  p.draw = function() {
  	p.background(0);
  	p.text(lines[0], p.width/2, 175);
  	p.text(lines[1], p.width/2, 310);
  	p.text(lines[2], p.width/2, 545);

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
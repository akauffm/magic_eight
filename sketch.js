var sketch = function( p, p5sketch ) {

  var x = 100; 
  var y = 100;
  var grammar, yaml, lines;

  p.preload = function() {
  	yaml = p.loadStrings('strings/haiku.yaml');
  };

  p.setup = function() {
    p.createCanvas(700, 410);
    p.textSize(20);
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

  }

  p.deviceTurned = function() {
  if (turnAxis == 'Z'){
    p.mouseReleased();
  }
};

  p.mouseReleased = function() {

  	var result = grammar.expand();
  	var haiku = result.split("%");
  	for (var i = 0; i < lines.length; i++)
  		lines[i] = haiku[i];
  };
};

var myp5 = new p5(sketch);
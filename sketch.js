  var x = 100; 
  var y = 100;
  var grammar, yaml, lines;

  preload = function() {
  	yaml = loadStrings('strings/haiku.yaml');
  };

  setup = function() {
    var canvas = createCanvas(650, 200);
    canvas.class("displayed");
    canvas.parent('p5sketch');
    select('canvas').style("visibility","visible");
    textSize(30);
    fill(255);
    textAlign(CENTER);
    noStroke();
    grammar = new RiGrammar(yaml.join('\n'));
    lines = [" ", " ", " "];
  };

  draw = function() {
  	background(0);
  	text(lines[0], width/2, 75);
  	text(lines[1], width/2, 110);
  	text(lines[2], width/2, 145);
  };

  mousePressed = function() {
    if (!fullscreen()) fullscreen(true);
};

  deviceTurned = function() {
  if (turnAxis == 'Z'){
    var result = grammar.expand();
  	var haiku = result.split("%");
  	for (var i = 0; i < lines.length; i++)
  		lines[i] = haiku[i];
  }
};

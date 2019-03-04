function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(slctSquare) {
  slctSquare.css("background-color", getRandomColor());
}

function counterSquare(){
  var sqrRed = $("#red");
  var sqrGreen = $("#green");
  var sqrBlue = $("#blue");
  var contatore = 0;

  sqrRed.on({
    click: function(){
    console.log("red");
    contatore++;
    sqrGreen.html(contatore);
    setRandomColor(sqrGreen);
    }
  });

  sqrBlue.on({
    click: function(){
    console.log("blue");
    contatore--;
    sqrGreen.html(contatore);
    setRandomColor(sqrGreen)
    }
  });
}

counterSquare();

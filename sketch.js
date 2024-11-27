let table;

function preload() {
  table = loadTable('test.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1200, 1500);
  noLoop(); 
}

function draw() {
  background(255);

  // Define spacing for the objects
  let x = 50;
  let y = 50;
  let spacing = 120;

  for (let i = 0; i < table.getRowCount(); i++) {
    let colorName = table.getString(i, 0); // Color name
    let hexCode = table.getString(i, 1); // Hex code

    //color fill
    fill(hexCode);
    stroke(0);
    strokeWeight(2);

    ellipse(x, y, 50, 50);

    //name
    stroke(225);
    fill(hexCode);
    text(colorName, x - 25, y + 50);

    // Update position
    x += spacing;
    if (x > width - 50) { // Move to the next row if out of canvas width
      x = 50;
      y += spacing;
    }
  }
}


//https://www.rapidtables.com/web/color/RGB_Color.html
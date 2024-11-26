let table;

function preload() {
  table = loadTable('test.csv', 'csv');
}

function setup() {
  createCanvas(400, 200);  
  textSize(40);
  text(table.getString(0, 0), width / 2, height / 2);
}
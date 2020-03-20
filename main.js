function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(other) {
	return new Vector(this.x + other.x, this.y + other.y);
};

function Grid(width, height) {
	this.space = new Array(width * height);
	this.width = width;
	this.height = height;
}

Grid.prototype.isInside = function(vector) {
	return vector.x >= 0 && vector.x < this.width &&
		   vector.y >= 0 && vector.y < this.height;
};

Grid.prototype.get = function(vector) {
	return this.space[vector.x + this.width * vector.y];
};

Grid.prototype.set = function(vector, value) {
	this.space[vector.x + this.width * vector.y] = value;
};

var directions = {
	'n': new Vector(0, -1),
	'e': new Vector(1, 0),
	's': new Vector(0, 1),
	'w': new Vector(-1, 0)
};

var directionNames = Object.keys(directions);
var grid = new Grid(10, 10);
var number = 1;
var i = 1;

function test(vector) {
	var target = vector.plus(directions[directionNames[i]]);	
	if (number == 100) {
		this.grid.set(vector, number);
		return null;
	}
	if (!(grid.isInside(target)) || (grid.get(target) != undefined)) {
		if (i >= 3) {
			i = 0;
			return test(vector);
		}
		i += 1;
//		console.log(i, ' i');
//		console.log(target);
		return test(vector);
	}
	if (grid.isInside(target) && grid.get(target) == undefined) {
		this.grid.set(vector, number);
		console.log('a');
		number += 1;
	} 
//	console.log(grid);

	return test(target);
}


test(new Vector(0, 0));

var array = grid['space'];
var e = 0;
function build(array) {
	var table = document.querySelector('table');
		for (e = 0; e < 100; e++) {
			if ((e == 0) || (e % 10 == 0)) {
      	var row = document.createElement("tr");
	    }
			var cell = document.createElement("td");
	  	cell.textContent = array[e];
		  row.appendChild(cell);
	  	table.appendChild(row);
		}
}

build(array);

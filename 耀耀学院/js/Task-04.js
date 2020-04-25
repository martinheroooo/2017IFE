
var i = 0;
var j = 0;

var newDiv_1 = document.createElement("div"),
	newDiv_2 = document.createElement("div");
newDiv_1.className = "newSquare";
newDiv_2.className = "newCell";
document.getElementById("container").appendChild(newDiv_1);
newDiv_1.appendChild(newDiv_2);

//控制位置
function getPosTop(i, j) {
	return 1 + i * 41;
}

function getPosLeft(i, j) {
	return 1 + j * 41;
}

(function getPos() {
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			//jQuery
			// var gridCell = $("#grid-cell-" + i + "-" + j);
			// gridCell.css('top', getPosTop(i, j));
			// gridCell.css('left', getPosLeft(i, j));

			//DOM
			var gridCell = document.getElementById('grid-cell-' + i + '-' + j);
			gridCell.style.left = getPosLeft(i, j) + "px";
			gridCell.style.top = getPosTop(i, j) + "px";
		}
	}
})();

//移动
function goButton() {
	var remain = num % 4;
	switch (remain) {
		case 0:
			// moveUp
			if (i != 0) {
				i -= 1;
				showMoveAnimation(i, j);
			} else {
				alert("Can't Move!");
			}
			break;

			// moveRight
		case 1:
		case -3:
			if (j != 9) {
				j += 1;
				showMoveAnimation(i, j);
			} else {
				alert("Can't Move!");
			}
			break;

			//moveDown
		case -2:
		case 2:
			if (i != 9) {
				i += 1;
				showMoveAnimation(i, j);
			} else {
				alert("Can't Move!");
			}
			break;

			//moveLeft
		case 3:
		case -1:
			if (j != 0) {
				j -= 1;
				showMoveAnimation(i, j);
			} else {
				alert("Can't Move!");
			}
			break;
	}
}

//旋转
var angle = 0;
var num = 0;
function turnLeft() {
	angle -= 90;
	num -= 1;
	$(".newSquare").css({
		"transform": "rotate(" + angle + "deg)",
		"transition": "transform 1s"
	});
}

function turnRight() {
	angle += 90;
	num += 1;
	$(".newSquare").css({
		"transform": "rotate(" + angle + "deg)",
		"transition": "transform 1s"
	});
}

function turnBack() {
	angle += 180;
	num += 2;
	$(".newSquare").css({
		"transform": "rotate(" + angle + "deg)",
		"transition": "transform 1s"
	});
}

//移动动画
function showMoveAnimation(i, j) {
	$(".newSquare").animate({
		top: getPosTop(i, j),
		left: getPosLeft(i, j)
	}, 500)
}

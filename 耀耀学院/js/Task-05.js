var i = 0;
var j = 0;

//建立小方格
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

//移动方格
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

//移动动画
function showMoveAnimation(i, j) {
	$(".newSquare").animate({
		top: getPosTop(i, j),
		left: getPosLeft(i, j)
	}, 1000)
}

//左移一格
function traLef() {
	if (j != 0) {
		j -= 1;
		showMoveAnimation(i, j);
	} else {
		alert("Can't Move!");
	}
}

//上移一格
function traTop() {
	if (i != 0) {
		i -= 1;
		showMoveAnimation(i, j);
	} else {
		alert("Can't Move!");
	}
}

//右移一格
function traRig() {
	if (j != 9) {
		j += 1;
		showMoveAnimation(i, j);
	} else {
		alert("Can't Move!");
	}
}

//下移一格
function traBot() {
	if (i != 9) {
		i += 1;
		showMoveAnimation(i, j);
	} else {
		alert("Can't Move!");
	}
}

//旋转
var angle = 0;
var num = 0;

//左转90度
function turnLeft() {
	angle -= 90;
	num -= 1;
	$(".newSquare").css({
		"transform": "rotate(" + angle + "deg)",
		"transition": "transform 1s"
	});
}

//右转90度
function turnRight() {
	angle += 90;
	num += 1;
	$(".newSquare").css({
		"transform": "rotate(" + angle + "deg)",
		"transition": "transform 1s"
	});
}

//右转180度
function turnBack() {
	angle += 180;
	num += 2;
	$(".newSquare").css({
		"transform": "rotate(" + angle + "deg)",
		"transition": "transform 1s"
	});
}

//移动
function goButton() {
	var remain = num % 4;
	switch (remain) {
		case 0:
			// moveUp
			traTop();
			break;

			// moveRight
		case 1:
		case -3:
			traRig();
			break;

			//moveDown
		case -2:
		case 2:
			traBot();
			break;

			//moveLeft
		case 3:
		case -1:
			traLef()
			break;
	}
}

//方向转向左侧，左移一格
function movLef() {
	var remain = num % 4;
	switch (remain) {
		//up
		case 0:
			turnLeft();
			setTimeout("traLef()", 1000);
			break;

			// Right
		case 1:
		case -3:
			turnBack();
			setTimeout("traLef()", 1000);
			break;

			//Down
		case 2:
		case -2:
			turnRight();
			setTimeout("traLef()", 1000);
			break;
		case 3:
		case -1:
			traLef();
			break;
	}
}

//方向向上，上移一格
function movTop() {
	var remain = num % 4;
	switch (remain) {

		//up
		case 0:
			traTop();
			break;
			// Right
		case 1:
		case -3:
			turnLeftk();
			setTimeout("traTop()", 1000);
			break;

			//Down
		case 2:
		case -2:
			turnBack();
			setTimeout("traTop()", 1000);
			break;

			//left
		case -1:
		case 3:
			turnRight();
			setTimeout("traTop()", 1000);
			break;
	}
}

//方向向右，右移一格
function movRig() {
	var remain = num % 4;
	console.log(remain);
	switch (remain) {

		//up
		case 0:
			turnRight();
			setTimeout("traRig()", 1000);
			break;
			//right
		case 1:
		case -3:
			traRig();
			break;
			//Down
		case 2:
		case -2:
			turnLeft();
			setTimeout("traRig()", 1000);
			break;

			//left
		case 3:
		case -1:
			turnBack();
			setTimeout("traRig()", 1000);
			break;
	}
}

//方向向下，下移一格
function movBot() {
	var remain = num % 4;
	switch (remain) {
		//up
		case 0:
			turnBack();
			setTimeout("traBot()", 1000);
			break;

			//down
		case 2:
		case -2:
			traBot();
			break;

			// Right
		case 1:
		case -3:
			turnRight();
			setTimeout("traBot()", 1000);
			break;

			//left
		case 3:
		case -1:
			turnLeft();
			setTimeout("traBot()", 1000);
			break;
	}
}

//命令
function moveSquare() {

	//转化为大写
	var command = document.getElementById("command-input").value.toUpperCase();

	//去除空格
	var res = command.split(" ").join("");
	if (!res) {
		alert("命令不能为空！");
	} else {
		switch (res) {
			case "GO":
				goButton();
				break;
			case "TUNLEF":
				turnLeft();
				break;
			case "TUNRIG":
				turnRight();
				break;
			case "TUNBAC":
				turnBack();
				break;
			case "TRALEF":
				traLef();
				break;
			case "TRATOP":
				traTop();
				break;
			case "TRARIG":
				traRig();
				break;
			case "TRABOT":
				traBot();
				break;
			case "MOVLEF":
				movLef();
				break;
			case "MOVTOP":
				movTop();
				break;
			case "MOVRIG":
				movRig();
				break;
			case "MOVBOT":
				movBot();
				break;
			default:
				alert("错误命令，请重新输入！");
		}
	}
}

//绑定回车事件
$("body").keydown(function() {
	if (event.keyCode == "13") { //keyCode=13是回车键
		$('#command-btn').click();
	}
});

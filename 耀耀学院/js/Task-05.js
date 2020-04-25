var i = 0;
var j = 0;

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
			var gridCell = document.getElementById('grid-cell-' + i + '-' + j);
			gridCell.style.left = getPosLeft(i, j) + "px";
			gridCell.style.top = getPosTop(i, j) + "px";
		}
	}
})();

//移动动画
function showMoveAnimation(i, j) {
	$("#square").animate({
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
function rotateSquare(angle) {
	$("#square").css({
		"transform": "rotate(" + angle + "deg)",
		"transition": "transform 1s"
	});
}

//左转90度
function turnLeft() {
	angle -= 90;
	rotateSquare(angle);
}

//右转90度
function turnRight() {
	angle += 90;
	rotateSquare(angle);
}

//右转180度
function turnBack() {
	angle += 180;
	rotateSquare(angle);
}

//移动
function goButton() {
	var remain = angle % 360;
	switch (remain) {
		case 0:
			// moveUp
			traTop();
			break;
			// moveRight
		case 90:
		case -270:
			traRig();
			break;
			//moveDown
		case -180:
		case 180:
			traBot();
			break;
			//moveLeft
		case 270:
		case -90:
			traLef()
			break;
	}
}

//方向转向左侧，左移一格
function movLef() {
	var remain = angle % 360;
	switch (remain) {
		//up
		case 0:
			turnLeft();
			setTimeout("traLef()", 1000);
			break;
			// Right
		case 90:
		case -270:
			turnBack();
			setTimeout("traLef()", 1000);
			break;
			//down
		case 180:
		case -180:
			turnRight();
			setTimeout("traLef()", 1000);
			break;
			//left
		case 270:
		case -90:
			traLef();
			break;
	}
}

//方向向上，上移一格
function movTop() {
	var remain = angle % 360;
	switch (remain) {
		//up
		case 0:
			traTop();
			break;
			// Right
		case 90:
		case -270:
			turnLeftk();
			setTimeout("traTop()", 1000);
			break;
			//Down
		case 180:
		case -180:
			turnBack();
			setTimeout("traTop()", 1000);
			break;
			//left
		case -90:
		case 270:
			turnRight();
			setTimeout("traTop()", 1000);
			break;
	}
}

//方向向右，右移一格
function movRig() {
	var remain = angle % 360;
	console.log(remain);
	switch (remain) {
		//up
		case 0:
			turnRight();
			setTimeout("traRig()", 1000);
			break;
			//right
		case 90:
		case -270:
			traRig();
			break;
			//Down
		case 180:
		case -180:
			turnLeft();
			setTimeout("traRig()", 1000);
			break;
			//left
		case 270:
		case -90:
			turnBack();
			setTimeout("traRig()", 1000);
			break;
	}
}

//方向向下，下移一格
function movBot() {
	var remain = angle % 360;
	switch (remain) {
		//up
		case 0:
			turnBack();
			setTimeout("traBot()", 1000);
			break;
			//down
		case 180:
		case -180:
			traBot();
			break;
			// Right
		case 90:
		case -270:
			turnRight();
			setTimeout("traBot()", 1000);
			break;
			//left
		case 270:
		case -90:
			turnLeft();
			setTimeout("traBot()", 1000);
			break;
	}
}

//命令
function moveSquare() {
	var command = document.getElementById("command-input").value.toUpperCase(); //转化为大写
	var res = command.split(" ").join(""); //去除空格
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
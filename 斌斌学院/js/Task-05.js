document.getElementById("left-in").addEventListener('click', leftIn, false);
document.getElementById("right-in").addEventListener('click', rightIn, false);
document.getElementById("left-out").addEventListener('click', leftOut, false);
document.getElementById("right-out").addEventListener('click', rightOut, false);

var ul = document.createElement("ul");
document.getElementsByTagName("body")[0].appendChild(ul); //创建ul标签，并插入body中

var item = []; //获取item数组

function getValue(nums) {
	if (nums < 10) {
		alert("请输入大于10的数字");
		return false;

	} else if (nums > 100) {
		alert("请输入小于100的数字");
		return false;
	} else {
		return true;
	}
}

function Del() {
	var li = document.getElementsByTagName("li");
	for (var i = 0; i < li.length; i++) {
		li[i].index = i;
		li[i].onclick = function() {
			item.splice(this.index, 1);
			createData(item);
		}
	}
}; //删除队列

function removeAllLi() {
	var _li = ul.getElementsByTagName('li');
	for (var i = _li.length - 1; i >= 0; i--) {
		var x = ul.removeChild(_li[i]);
		x = null;
	}
}

function createData(item) {
	removeAllLi();
	for (var j = 0; j < item.length; j++) {
		var liCreate = document.createElement("li");
		liCreate.style.height = item[j] + "px";
		document.getElementsByTagName("ul")[0].appendChild(liCreate);
	}
}

function leftIn() {
	var nums = document.getElementById("nums").value;
	if (getValue(nums)) {
		if (item.length < 60) {
			item.unshift(nums);
			createData(item);
		} else {
			alert("超过60个元素啦！");
		}
	}
}

function rightIn() {
	var nums = document.getElementById("nums").value;
	if (getValue(nums)) {
		if (item.length < 60) {
			item.push(nums);
			createData(item);
		} else {
			alert("超过60个元素啦！");
		}
	}
}

function leftOut() {
	item.shift();
	createData(item);
}

function rightOut() {
	item.pop();
	createData(item);
}

ul.onclick = function() {
	Del();
};

function up() {
	item.sort(function(x, y) {
		return x - y;
	});
	createData(item);
}

function down() {
	item.sort(function(x, y) {
		return y - x;
	});
	createData(item);
}

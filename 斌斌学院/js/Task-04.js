document.getElementById("left-in").addEventListener('click', leftIn, false);
document.getElementById("right-in").addEventListener('click', rightIn, false);
document.getElementById("left-out").addEventListener('click', leftOut, false);
document.getElementById("right-out").addEventListener('click', rightOut, false);

var ul = document.createElement("ul");
document.getElementsByTagName("body")[0].appendChild(ul); //创建ul标签，并插入body中

var item = []; //获取item数组
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
		liCreate.innerHTML = item[j];
		document.getElementsByTagName("ul")[0].appendChild(liCreate);
	}
}

function leftIn() {
	var nums = document.getElementById("nums").value;
	item.unshift(nums);
	createData(item);
}

function rightIn() {
	var nums = document.getElementById("nums").value;
	item.push(nums);
	createData(item);
}

function leftOut() {
	alert(item.shift());
	createData(item);
}

function rightOut() {
	alert(item.pop());
	createData(item);
}

ul.onclick = function() {
	Del();
};

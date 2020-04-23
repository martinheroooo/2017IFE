var node = document.getElementById("root");
// node.style.backgroundColor="#2E7EC2";
var list = [];
var queue = [];
var timer;
var arr = [];
var con = document.getElementById("content");
var div = con.getElementsByTagName("div");

function Del() {
	deepTravel(node);
	for (var i = 0, len = list.length; i < len; i++) {
		list[i].index = i;
		list[i].onclick = function(e) {
			for (var j = 0; j < list.length; j++) {
				list[j].style.backgroundColor = "#ffffff";
			};
			list[this.index].style.backgroundColor = "#2e7ec2";
			e.stopPropagation();

			var newNode = this; //终止事件在传播过程的捕获、目标处理或起泡阶段进一步传播。调用该方法后，该节点上处理该事件的处理程序将被调用，事件不再被分派到其他节点。

			document.getElementById("del").onclick = function() {
				newNode.parentNode.removeChild(newNode);
			}

			document.getElementById("add").onclick = function() {
				var text = document.getElementById("search-text").value;
				if (text == "") {
					alert("请输入文本！");
				} else {
					var newDiv = document.createElement("div");
					var newtext = document.createElement("span");
					newDiv.className = "node";
					newDiv.innerHTML = text;
					newNode.appendChild(newDiv);

				}
			}
		}
	}
}
Del();


//递归深度优先遍历
function deepTravel(node) {
	if (node != null) {
		list.push(node);
		for (var i = 0; i < node.children.length; i++) {
			deepTravel(node.children[i]);
		};
	};
	return list;
};
//非递归广度遍历
function shallowTravel(node) {
	if (node != null) {
		queue.unshift(node);
		while (queue.length > 0) {
			var item = queue.shift();
			list.push(item);
			var children = item.children;
			for (var i = 0; i < children.length; i++) {
				queue.push(children[i]);
			}
		}
	}
	return list;
};

function reSet() {
	for (var i = 0, len = list.length; i < len; i++) {
		list[i].style.backgroundColor = "#ffffff";
	};
};


function show() {
	var num = 0,
		text = document.getElementById("search-text").value,
		res,
		color = list[0];
	timer = setInterval(function() {
		if (!res) {
			color.style.backgroundColor = "#ffffff";
		}
		if (num <= list.length && list[num].firstChild.nodeValue.trim() != text) {
			list[num].style.backgroundColor = "#2e7ec2";
			color = list[num];
			res = false;
			num += 1;
		} else if (num <= list.length && list[num].firstChild.nodeValue.trim() == text) {
			list[num].style.backgroundColor = "red";
			color = list[num];
			num += 1;
			res = true;
		} else {
			clearInterval(timer);
			list = [];
		};
	}, 500);

};

function showDeep() {
	if (timer != null) {
		reSet();
		clearInterval(timer);
		list = [];
	};
	deepTravel(node);
	show();
};

function showShallow() {
	if (timer != null) {
		reSet();
		clearInterval(timer);
		list = [];
	};
	shallowTravel(node);
	show();
}

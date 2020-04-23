var node = document.getElementById("root");
// node.style.backgroundColor="#2E7EC2";
var list = [];
var timer;

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
var queue=[];
function shallowTravel(node) {
	if (node != null) {
		queue.unshift(node);
		while(queue.length>0){
			var item=queue.shift();
			list.push(item);
			var children=item.children;
			for (var i=0;i<children.length;i++){
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

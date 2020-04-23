//获取根节点
var node = document.getElementById("root");

//创建一个列表存储节点
var list = new Array();
//先序遍历

function preOrder(node) {
	if (node != null) {
		list.push(node);
		preOrder(node.firstElementChild);
		preOrder(node.lastElementChild);
	};
};

//中序遍历
function inOrder(node) {
	if (node != null) {
		inOrder(node.firstElementChild);
		list.push(node);
		inOrder(node.lastElementChild);
	};
};
//后序遍历
function postOrder(node) {
	if (node != null) {
		postOrder(node.firstElementChild);
		postOrder(node.lastElementChild);
		list.push(node);
	};
};

//重置样式
function reSet() {
	for (var i = 0; i < list.length; i++) {
		list[i].style.backgroundColor = "#ffffff";
	};
};

//标记
var timer;

function show() {
	var num = 0;
	timer = setInterval(function() {
		reSet();
		if (num < list.length) {
			list[num].style.backgroundColor = "#2e7ec2";
			num = num + 1;
		} else {
			clearInterval(timer);
			list = [];
		};
	}, 500);
};

function showPre() {
	if (timer != null) {
		clearInterval(timer);
		list = [];
	};
	preOrder(node);
	show();
	document.getElementById("btn1").addEventListener('click', stopOr, false);
};

function showIn() {
	if (timer != null) {
		clearInterval(timer);
		list = [];
	};
	inOrder(node);
	show();
	document.getElementById("btn1").addEventListener('click', stopOr, false);
};

function showPost() {
	if (timer != null) {
		clearInterval(timer);
		list = [];
	};
	postOrder(node);
	show();
	document.getElementById("btn1").addEventListener('click', stopOr, false);
};

function stopOr() {
	clearInterval(timer);
	reSet();
	list = [];
};

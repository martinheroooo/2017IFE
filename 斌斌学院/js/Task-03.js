// getData方法
function getData() {

	// 读取id为source的列表， 获取其中城市名字及城市对应的空气质量
	var source = document.getElementById("source"),
		list = source.getElementsByTagName("li"),
		score = source.getElementsByTagName("b"),
		data = [];

	// 创建二维数组
	for (var i = 0; i < list.length; i++) {
		data[i] = [];
		data[i][0] = list[i].innerHTML.slice(0, 2);
		data[i][1] = score[i].innerHTML;
	}
	return data;
}

// sortAqiData
// 按空气质量对data进行从小到大的排序
// 返回一个排序后的数组
function sortAqiData(data) {
	data.sort(function(x, y) {
		return y[1] - x[1];
	});
	return data;
}

// render将排好序的城市及空气质量指数，输出显示到id位resort的列表中
function render(data) {
	var ul = document.getElementById("resort"),
		li = ul.getElementsByTagName("li"),
		fragment = document.createDocumentFragment();

	//移除存在的li
	for (var i = li.length - 1; i >= 0; i--) {
		ul.removeChild(li[i]);
	}

	// 输出到列表中
	for (var i = 0; i < data.length; i++) {
		var newLi = document.createElement("li"),
			b = document.createElement("b");
		newLi.innerHTML = "第" + (i + 1) + "名：" + data[i][0] + "空气质量：";
		b.innerHTML = data[i][1];
		newLi.appendChild(b);
		fragment.appendChild(newLi);
	};
	ul.appendChild(fragment);
}

//排序后的数组
function btnHandle() {
	var aqiData = getData();
	aqiData = sortAqiData(aqiData);
	render(aqiData);
}

// 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
(function init() {
	var btn = document.getElementById("sort-btn");
	btn.addEventListener('click', btnHandle, false);
})();

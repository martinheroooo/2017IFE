function checkStudent() {
	var student = document.getElementById("student");
	var graduate = document.getElementById("graduate");
	graduate.checked = false;
	document.getElementById("company").className = "hide";
	student.checked = true;
	document.getElementById("school").className = "content";
}

function checkGraduate() {
	var student = document.getElementById("student");
	var graduate = document.getElementById("graduate");
	student.checked = false;
	document.getElementById("school").className = "hide";
	graduate.checked = true;
	document.getElementById("company").className = "content";
}


var school = document.getElementById("select-school");

function removeOption() {
	var opt = school.getElementsByTagName("option");
	for (var i = opt.length - 1; i >= 0; i--) {
		school.removeChild(opt[i]);
	}
}


function checkSchool() {
	var data = {
		bj: ["北京大学", "清华大学", "北京航空航天大学"],
		sh: ["复旦大学", "上海交通大学", "同济大学"],
		wh: ["武汉大学", "华中科技大学", "武汉理工大学"]
	}
	var city = document.getElementById("city");
	var school = document.getElementById("select-school");
	var selected = city.options[city.selectedIndex].value; //selectedIndex 属性可设置或返回下拉列表中被选选项的索引号。
	school.innerHTML = "";
	for (var i = 0; i < data[selected].length; i++) {
		var opt = document.createElement('option');
		opt.value = data[selected][i];
		opt.innerHTML = data[selected][i];
		school.appendChild(opt);
	}
}

function selectDistrict() {
	var data = {
		bj: ["北京大学", "清华大学", "北京航空航天大学"],
		sh: ["复旦大学", "上海交通大学", "同济大学"],
		wh: ["武汉大学", "华中科技大学", "武汉理工大学"]
	}
}
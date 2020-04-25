function removeSpan(div) {
	var span = div.getElementsByTagName("span");
	for (var i = span.length - 1; i >= 0; i--) {
		var x = div.removeChild(span[i]);
		x = null;
	}
}

function checkName() {
	var text = document.getElementById("user-name").value, //获取输入框中的值，并赋值给text
		myRe = new RegExp("[\u4E00-\u9FA5]+"),
		len = 0,
		input = document.getElementById("user-name");
	div = document.getElementById("user-name-div");
	for (var i = 0; i < text.length; i++) {
		if (myRe.test(text[i])) {
			len += 2;
		} else {
			len++;
		}
	} //字符串的字符数
	removeSpan(div); //删除span标签
	if (text == "") {
		var span = document.createElement("span");
		span.className = "error";
		span.innerHTML = "请输入用户名!";
		div.appendChild(span);
		input.className = "input-error";
		return false;
	} else if (len < 4 || len > 16) {
		var span = document.createElement("span");
		span.className = "error";
		span.innerHTML = "字符数须为4-16位!";
		div.appendChild(span);
		input.className = "input-error";
		return false;
	} else {
		input.className = "input-right";
		var span = document.createElement("span");
		span.className = "right";
		span.innerHTML = "验证通过";
		div.appendChild(span);
		return true;
	}
} //验证字符数是否符合要求

function tipOfName() {
	var div = document.getElementById("user-name-div");
	removeSpan(div);
	var span = document.createElement("span");
	span.className = "tip";
	span.innerHTML = "请输入4-16位字符的用户名";
	div.appendChild(span);
}

function checkMail() {
	var mail = document.getElementById("mail").value,
		myRe = new RegExp(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/),
		input = document.getElementById("mail"),
		div = document.getElementById("mail-div");
	removeSpan(div);

	if (myRe.test(mail)) {
		input.className = "input-right";
		var span = document.createElement("span");
		span.className = "right";
		span.innerHTML = "验证通过";
		div.appendChild(span);
		return true;
	} else if (mail == "") {
		var span = document.createElement("span");
		span.className = "error";
		span.innerHTML = "请输入邮箱!";
		div.appendChild(span);
		document.getElementById("mail").className = "input-error";
		return false;
	} else {
		var span = document.createElement("span");
		span.className = "error";
		span.innerHTML = "请输入正确的邮箱格式!";
		div.appendChild(span);
		document.getElementById("mail").className = "input-error";
		return false;
	}
}

function tipOfMail() {
	var div = document.getElementById("mail-div");
	removeSpan(div);
	var span = document.createElement("span");
	span.className = "tip";
	span.innerHTML = "请输入正确的邮箱";
	div.appendChild(span);
}

function checkPhone() {
	var phone = document.getElementById("phone").value,
		myRe = new RegExp(/^[1][3,4,5,7,8][0-9]{9}$/),
		input = document.getElementById("phone"),
		div = document.getElementById("phone-div");
	removeSpan(div);
	if (myRe.test(phone)) {
		input.className = "input-right";
		var span = document.createElement("span");
		span.className = "right";
		span.innerHTML = "验证通过";
		div.appendChild(span);
		return true;
	} else if (phone == "") {
		var span = document.createElement("span");
		span.className = "error";
		span.innerHTML = "请输入手机号码!";
		div.appendChild(span);
		input.className = "input-error";
		return false;
	} else {
		var span = document.createElement("span");
		span.className = "error";
		span.innerHTML = "请输入正确的手机号码!";
		div.appendChild(span);
		input.className = "input-error";
		return false;
	}
}

function tipOfPhone() {
	var phone = document.getElementById("phone").value,
		myRe = new RegExp(/^[1][3,4,5,7,8][0-9]{9}$/),
		div = document.getElementById("phone-div");
	removeSpan(div);
	var span = document.createElement("span");
	span.className = "tip";
	span.innerHTML = "请输入正确的手机号码";
	div.appendChild(span);
}

function checkPassword1() {
	var password1 = document.getElementById("password1").value,
		div = document.getElementById("password1-div"),
		input = document.getElementById("password1"),
		myRe = new RegExp(/(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{6,16}/i);
	removeSpan(div);
	if (password1 == "") {
		var span = document.createElement("span");
		span.className = "error";
		span.innerHTML = "请输入密码!";
		div.appendChild(span);
		input.className = "input-error";
		return false;
	} else if (myRe.test(password1)) {
		var span = document.createElement("span");
		span.className = "right";
		span.innerHTML = "验证通过";
		div.appendChild(span);
		input.className = "input-right";
		return true;
	} else {
		var span = document.createElement("span");
		span.className = "error";
		span.innerHTML = "请输入6-16位的密码，密码至少由字母、数字和符号组成!";
		div.appendChild(span);
		return false;
	}
}

function tipOfPassword1() {
	var div = document.getElementById("password1-div");
	removeSpan(div);
	var span = document.createElement("span");
	span.className = "tip";
	span.innerHTML = "请输入6-16位的密码，密码至少由字母、数字和符号组成。";
	div.appendChild(span);
}

function checkPassword2() {
	var word1 = document.getElementById("password1").value,
		word2 = document.getElementById("password2").value,
		input = document.getElementById("password2"),
		div2 = document.getElementById("password2-div");
	removeSpan(div2);
	if (word2 == "") {
		var span = document.createElement("span");
		span.className = "error";
		span.innerHTML = "请再次输入密码!";
		div2.appendChild(span);
		input.className = "input-error";
		return false;
	} else if (word1 != word2) {
		var span = document.createElement("span");
		span.className = "error";
		span.innerHTML = "两次输入的密码不一致!";
		div2.appendChild(span);
		input.className = "input-error";
		return false;
	} else {
		var span = document.createElement("span");
		span.className = "right";
		span.innerHTML = "验证通过";
		div2.appendChild(span);
		input.className = "input-right";
		return true;
	}
}

function tipOfPassword2() {
	var div = document.getElementById("password2-div");
	removeSpan(div);
	var span = document.createElement("span");
	span.className = "tip";
	span.innerHTML = "请再次输入密码";
	div.appendChild(span);
}

function check() {
	if (checkName() && checkMail() && checkPhone() && checkPassword1() && checkPassword2()) {
		alert("提交成功");
		return true;
	} else {
		alert("提交失败，请重新填写");
		return false;
	}
}

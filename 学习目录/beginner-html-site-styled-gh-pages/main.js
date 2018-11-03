var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').onclick = function() {
    //alert('Ouch! Stop poking me!');
}

var myImage=document.querySelector('img');
myImage.onclick=function(){
	var mySrc=myImage.getAttribute('src');
	if (mySrc==='images/firefox-icon.png') {
		myImage.setAttribute('src','images/kesuen.png');
	}else{
		myImage.setAttribute('src','images/firefox-icon.png');
	}
}

var myButton = document.querySelector('button');

function setUserName(){
	var myName=prompt('输入你的名字');
	// 一个叫 localStorage 的 API ，它允许我们将数据存储在浏览器里以供后续获取因为用户名是存放在 localStorage 里的，它会持续到网站关闭，所以这段个性化的信息在你重新打开浏览器时将仍然在这！
	localStorage.setItem('name',myName);
	myHeading.textContent='浏览器是 :'+myName;

}

if (!localStorage.getItem('name')) {
	setUserName();
}else{
	var storedName=localStorage.getItem('name');
	myHeading.textContent='浏览器是 :'+storedName;
}
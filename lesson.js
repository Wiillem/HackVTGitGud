var user = JSON.parse(localStorage.getItem("user"));
var lessonIndex = localStorage.getItem("index");
console.log(user);
render();

function render(){
	document.getElementById("userName").innerHTML = user.name;
	document.getElementById("userRole").innerHTML = user.status;
	document.getElementById("className").innerHTML = user.lessonsData[lessonIndex].name;
}
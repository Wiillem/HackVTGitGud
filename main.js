var user = {};
user.name = "";
user.status = "";
user.pic = '<img src="img/userImg.png">';
user.lessons = [];
user.lessonsEnroled = [];

function login(){
	user.name = document.getElementById("userName").value;
	if(document.getElementById("r1").checked){
		user.status = "Teacher";
	} else {
		user.status = "Student";
	}
	localStorage.setItem('user', JSON.stringify(user));
	window.location = "home.html";
}
var user = {};
user.name = "";
user.status = "";
user.pic = '<img src="img/userImg.png">';
user.lessons = [];

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

function addLesson(lesson){
	user.lessons.push(lesson);
}
function removeLesson(lessonId){
	for (var i = 0; i < user.lessons.length; i++){
		if (user.lessons[i].id == lessonId){
			user.lessons.splice(i, 1);
		}
	}
}
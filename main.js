var user = {};
user.name = "";
user.status = "";
user.pic = '<img src="img/userImg.png">';
user.lessons = [];

function login(){
	user.name = document.getElementById("userName").value;
	if(document.getElementById("r1").checked){
		user.status = "teacher";
	} else {
		user.status = "student";
	}
	console.log(user);
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
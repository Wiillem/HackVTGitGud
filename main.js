var user = {};
user.name = "";
user.status = "";
user.pic = '<img src="img/userImg.png">';
user.lessons = ['<div class="lesson_result"><a>English: Creative Writing</a><button onclick="addLesson(0)">Enroll</button></div>',
 '<div class="lesson_result"><a>Mathematicis: Algebra for fun</a><button onclick="addLesson(1)">Enroll</button></div>',
 '<div class="lesson_result"><a>Science: Chemistry 200</a><button onclick="addLesson(2)">Enroll</button></div>'];
user.lessonsEnrolled = [];

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
var user = {};
user.name = "";
user.status = "";
user.pic = '<img src="img/userImg.png">';
user.lessons = ['<div class="lesson_result"><a onclick="toLesson(0)">English: Creative Writing</a><button onclick="addLesson(0)">Enroll</button></div>',
 '<div class="lesson_result"><a onclick="toLesson(1)">Mathematicis: Algebra for fun</a><button onclick="addLesson(1)">Enroll</button></div>',
 '<div class="lesson_result"><a onclick="toLesson(2)">Science: Chemistry 200</a><button onclick="addLesson(2)">Enroll</button></div>'];

var tempObj = [{
 			name: "English: Creative Writing",
 			decription: "Enter Class Description Here.Enter Class Description Here.Enter Class Description Here.Enter Class Description Here.",
 			teacher: "Professor Plum"
 		},
 		{
 			name: "Mathematicis: Algebra for fun",
 			decription: "Enter Class Description Here.Enter Class Description Here.Enter Class Description Here.Enter Class Description Here.",
 			teacher: "Professor Dumbledore"
 		},
 		{
 			name: "Science: Chemistry 200",
 			decription: "Enter Class Description Here.Enter Class Description Here.Enter Class Description Here.Enter Class Description Here.",
 			teacher: "Snape"
 		}];
console.log(tempObj);
user.lessonsData = tempObj;
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
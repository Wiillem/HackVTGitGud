var user = {};
user.name = "";
user.status = "";
user.pic = '<img src="img/userImg.png">';
user.lessons = ['<div class="lesson_result"><a onclick="toLesson(0)">English: Creative Writing</a><span class="enrolledSpan">Enrolled: 12</span><button onclick="addLesson(0)">Enroll</button></div>',
 '<div class="lesson_result"><a onclick="toLesson(1)">Mathematics: Algebra For Fun</a><span class="enrolledSpan">Enrolled: 83</span><button onclick="addLesson(1)">Enroll</button></div>',
 '<div class="lesson_result"><a onclick="toLesson(2)">Science: Chemistry 200</a><span class="enrolledSpan">Enrolled: 56</span><button onclick="addLesson(2)">Enroll</button></div>'];

var tempObj = [{
 			name: "English: Creative Writing",
 			decription: "This is a sample class, this is where a teacher can put a description of their class for students",
 			teacher: "Professor Plum"
 		},
 		{
 			name: "Mathematics: Algebra For Fun",
 			decription: "This is a sample class, this is where a teacher can put a description of their class for students",
 			teacher: "Professor Dumbledore"
 		},
 		{
 			name: "Science: Chemistry 200",
 			decription: "This is a sample class, this is where a teacher can put a description of their class for students",
 			teacher: "Brofessor Snape"
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

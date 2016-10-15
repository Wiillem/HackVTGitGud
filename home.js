var user = JSON.parse(localStorage.getItem("user"));
console.log(user);
var lessons = ['<div class="lesson_result"><h3>English: Creative Writing</h3><button onclick="addLesson(0)">Enroll</button></div>',
 '<div class="lesson_result"><h3>Mathematicis: Algebra for fun</h3><button onclick="addLesson(1)">Enroll</button></div>',
 '<div class="lesson_result"><h3>Science: Chemistry 200</h3><button onclick="addLesson(2)">Enroll</button></div>'];

render();

function addLesson(index){
	user.lessons.push(lessons[index]);
	render();
}
function removeLesson(index){
	user.lessons.splice(index, 1);
}

function render(){
	document.getElementById("userName").innerHTML = user.name;
	document.getElementById("userRole").innerHTML = user.status;
	var lessonsResults = document.getElementById("lessonsResults");
	lessonsResults.innerHTML = "";
	for (var i = 0; i < lessons.length; i++){
		if(user.lessonsEnrolled.indexOf(i) == -1){
			lessonsResults.innerHTML += lessons[i];
		}
	}
}
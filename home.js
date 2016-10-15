var user = JSON.parse(localStorage.getItem("user"));
console.log(user);

render();

function addLesson(index){
	user.lessonsEnrolled.push(index);
	render();
}
function removeLesson(index){
	user.lessons.splice(index, 1);
	render();
}

function render(){
	document.getElementById("userName").innerHTML = user.name;
	document.getElementById("userRole").innerHTML = user.status;
	var lessonsResults = document.getElementById("lessonsResults");
	lessonsResults.innerHTML = "";
	for (var i = 0; i < user.lessons.length; i++){
		if(user.lessonsEnrolled.indexOf(i) == -1){
			lessonsResults.innerHTML += user.lessons[i];
		}
	}
	var lessonsCurrent = document.getElementById("lessonsCurrent");
	lessonsCurrent.innerHTML = "";
	for (var i = 0; i < user.lessons.length; i++){
		if(user.lessonsEnrolled.indexOf(i) != -1){
			lessonsCurrent.innerHTML += user.lessons[i];
		}
	}
}
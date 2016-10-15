var user;
user.name = "from input box";
user.status = "radial buttons teacher or student";
user.pic = '<img src="img/userImg.png">';
user.lessons = [];

function addLesson(lesson){
	user.lessons.push(lesson);
}
function removeLesson(lessonId){
	for (var i = 0; i < user.lessons.length){
		if (.user.lessons[i].id == lessonId){
			user.lessons.splice(i, 1);
		}
	}
} 
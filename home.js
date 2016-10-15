var user = JSON.parse(localStorage.getItem("user"));
console.log(user);
document.getElementById("userName").innerHTML = user.name;
document.getElementById("userRole").innerHTML = user.status;
var lessons = ['<li><a href="www.google.com">English: Creative Writing</a></li>',
 '<li><a href="www.google.com">Mathematicis: Algebra for fun</a></li>',
 '<li><a href="www.google.com">Science: Chemistry 200</a></li>'];
var lessonsResults = document.getElementById("lessonsResults");
lessonsResults.innerHTML = "";
for (var i = 0; i < lessons.length; i++){
	lessonsResults.innerHTML += lessons[i];
}
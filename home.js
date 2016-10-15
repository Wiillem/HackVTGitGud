var user = JSON.parse(localStorage.getItem("user"));
console.log(user);
document.getElementById("userName").innerHTML = user.name;
document.getElementById("userRole").innerHTML = user.status;
var classArr = [];

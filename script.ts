

let btn = document.getElementById("btn");

function getGrade() {
let grade = document.getElementById("gradeNum").value;
if (grade >= 90) {
document.getElementById("gradeLetter").innerHTML = "You got an A!";
} else if(grade < 90 && grade >= 80){
document.getElementById("gradeLetter").innerHTML = "You got a B!";
} else if (grade < 80 && grade >= 70){
document.getElementById("gradeLetter").innerHTML = "You got a C!";
} else if(grade < 70){
document.getElementById("gradeLetter").innerHTML = "You got an F! Study more!";
} 
};

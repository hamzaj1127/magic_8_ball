var answers = ["A thing is not necessarily true because badly uttered, nor false because spoken magnificently", 
"If you would attain to what you are not yet, you must always be displeased by what you are. For where you are pleased with yourself thereyou have remained. Keep adding, keep walking, keep advancing.", 
"The purpose of all war is peace.", 
"God had one Son on earth without sin, but never one without suffering.",
"It was pride that changed angels into devils it is humility that makes men as angels.", 
"To many, total abstinence is easier than perfect moderation.", 
"Free curiosity is of more value than harsh discipline.", 
];

window.onload = function() {
var eight = document.getElementById("eight");
var answer = document.getElementById("answer");
var eightball = document.getElementById("eight-ball");
var question = document.getElementById("question");

eightball.addEventListener("click", function() {
if (question.value.length < 1) {
alert('Enter a question!');
} else {
eight.innerText = "";
var num = Math.floor(Math.random() * Math.floor(answers.length));
answer.innerText = answers[num];
}
});
};
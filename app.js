prompt("What is your name?")
prompt("What is his/her name?")

var loveScore = Math.random() * 100;
loveScore =Math.floor(loveScore) + 1;
if (loveScore >70) {
    alert("Your love score is " + loveScore +" %" + " you love each other like Romeo and Juliet");
} 
if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + " %")
}
if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%" + "you go together like oil and water");
}
else {
    alert("Your love score is " + loveScore + "%")
}
alert("Thank you, please work on your love life")


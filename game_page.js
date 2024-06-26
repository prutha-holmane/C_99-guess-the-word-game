player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

var player1_score=0
var player2_score=0
document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_q").innerHTML="question turn"+player1_name;
document.getElementById("player_a").innerHTML="answer turn"+player2_name;
function send() {
  word=document.getElementById("word").value;
  word1=word.toLowerCase()  
  char1=word1.charAt(1)
char2=word1.charAt(Math.floor(word1.length/2))
char3=word1.charAt(word1.length-1)
replace1=word1.replace(char1,"_")
replace2=replace1.replace(char2,"_")
replace3=replace2.replace(char3,"_")
question="<h4 id='word_display'>"+replace3+"</h4>"
var input="<br>answer:<input type='text' id='input_check_box'>"
btn="<br><br> <button class='btn btn-info' onclick='check()'>check</btn>"
document.getElementById("output").innerHTML=question+input+btn
}
answer_turn="player2"
question_turn="player1"

function check() {
  answer=document.getElementById("input_check_box").value;
  answer1=answer.toLowerCase()
  if (answer1==word1) {
  if (answer_turn=="player1") {
   player1_score=player1_score+1
   document.getElementById("player1_score").innerHTML=player1_score 
  }  
  else{
  player2_score=player2_score+1
  document.getElementById("player2_score").innerHTML=player2_score  
  }
  }
  if (question_turn=="player1") {
  question_turn="player2"
  document.getElementById("player_q").innerHTML="question_turn"+ player2_name  
  }
  else{
  question_turn="player1" 
  document.getElementById("player_q").innerHTML="question_turn"+ player1_name 
  }
  if (answer_turn=="player1") {
  answer_turn="player2" 
document.getElementById("player_a").innerHTML="answer_turn"+ player2_name
  }
  else{
  answer_turn="player1" 
  document.getElementById("player_a").innerHTML="answer_turn"+ player1_name 
  }
}
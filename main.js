let QuestionList = []


const questionTemplate ={
  question: "What is your question",
  trueanswer: "this is your answer",
  falseAnswer1: "don't pick me",
  falseAnswer2: "don't pick me either"
}



const h1q = Object.create(questionTemplate)

h1q.question="What does the H1 tag do?"
h1q.trueanswer="It formats the style inbetween the tags as header 1 which is changeable in the CSS"
h1q.falseAnswer1="magic"
h1q.falseAnswer2="Drives my car"

const divq = Object.create(questionTemplate)

divq.question="What does the div tag do?"
divq.trueanswer="It creates an empty container which I can manipulate in CSS"
divq.falseAnswer1="makes my lunch"
divq.falseAnswer2="Runs the world"



//console.log(h1q)

//console.log(h1q)


//console.log(questionTemplate.children)


//LIST OPBOUWEN
//QuestionList[0] = h1q.question
//QuestionList[1] = divq.question

//QuestionList.push(h1q.question, divq.question)
console.log(QuestionList)

//Push to array QuestionList
var listElement = document.getElementById('listQuestions');

var updateDataList = function (){
  listElement.innerHTML =''

  for (let i=0;i<QuestionList.length;i++) {
    const item = QuestionList[i];
  const newCardItem = document.createElement("li");
  newCardItem.id = i;
  newCardItem.addEventListener("click", function() {

  });
  var newCardTitle = document.createTextNode(item.question);



  newCardItem.appendChild(newCardTitle);
  listElement.appendChild(newCardItem);


  }
}
QuestionList.push(h1q, divq)
updateDataList()


var links = function () {
  for (var i = 0; i < QuestionList.length; i++) {
    var questionCard = document.getElementById(i);
    questionCard.replaceChild(QuestionList[i],);
    console.log(test)
  }
}


let replaceQuestion=function(i){

//console.log(QuestionList[0].question)
let question = QuestionList[i].question
//question.string
console.log(question);
let askTheQuestion= document.getElementById("Question")
askTheQuestion.innerHTML=""
let getTheQuestion=document.createTextNode(question)
askTheQuestion.innerHTML=question
}

let replaceAnswers=function(i){
  let answerArray = [QuestionList[i].trueanswer, QuestionList[i].falseAnswer1, QuestionList[i].falseAnswer2]
  correctAnswer= QuestionList[i].trueanswer
let whatIsAnswer1= document.getElementById("possibleAnswers")
whatIsAnswer1.innerHTML=""
let j=0

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

answerArrey =shuffle(answerArray)

answerArray.forEach(function (item) {

    let newListItem = document.createElement("li");
    let newContent = document.createTextNode([item]);
    newListItem.appendChild(newContent);
    newListItem.id = "a"+j
    j++
    console.log(newListItem)
    whatIsAnswer1.appendChild(newListItem)

  })
}
replaceQuestion(0)
replaceAnswers(0)
let checkAnswer=function(checkingAnswer){
  if (correctAnswer==checkingAnswer){
    window.alert("correct");
    return true
  }else{
    window.alert("incorrect");
    return false
  }
}
let answer1= document.getElementById("a0");
let answer2= document.getElementById("a1");
let answer3= document.getElementById("a2");
let pickedAnswer
answer1.addEventListener("click", function(){ pickedAnswer=answer1.innerHTML;checkAnswer(pickedAnswer);})
answer2.addEventListener("click", function(){ pickedAnswer=answer2.innerHTML;checkAnswer(pickedAnswer);})
answer3.addEventListener("click", function(){ pickedAnswer=answer3.innerHTML;checkAnswer(pickedAnswer);})
console.log(answer1.innerHTML);

let q1= document.getElementById("0");
let q2= document.getElementById("1");

q1.addEventListener("click", function(){replaceAnswers(0);replaceQuestion(0) })
q2.addEventListener("click", function(){ replaceAnswers(1);replaceQuestion(1) })


//let q= document.getElementById("i");
//q.addEventListener("click", function(){replaceAnswers(i);replaceQuestion(i) })

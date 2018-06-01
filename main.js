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


console.log(h1q)

console.log(questionTemplate.children)


//LIST OPBOUWEN
QuestionList.push(h1q, divq)
console.log(QuestionList)

//Push to array QuestionList
var listElement = document.getElementsByClassName('QuestionList');

var updateData = function (){
  listElement[0].innerHTML =''

  for (i=0;i<QuestionList.length;i++) {

  var newCardItem = document.createElement("li");
  var newCardTitle = document.createTextNode(QuestionList[i].question);
  console.log(QuestionList[i].question)


  newCardItem.appendChild(newCardTitle);
  listElement.appendChild(newCardItem);


  }
}

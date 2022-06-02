
import { getUserInfos, validateForm, showScore, askQuestion, TimeAnimation, checkAnswer, shurffleQuestions, fluidAnimation, SetTimeOut, hideContainer, showContainer, setDisabled } from "./functions.js"

import { questions, userInfosForm, welcomeArea, questionArea, finishedArea, questionsForm, formAnswers, timer, next, quit, showTime, parentTimeShow } from "./constants.js";


let nbrQuestons = 1
let score = 0
let animation
let timeOut
let question
let user = null
let shurffeQuestions


// able the next btn after one answer choosed
for(let answer of questionsForm.elements.answer){
  answer.addEventListener("change", function(e){
    let nextBtn = document.querySelector("#next")
    nextBtn.setAttribute("disabled", false)
    next.style.background = "rgba(2, 138, 61, 1)"
})
}

userInfosForm.addEventListener("submit", function(e){
  e.preventDefault()

  shurffeQuestions = shurffleQuestions(questions)
  let valid = validateForm(this)
  if(valid){
    user = getUserInfos(this)
    this.reset()
    hideContainer(welcomeArea)
    showContainer(questionArea)
    question = askQuestion(nbrQuestons, formAnswers, shurffeQuestions)
    animation = TimeAnimation(showTime)
    timeOut = SetTimeOut()
    fluidAnimation(parentTimeShow)
  }
})


next.addEventListener("click", function(e){
  let checkedInput = document.querySelector(".form-answer input:checked")
  const isDisabled = this.getAttribute("disabled") == "true"

  if(checkedInput){
    let userAnswer = checkedInput.nextElementSibling.textContent
    questionsForm.reset()
    if(checkAnswer(question, userAnswer)) score += 1
  }

  if(!isDisabled){
    fluidAnimation(parentTimeShow)
    clearTimeout(timeOut)
    clearInterval(animation)
    timeOut = SetTimeOut()
    if(nbrQuestons < 15){
      nbrQuestons += 1
      question = askQuestion(nbrQuestons, formAnswers, shurffeQuestions)
      animation = TimeAnimation(showTime)
      if(nbrQuestons == 15){
        this.textContent = "Terminer"
      }
    }else{
      hideContainer(questionArea)
      showContainer(finishedArea)
      showScore(user, score)
    }
  }

  setDisabled(this)
})

quit.addEventListener("click", function(){
  clearInterval(animation)
  clearTimeout(timeOut)
  hideContainer(questionArea)
  showContainer(finishedArea)
  showScore(user, score)
})
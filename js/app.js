// Import all functions 
import { getUserInfos, validateForm, showScore, askQuestion, TimeAnimation, checkAnswer, shurffleQuestions, fluidAnimation, SetTimeOut, hideContainer, showContainer } from "./functions.js"

// Import all constants 
import { questions, userInfosForm, welcomeArea, questionArea, finishedArea, questionsForm, formAnswers, timer, next, quit, showTime, parentTimeShow } from "./constants.js";


let nbrQuestons = 1
let score = 0
let animation
let timeOut
let question
let user = null


// able the next btn after one answer choosed
for(let answer of questionsForm.elements.answer){
  answer.addEventListener("change", function(e){
    let nextBtn = document.querySelector("#next")
    nextBtn.setAttribute("disabled", false)
    next.style.background = "rgba(2, 138, 61, 1)"
})
}

userInfosForm.addEventListener("submit", function(e){
  let shurffeQuestions = shurffleQuestions(questions)
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
    next.addEventListener("click", function(e){
      if(this.getAttribute("disabled") == "false"){
        fluidAnimation(parentTimeShow)
        clearTimeout(timeOut)
        clearInterval(animation)
        timeOut = SetTimeOut()
      }
      let userChoice = document.querySelector(".form-answer input:checked")
      if(userChoice){
        let userAnswer = userChoice.nextElementSibling.textContent
        questionsForm.reset()
        if(checkAnswer(question, userAnswer)) score += 1
        this.style.background = "rgba(2, 138, 61, .42)"
        if(this.getAttribute("disabled") == "false"){
          if(nbrQuestons < 15){
            nbrQuestons += 1
            question = askQuestion(nbrQuestons, formAnswers, shurffeQuestions)
            animation = TimeAnimation(showTime)
          }else{
            hideContainer(questionArea)
            showContainer(finishedArea)
            showScore(user, score)
          }
        }
        this.setAttribute("disabled", true)
      }else{
        if(this.getAttribute("disabled") == "false"){
          if(nbrQuestons < 15){
            nbrQuestons += 1
            question = askQuestion(nbrQuestons, formAnswers, shurffeQuestions)
            animation = TimeAnimation(showTime)
          }else{
            hideContainer(questionArea)
            showContainer(finishedArea)
            showScore(user, score)
          }
        }
      }
    })
  }
  e.preventDefault()
})

quit.addEventListener("click", function(e){
  clearInterval(animation)
  clearTimeout(timeOut)
  hideContainer(questionArea)
  showContainer(finishedArea)
  showScore(user, score)
})
// Import all functions 
import { getUserInfos, validateForm, showScore, askQuestion, TimeAnimation, checkAnswer, shurffleQuestions, fluidAnimation, SetTimeOut, hideAndShow } from "./functions.js"

// Import all constants 
import { questions, userInfosForm, welcomeArea, questionArea, finishedArea, questionsForm, formAnswers, timer, next, quit, showTime, parentTimeShow } from "./constants.js";


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
    const user = getUserInfos(this)
    this.reset()
    hideAndShow(welcomeArea, questionArea)

    let nbrQuestons = 1
    let score = 0
    let question = askQuestion(nbrQuestons, formAnswers, shurffeQuestions)
    let animation = TimeAnimation(showTime)
    let timeOut = SetTimeOut()
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
            hideAndShow(questionArea, finishedArea)
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
            hideAndShow(questionArea, finishedArea)
            showScore(user, score)
          }
        }
      }
    })
    quit.addEventListener("click", function(e){
      clearInterval(animation)
      clearTimeout(timeOut)
      hideAndShow(questionArea, finishedArea)
      showScore(user, score)
    })
  }
  e.preventDefault()
})
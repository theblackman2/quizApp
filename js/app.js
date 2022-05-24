// Import all functions 
import { getUserInfos, validateForm, showScore, askQuestion, TimeAnimation, checkAnswer, shurffleQuestions, fluidAnimation, SetTimeOut, hideAndShow } from "./functions.js"

// Import all constants 
import { questions, userInfosForm, welcomeArea, questionArea, finishedArea, questionsForm, formAnswers, timer, next, quit } from "./constants.js";


// able the next btn after answer choosed
for(let answer of questionsForm.elements.answer){
  answer.addEventListener("change", function(e){
    let nextBtn = document.querySelector("#next")
    nextBtn.setAttribute("disabled", false)
    next.style.background = "rgba(2, 138, 61, 1)"
})
}

userInfosForm.addEventListener("submit", function(e){
  let shuAnswers = shurffleQuestions(questions)
  let valid = validateForm(this)
  if(valid){
    const user = getUserInfos(this)
    this.reset()
    hideAndShow(welcomeArea, questionArea)

    let nbrQuestons = 1
    let score = 0
    let question = askQuestion(nbrQuestons, formAnswers, shuAnswers)
    let animation = TimeAnimation(timer)
    let timeOut = SetTimeOut()
    fluidAnimation()
    next.addEventListener("click", function(e){
      if(this.getAttribute("disabled") == "false"){
        fluidAnimation()
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
            question = askQuestion(nbrQuestons, formAnswers, shuAnswers)
            animation = TimeAnimation(timer)
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
            question = askQuestion(nbrQuestons, formAnswers, shuAnswers)
            animation = TimeAnimation(timer)
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
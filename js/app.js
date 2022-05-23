// Import all functions 
import { getUserInfos, validateForm, showScore, askQuestion, TimeAnimation, checkAnswer, getQuestion, fluidAnimation } from "./functions.js"

// Import all constants 
import { questions, userInfosForm, welcomeArea, questionArea, finishedArea, questionsForm, formAnswers, allAnswers, timer, next, quit } from "./constants.js";


// able the next btn after answer choosed
for(let answer of questionsForm.elements.answer){
  answer.addEventListener("change", function(e){
    let nextBtn = document.querySelector("#next")
    nextBtn.setAttribute("disabled", false)
    next.style.background = "rgba(2, 138, 61, 1)"
})
}

userInfosForm.addEventListener("submit", function(e){
  let q = getQuestion(questions)
  let valid = validateForm(this)
  if(valid){
    const user = getUserInfos(this)
    this.reset()
    welcomeArea.classList.add("hide")
    questionArea.classList.remove("hide")

    let nbrQuestons = 1
    let score = 0
    let question = askQuestion(nbrQuestons, formAnswers, q)
    let animation = TimeAnimation(timer)
    let timeOut = setTimeout(() => {
      next.setAttribute("disabled", "false")
      next.click()
      next.setAttribute("disabled", "true")
    }, 60000)
    fluidAnimation()
    next.addEventListener("click", function(e){
      if(this.getAttribute("disabled") == "false"){
        fluidAnimation()
        clearTimeout(timeOut)
        clearInterval(animation)
        timeOut = setTimeout(() => {
          next.setAttribute("disabled", "false")
          next.click()
          next.setAttribute("disabled", "true")
        }, 60000)
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
            question = askQuestion(nbrQuestons, formAnswers, q)
            animation = TimeAnimation(timer)
          }else{
            questionArea.classList.add("hide")
            finishedArea.classList.remove("hide")
            showScore(user, score, questionArea, finishedArea)
          }
        }
        this.setAttribute("disabled", true)
      }else{
        if(this.getAttribute("disabled") == "false"){
          if(nbrQuestons < 15){
            nbrQuestons += 1
            question = askQuestion(nbrQuestons, formAnswers, q)
            animation = TimeAnimation(timer)
          }else{
            showScore(user, score, questionArea, finishedArea)
          }
        }
      }
    })
    quit.addEventListener("click", function(e){
      clearInterval(animation)
      clearTimeout(timeOut)
      showScore(user, score, questionArea, finishedArea)
    })
  }
  e.preventDefault()
})
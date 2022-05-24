
/**
 * 
 * @param {DOMElement} formInfos The form where we get user infos
 * @returns The user infos from the form
 */
 function getUserInfos(formInfos){
  const userName = formInfos.elements.name.value
  const userEmail = formInfos.elements.email.value
  const unserInfos = [userName, userEmail]

  return unserInfos
}

/**
 * 
 * @param {DOMElement} form The form to validate
 * @returns True if validate and false if not
 */
 function validateForm(form){
  let validate = true
  Array.from(form.elements).forEach(element => {
    if(!element.value){
      element.nextElementSibling.style.display = "block"
      element.style.border = "1px solid #f00"
      validate = false
    }else{
      if(element.type != "submit"){
        element.style.border = "1px solid #555555"
        element.nextElementSibling.style.display = "none"
      }
    }
  })
  let email = form.elements["email"]
  if(!checkEmail(email.value)){
    validate = false
    email.nextElementSibling.style.display = "block"
    email.style.border = "1px solid #f00"
  }
  return validate
}

/**
 * 
 * @param {Array} arr The array to shurffle
 * @returns The shurffled array
 */
function shurffle(arr){
  return arr.sort(()=>Math.random()-0.5)
}



/**
 * 
 * @param {Array} user The current user
 * @param {Int} score The score of the user
 */
 function showScore(user, score){
  const name = document.querySelector(".big-name")
  name.textContent = user[0]
  const email = document.querySelector(".user-email")
  email.textContent = user[1]
  const scoreArea = document.querySelector(".user-score")
  scoreArea.textContent = score

  const succesIcon = document.querySelector(".success")
  const wrong = document.querySelector(".wrong")
  if(score <= 7){
    wrong.classList.remove("hide")
    succesIcon.classList.add("hide")
  }else{
    succesIcon.classList.remove("hide")
    wrong.classList.add("hide")
  }
  
}


/**
 * 
 * @param {Array} questions The normal array of questions
 * @returns Array of shurffled questions
 */
 function shurffleQuestions(questions){
   return shurffle(questions)
}


/**
 * 
 * @param {DOMElement} formAnswers The form where wille be displayed answers
 * @param {Object} question The question to display
 * @param {number} n The number of the question
 */
 function showQuestion(formAnswers, question, n){
  const questionParagraph = document.querySelector(".question")
  const nb = document.querySelector(".nb")

  nb.textContent = n
  questionParagraph.textContent = question["question"]
  let shurffleAnswers = shurffle(question["answers"])

  Array.from(formAnswers.elements).forEach((element, index) => {
    element.nextElementSibling.textContent = shurffleAnswers[index]
  })
}


/**
 * 
 * @param {number} n The number of the question
 * @param {DOMElement} formAnswers The form where will be diqplayed the question
 * @param {Array} question The sorted array of questions
 * @returns The question asked
 */
 function askQuestion(n, formAnswers, question){
  showQuestion(formAnswers, question[n-1], n)
  return question[n-1]
}


/**
 * 
 * @param {DOMElement} timer The element to animate
 * @returns {Event} SetInterval in this case
 */
 function TimeAnimation(timer){
  const showTime = document.querySelector(".show-time")
  let t = 60
  showTime.textContent = t
  timer.style.background = "#028A3D"
  let animation = setInterval(() => {
    t--
    showTime.textContent = t
    if(t == 0){
      clearInterval(animation)
    }
  }, 1000)

  return animation
}

/**
 * 
 * @param {Object} question The current question
 * @param {String} userAnswer The answer choosed by the user
 * @returns If the user answer matches the correct answer
 */
 function checkAnswer(question, userAnswer){
  let correctAnswer = ""
  question["answers"].forEach((q) => {
    if(q[q.length - 1] == " ") correctAnswer = q
  })

  return (userAnswer == correctAnswer)
}

/**
 * 
 * @param {String} email The str email to validate
 * @returns True or false if valid email or not
 */
function checkEmail(email){
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(String(email).toLowerCase())
}


function fluidAnimation(){
  const timeShow = document.createElement("span")
  timeShow.classList.add("time-spend")
  timeShow.setAttribute("id", "time-spend")
  
  const parentTimeShow = document.querySelector(".time-under")
  parentTimeShow.removeChild(parentTimeShow.firstElementChild)
  parentTimeShow.appendChild(timeShow)
}

function SetTimeOut(){
  return setTimeout(() => {
    next.setAttribute("disabled", "false")
    next.click()
    next.setAttribute("disabled", "true")
  }, 60000)
}


/**
 * 
 * @param {DOMElement} toHide The section to hide
 * @param {DOMElement} toShow The section to show
 */
function hideAndShow(toHide, toShow){
  toHide.classList.add("hide")
  toShow.classList.remove("hide")
}

export { getUserInfos, validateForm, shurffleQuestions, showScore, askQuestion, TimeAnimation, checkAnswer, checkEmail, fluidAnimation, SetTimeOut, hideAndShow }

/**
 * 
 * @param {DOMElement} 
 * @returns User{name, email}
 */
 function getUserInfos(formInfos){
   const user = {
     name : formInfos.elements.name.value,
     email: formInfos.elements.email.value
   }
  return user
}


function makeInputInvalid(element, message){
  element.nextElementSibling.style.display = "block"
  element.nextElementSibling.textContent = message
  element.style.border = "1px solid #f00"
}

function makeInputValid(element){
  element.style.border = "1px solid #555555"
  element.nextElementSibling.style.display = "none"
}

/**
 * 
 * @param {String} email The str email to validate
 * @returns True or false if valid email or not
 */
function checkEmail(email){
  const validRegex = /[a-zA-Z0-9]+@[a-zA-Z0-9]+[.][a-zA-Z]+/
  return validRegex.test(email)
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
      makeInputInvalid(element, "N’oubliez pas de renseigner votre nom avant de commencer le Quiz.")
      validate = false
    }else{
      if(element.type != "submit"){
        makeInputValid(element)
      }
    }
  })
  const name = form.elements.name
  if(name.value.length && name.value.length < 2){
    makeInputInvalid(name, "Votre nom doit contenir au moins 2 caractères")
    validate = false
  }

  const email = form.elements.email
  if(email.value.length && !checkEmail(email.value)){
    makeInputInvalid(email, "Veillez renseigner une adresse email valide")
    validate = false
  }
  return validate
}

/**
 * 
 * @param {Array} arr The array to shurffle
 * @returns Shurffled array
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
  name.textContent = user.name
  const email = document.querySelector(".user-email")
  email.textContent = user.email
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
 * @param {Int} n The number of the question
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
 * @param {DOMElement} showTime Place to show time
 * @returns {Event} SetInterval in this case
 */
 function TimeAnimation(showTime){
  let t = 60
  showTime.textContent = t
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
 * @param {DOMElement} parentTimeShow The div parent of span of time spend
 */
function fluidAnimation(parentTimeShow){
  const timeShow = document.createElement("span")
  timeShow.classList.add("time-spend")
  timeShow.setAttribute("id", "time-spend")

  parentTimeShow.removeChild(parentTimeShow.firstElementChild)
  parentTimeShow.appendChild(timeShow)
}

/**
 * 
 * @returns SetTimeout of 60 seconds
 */
function SetTimeOut(){
  return setTimeout(() => {
    next.setAttribute("disabled", "false")
    next.click()
    next.setAttribute("disabled", "true")
  }, 60000)
}

/**
 * 
 * @param {DOMElement} container 
 */
function hideContainer(container){
  container.classList.add("hide")
}

/**
 * 
 * @param {DOMElement} container 
 */
function showContainer(container){
  container.classList.remove("hide")
}

function setDisabled(btn){
  btn.setAttribute("disabled", true)
  btn.style.background = "rgba(2, 138, 61, .42)"
}

export { getUserInfos, validateForm, shurffleQuestions, showScore, askQuestion, TimeAnimation, checkAnswer, checkEmail, fluidAnimation, SetTimeOut, hideContainer, showContainer, setDisabled }
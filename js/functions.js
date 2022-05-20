import questions from './questions.js';

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
 * @param {Array} user The current user
 * @param {Int} score The score of the user
 * @param {DOMElement} questionArea The current area where are displayed questions
 * @param {DOMElement} finishedArea The final area where will be displayed the score
 */
 function showScore(user, score, questionArea, finishedArea){
  questionArea.classList.add("hide")
  finishedArea.classList.remove("hide")
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
 * @param {Obejct} questions All the questions where we choose one question
 * @returns The question choosed in questions
 */
 function getQuestion(questions){
  let randomQuestion = Math.floor(Math.random() * 15) + 1
  return questions[randomQuestion]
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
  for(let i = 0; i < 4; i++){
    formAnswers.elements[i].nextElementSibling.textContent = question["answers"][i+1]
  }
}



/**
 * 
 * @param {number} n The number of the question
 * @param {DOMElement} formAnswers The form where will be diqplayed the question
 * @returns The question asked
 */
 function askQuestion(n, formAnswers){
  let question = getQuestion(questions)
  showQuestion(formAnswers, question, n)
  return question
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
  timer.style.width = "100%"
  let percent = 100
  timer.style.background = "#028A3D"
  let animation = setInterval(() => {
    percent = (t*100) / 60
    t--
    showTime.textContent = t
    if(t < 30) timer.style.background = "#EC880C"
    if(t < 15) timer.style.background = "red"
    if(t == 0){
      clearInterval(animation)
    }
    timer.style.width = percent + "%"
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
  for(let i = 0; i < Object.keys(question["answers"]).length; i++){
    let answer = question["answers"][i+1]
    if(answer[answer.length - 1] == " ") correctAnswer = answer
  }

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

export { getUserInfos, validateForm, getQuestion, showScore, askQuestion, TimeAnimation, checkAnswer, checkEmail }
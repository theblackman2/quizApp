const questions = {
  1 : {
    question: "Quel est le type d'un fichier javascript?",
    answers : {
      1 : ".ts",
      2 : ".jsx",
      3 : ".js ",
      4 : ".j"
    }
  },
  2 : {
    question: "Comment afficher un message dans la console du navigateur avec javacript?",
    answers : {
      1 : "console(message)",
      2 : "print(message)",
      3 : "console.print(message)",
      4 : "console.log(message) "
    }
  },
  3 : {
    question: "Dans quelle balise HTML se trouve le javascript?",
    answers : {
      1 : "script ",
      2 : "js",
      3 : "javascript",
      4 : "link"
    }
  },
  4 : {
    question: "Comment écrire un commentaire sur une ligne en javascript?",
    answers : {
      1 : "/* commentaire */",
      2 : "/** commentaire",
      3 : "// commentaire //",
      4 : "// commentaire "
    }
  },
  5 : {
    question: "Comment afficher un message d'alert sur le navigateur avec javascript?",
    answers : {
      1 : "alert(message) ",
      2 : "alertMessage(message)",
      3 : "alertMsg(message)",
      4 : "messageAlert(message)"
    }
  },
  6 : {
    question: "Lequel de ces framework est de javascript?",
    answers : {
      1 : "laravel",
      2 : "symfony",
      3 : "nod.js",
      4 : "vue.js "
    }
  },
  7 : {
    question: "Quel est le moyen correct d'utiliser \"If\" en javascript?",
    answers : {
      1 : "(if ...){...}",
      2 : "if(...){...} ",
      3 : "call if(...){...}",
      4 : "if(...)[...]"
    }
  },
  8 : {
    question: "Quel est le moyen correct de déclarer un tableau en javascript?",
    answers : {
      1 : "var names = [...] ",
      2 : "var names = array[...]",
      3 : "var names = '...', '...'",
      4 : "var names = [0] => \"...\", [1] => \"...\""
    }
  },
  9 : {
    question: "Comment trouver le max de x et y?",
    answers : {
      1 : "ceil(x, y)",
      2 : "max(x, y)",
      3 : "Math.max(x, y) ",
      4 : "top(x, y)"
    }
  },
  10 : {
    question: "Javascript ne peut pas changer la balise HTML?",
    answers : {
      1 : "Si ",
      2 : "Non",
      3 : "Ce n'est pas correct",
      4 : "Pour certaines balises seulement"
    }
  },
  11 : {
    question: "On peut définir n'importe quel style d'une balise HTML avec Javascript",
    answers : {
      1 : "Oui",
      2 : "Non",
      3 : "Oui, mais ce n'est pas recommandé ",
      4 : "Oui, mais pas pour toutes les balises"
    }
  },
  12 : {
    question: "Comment déclarer un objet avec Javascript?",
    answers : {
      1 : "var ob = new Object()",
      2 : "var ob = Object()",
      3 : "var ob = {} ",
      4 : "var ob = []"
    }
  },
  13 : {
    question: "Comment pouvons-nous obtenir les cookies avec Javascript?",
    answers : {
      1 : "window.cookies",
      2 : "location.cookies",
      3 : "document.cookie ",
      4 : "document.cookies"
    }
  },
  14 : {
    question: "Comment écrire quelque chose dans une page Web en Javascript?",
    answers : {
      1 : "window.write(...)",
      2 : "document.write ",
      3 : "window.page.write",
      4 : "document.page.write"
    }
  },
  15 : {
    question: "Comment obtenir un élément du DOM par son id?",
    answers : {
      1 : "window.getElementById(...)",
      2 : "document.getElementById(...) ",
      3 : "page.getElementById(...)",
      4 : "document.innertHTML.getElementById(...)"
    }
  }
}

const userInfosForm = document.querySelector(".user-infos")
const welcomeArea = document.querySelector(".welcome-section")
const questionArea = document.querySelector(".question-section")
const finishedArea = document.querySelector(".finished-section")
const questionsForm = document.querySelector(".user-answers")
const timer = document.querySelector("#time-spend")
const next = document.querySelector("#next")
validate = true

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

function validateForm(){
  let elements = userInfosForm.elements
  if(!elements.name.value){
    elements.name.nextElementSibling.style.display = "block"
    validate = false
  }else{
    elements.name.nextElementSibling.style.display = "none"
    validate = true
  }
  if(validate){
    if(!elements.email.value){
      elements.email.nextElementSibling.style.display = "block"
      validate = false
    }else{
      elements.email.nextElementSibling.style.display = "none"
      validate = true
    }
  }

  return validate
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
 * @param {Obejct} questions All the questions where we choose one question
 * @returns The question choosed in questions
 */
function getQuestion(questions){
  let randomQuestion = Math.floor(Math.random() * 15) + 1
  return questions[randomQuestion]
}


/**
 * 
 * @param {Object} question The question to display
 * @param {number} n The number of the question
 */
function showQuestion(question, n){
  const questionParagraph = document.querySelector(".question")
  const formAnswers = document.querySelector(".user-answers")
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
 */
function askQuestion(n){
  let question = getQuestion(questions)
  showQuestion(question, n)
  return question
}

/**
 * 
 * @param {DOMElement} timer The element to animate
 */
function TimeAnimation(timer){
  const showTime = document.querySelector(".show-time")
  let t = 60
  showTime.textContent = t
  timer.style.width = "100%"
  let percent = 100
  let animation = setInterval(() => {
    percent = (t*100) / 60
    t--
    showTime.textContent = t
    if(t < 30) timer.style.background = "red"
    if(t == 0){
      clearInterval(animation)
      timer.style.background = "#028A3D"
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


// Email validation on input change
userInfosForm.elements.email.addEventListener("change", function(e){
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  validate =  re.test(String(this.value).toLowerCase())

  if(!validate){
    this.nextElementSibling.style.display = "block"
  }else{
    this.nextElementSibling.style.display = "none"
  }
})

for(let answer of questionsForm.elements.answer){
  answer.addEventListener("change", function(e){
  let nextBtn = document.querySelector("#next")
  nextBtn.setAttribute("disabled", false)
  next.style.background = "rgba(2, 138, 61, 1)"
})
}

userInfosForm.addEventListener("submit", function(e){
  if(validateForm()){
    const user = getUserInfos(this)
    this.reset()
    welcomeArea.classList.add("hide")
    questionArea.classList.remove("hide")

    let nbrQuestons = 1
    let score = 0
    let question = askQuestion(nbrQuestons)
    let animation = TimeAnimation(timer)
    let timeOut = setTimeout(() => {
      next.setAttribute("disabled", "false")
      next.click()
      next.setAttribute("disabled", "true")
    }, 60000)
    next.addEventListener("click", function(e){
      if(this.getAttribute("disabled") == "false"){
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
            question = askQuestion(nbrQuestons)
            animation = TimeAnimation(timer)
          }else{
            questionArea.classList.add("hide")
            finishedArea.classList.remove("hide")
            showScore(user, score)
          }
        }
        this.setAttribute("disabled", true)
      }else{
        if(this.getAttribute("disabled") == "false"){
          if(nbrQuestons < 15){
            nbrQuestons += 1
            question = askQuestion(nbrQuestons)
            animation = TimeAnimation(timer)
          }else{
            questionArea.classList.add("hide")
            finishedArea.classList.remove("hide")
            showScore(user, score)
          }
        }
      }
    })
  }


  e.preventDefault()
})
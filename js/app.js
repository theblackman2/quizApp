const questions = {
  1 : {
    question: "Quel est le type d'un fichier javascript?",
    responses : {
      1 : ".ts",
      2 : ".jsx",
      3 : ".js",
      4 : ".j"
    }
  },
  2 : {
    question: "Comment afficher un message dans la console du navigateur avec javacript?",
    responses : {
      1 : "console(message)",
      2 : "print(message)",
      3 : "console.print(message)",
      4 : "console.log(message)"
    }
  },
  3 : {
    question: "Dans quelle balise HTML se trouve le javascript?",
    responses : {
      1 : "script",
      2 : "js",
      3 : "javascript",
      4 : "link"
    }
  },
  4 : {
    question: "Comment écrire un commentaire sur une ligne en javascript?",
    responses : {
      1 : "/* commentaire */",
      2 : "/** commentaire",
      3 : "// commentaire //",
      4 : "// commentaire"
    }
  },
  5 : {
    question: "Comment afficher un message d'alert sur le navigateur avec javascript?",
    responses : {
      1 : "alert(message)",
      2 : "alertMessage(message)",
      3 : "alertMsg(message)",
      4 : "messageAlert(message)"
    }
  },
  6 : {
    question: "Lequel de ces framework est pas javascript?",
    responses : {
      1 : "laravel",
      2 : "symfony",
      3 : "nod.js",
      4 : "vue.js"
    }
  },
  7 : {
    question: "Quel est le moyen correct d'utiliser \"If\" en javascript?",
    responses : {
      1 : "(if ...){...}",
      2 : "if(...){...}",
      3 : "call if(...){...}",
      4 : "if(...)[...]"
    }
  },
  8 : {
    question: "Quel est le moyen correct de déclarer un tableau en javascript?",
    responses : {
      1 : "var names = [...]",
      2 : "var names = array[...]",
      3 : "var names = '...', '...'",
      4 : "var names = [0] => \"...\", [1] => \"...\""
    }
  },
  9 : {
    question: "Comment trouver le max de x et y?",
    responses : {
      1 : "ceil(x, y)",
      2 : "max(x, y)",
      3 : "Math.max(x, y)",
      4 : "top(x, y)"
    }
  },
  10 : {
    question: "Javascript ne peut pas changer la balise HTML?",
    responses : {
      1 : "Oui",
      2 : "Non",
      3 : "Ce n'est pas correct",
      4 : "Oui mais ce n'est pas recommandé"
    }
  },
  11 : {
    question: "On peut définir n'importe quel style d'une balise HTML avec Javascript",
    responses : {
      1 : "Oui",
      2 : "Non",
      3 : "Oui, mais ce n'est pas recommandé",
      4 : "Oui, mais pas pour toutes les balises"
    }
  },
  12 : {
    question: "Comment déclarer un objet avec Javascript?",
    responses : {
      1 : "var ob = new Object()",
      2 : "var ob = Object()",
      3 : "var ob = {}",
      4 : "var ob = []"
    }
  },
  13 : {
    question: "Comment pouvons-nous obtenir les cookies avec Javascript?",
    responses : {
      1 : "window.cookies",
      2 : "location.cookies",
      3 : "document.cookie",
      4 : "document.cookies"
    }
  },
  14 : {
    question: "Comment écrire quelque chose dans une page Web en Javascript?",
    responses : {
      1 : "window.write(...)",
      2 : "document.write",
      3 : "window.page.write",
      4 : "document.page.write"
    }
  },
  15 : {
    question: "Comment obtenir un élément du DOM par son id?",
    responses : {
      1 : "window.getElementById(...)",
      2 : "document.getElementById(...)",
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

function showScore(user){
  const name = document.querySelector(".big-name")
  name.textContent = user[0]
  const email = document.querySelector(".user-email")
  email.textContent = user[1]
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
 */
function showQuestion(question){
  const questionParagraph = document.querySelector(".question")
  const formResponses = document.querySelector(".user-answers")

  questionParagraph.textContent = question["question"]
  for(let i = 0; i < 4; i++){
    formResponses.elements[i].nextElementSibling.textContent = question["responses"][i+1]
  }
}

userInfosForm.elements.email.addEventListener("change", function(e){
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  validate =  re.test(String(this.value).toLowerCase())

  if(!validate){
    this.nextElementSibling.style.display = "block"
  }else{
    this.nextElementSibling.style.display = "none"
  }
})


// questionsForm.elements.answer.addEventListener("change", function(e){
//   let nextBtn = document.querySelector("#next")
//   nextBtn.classList.add("btn-submit-active")
// })

for(let answer of questionsForm.elements.answer){
  answer.addEventListener("change", function(e){
  let nextBtn = document.querySelector("#next")
  nextBtn.classList.add("btn-submit-active")
})
}

userInfosForm.addEventListener("submit", function(e){
  if(validateForm()){
    const user = getUserInfos(this)
    this.reset()
    welcomeArea.classList.add("hide")
    questionArea.classList.remove("hide")
    let question = getQuestion(questions)
    showQuestion(question)
    // finishedArea.classList.remove("hide")
    // showScore(user)
  }


  e.preventDefault()
})
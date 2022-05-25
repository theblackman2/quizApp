const questions = [
  {
    question: "Quel est le type d'un fichier javascript?",
    answers : [
      ".ts",
      ".jsx",
      ".js ",
      ".j"
    ]
  },
  {
    question: "Comment afficher un message dans la console du navigateur avec javacript?",
    answers : [
      "console(message)",
      "print(message)",
      "console.print(message)",
      "console.log(message) "
    ]
  },
  {
    question: "Dans quelle balise HTML se trouve le javascript?",
    answers : [
      "script ",
      "js",
      "javascript",
      "link"
    ]
  },
  {
    question: "Comment écrire un commentaire sur une ligne en javascript?",
    answers : [
      "/* commentaire */",
      "/** commentaire",
      "// commentaire //",
      "// commentaire "
    ]
  },
  {
    question: "Comment afficher un message d'alert sur le navigateur avec javascript?",
    answers : [
      "alert(message) ",
      "alertMessage(message)",
      "alertMsg(message)",
      "messageAlert(message)"
    ]
  },
  {
    question: "Lequel de ces framework est de javascript?",
    answers : [
      "laravel",
      "symfony",
      "nod.js",
      "vue.js "
    ]
  },
  {
    question: "Quel est le moyen correct d'utiliser \"If\" en javascript?",
    answers : [
      "(if ...){...}",
      "if(...){...} ",
      "call if(...){...}",
      "if(...)[...]"
    ]
  },
  {
    question: "Quel est le moyen correct de déclarer un tableau en javascript?",
    answers : [
      "var names = [...] ",
      "var names = array[...]",
      "var names = '...', '...'",
      "var names = [0] => \"...\", [1] => \"...\""
    ]
  },
  {
    question: "Comment trouver le max de x et y?",
    answers : [
      "ceil(x, y)",
      "max(x, y)",
      "Math.max(x, y) ",
      "top(x, y)"
    ]
  },
  {
    question: "Javascript ne peut pas changer la balise HTML?",
    answers : [
      "Si ",
      "Non",
      "Ce n'est pas correct",
      "Pour certaines balises seulement"
    ]
  },
  {
    question: "On peut définir n'importe quel style d'une balise HTML avec Javascript",
    answers : [
      "Oui",
      "Non",
      "Oui, mais ce n'est pas recommandé ",
      "Oui, mais pas pour toutes les balises"
    ]
  },
  {
    question: "Comment déclarer un objet avec Javascript?",
    answers : [
      "var ob = new Object()",
      "var ob = Object()",
      "var ob = {} ",
      "var ob = []"
    ]
  },
  {
    question: "Comment pouvons-nous obtenir les cookies avec Javascript?",
    answers : [
      "window.cookies",
      "location.cookies",
      "document.cookie ",
      "document.cookies"
    ]
  },
  {
    question: "Comment écrire quelque chose dans une page Web en Javascript?",
    answers : [
      "window.write(...)",
      "document.write(...) ",
      "window.page.write(...)",
      "document.page.write(...)"
    ]
  },
  {
    question: "Comment obtenir un élément du DOM par son id?",
    answers : [
      "window.getElementById(...)",
      "document.getElementById(...) ",
      "page.getElementById(...)",
      "document.innertHTML.getElementById(...)"
    ]
  },
  {
    question: "Quel sera le résultat du code suivant en console? 3 > 2 > 1 === false",
    answers : [
      "false",
      "true ",
      "undifined",
      "error"
    ]
  },
  {
    question: "Javascript est utilisé pour développer la partie _____ d'une application web",
    answers : [
      "Client",
      "Server",
      "Cient et Server ",
      "Aucune"
    ]
  },
  {
    question: "Comment obtenir Le minimum entre x et y?",
    answers : [
      "min(x, y)",
      "Math.min(x, y) ",
      "Math.min(xy)",
      "min(xy)"
    ]
  },
  {
    question: "Lequel de ces mots clés javascript récupère toutes les valeurs sauf celle spécifiée?",
    answers : [
      "catch",
      "label",
      "try",
      "default "
    ]
  },
  {
    question: "Quelle condition on doit donner à l'instruction if pour savoir si x est égal à 2?",
    answers : [
      "if(x 2)",
      "if(x=2)",
      "if(x==2) ",
      "if(x!=2)"
    ]
  },
  {
    question: "Quelle sera le retour de ce code dans la console? Boolean(3<7)",
    answers : [
      "true ",
      "false",
      "NaN",
      "SyntaxError"
    ]
  },
  {
    question: "Lequel de ce type n'est pas géré par javascript?",
    answers : [
      "Undifined",
      "Null",
      "Boolean",
      "Symbol "
    ]
  },
  {
    question: "Il y a une différence entre var et let?",
    answers : [
      "Oui ",
      "Non",
      "Oui, mais les deux font la même chose",
      "Ça dépend des cas d'utilisation"
    ]
  }
]
const userInfosForm = document.querySelector(".user-infos")
const welcomeArea = document.querySelector(".welcome-section")
const questionArea = document.querySelector(".question-section")
const finishedArea = document.querySelector(".finished-section")
const questionsForm = document.querySelector(".user-answers")
const formAnswers = document.querySelector(".user-answers")
const allAnswers = document.querySelectorAll(".form-answer")
const timer = document.querySelector("#time-spend")
const next = document.querySelector("#next")
const quit = document.querySelector("#quit")
const showTime = document.querySelector(".show-time")
const parentTimeShow = document.querySelector(".time-under")

export default questions

export { questions, userInfosForm, welcomeArea, questionArea, finishedArea, questionsForm, formAnswers, allAnswers, timer, next, quit, showTime, parentTimeShow }
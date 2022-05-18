const userInfosForm = document.querySelector(".user-infos")
const welcomeArea = document.querySelector(".welcome-section")
const questionArea = document.querySelector(".question-section")
const finishedArea = document.querySelector(".finished-section")
validate = true

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

userInfosForm.elements.email.addEventListener("change", function(e){
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  validate =  re.test(String(this.value).toLowerCase())

  if(!validate){
    this.nextElementSibling.style.display = "block"
  }else{
    this.nextElementSibling.style.display = "none"
  }
})

userInfosForm.addEventListener("submit", function(e){
  if(validateForm()){
    const user = getUserInfos(this)
    this.reset()
    welcomeArea.classList.add("hide")
    // questionArea.classList.remove("hide")
    finishedArea.classList.remove("hide")
    showScore(user)
  }


  e.preventDefault()
})
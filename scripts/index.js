
const formulario = document.querySelector(".box-form")

console.log(localStorage)

const inputRequired = document.querySelectorAll(".input-required")
const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm

const labelList = document.querySelectorAll(".input-form label")
const inputList = document.querySelectorAll(".input-form input")
const tamanhoInputList = inputList.length

const empresaPage = "empresa.html"
const projetoPage = "projeto.html"
const endPage = "end.html"

const spanValidateText = document.querySelectorAll(".span")

//validate functions
function addError(indice){
  inputRequired[indice].style.border = "2px solid #e63636"
  inputRequired[indice].style.color = "#dc4545"
  spanValidateText[indice].classList.remove("hidden")
}

function removeError(indice){
  inputRequired[indice].style.border = ""
  inputRequired[indice].style.color = ""
  spanValidateText[indice].classList.add("hidden")
}

///validate functions index
function nameValidate() {
  if(inputRequired[0].value.length < 3) {
    addError(0)
    return false
  } else {
    removeError(0)
  }
}
function telValidate() {
  if(inputRequired[1].value.length < 8) {
    addError(1)
    return false
  } else {
    removeError(1)
  }
}
function emailValidate() {
  if(!emailRegex.test(inputRequired[2].value)) {
    addError(2)
    return false
  } else {
    removeError(2)
  }
}

function allValidatePageIndex(){
  if (labelList[0].innerText == "Nome"){
    nameValidate()
    telValidate()
    emailValidate()
    if (nameValidate() == false || telValidate() == false || emailValidate() == false ){
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}

////validate functions empresa
function isEmpresaPageValidate() {
  if (labelList[0].innerText == "Nome da empresa"){
    if(inputRequired[0].value.length < 3) {
      addError(0)
      return false
    } else {
      removeError(0)
      return true
    }
  } else {
    return false
  }
}

////validate projeto page
function isProjetoPageValidate() {
  if (labelList[0].innerText == "Objetivos do projeto") {
    return true
  } else {
    return false
  }
}

function trocaPagina() {
  if (labelList[0].innerText == "Nome"){
    window.location.href = empresaPage
  } else if (labelList[0].innerText == "Nome da empresa") {
    window.location.href = projetoPage
  } else if (labelList[0].innerText == "Objetivos do projeto") {
    window.location.href = endPage
  }
}

function takeInputValue(){
  for(i = 0; i < tamanhoInputList; i++) {
    const inputValue = inputList[i].value
    const labelText = labelList[i].innerText
    localStorage.setItem(`${labelText}`, inputValue)
  }
}

function submitAll(event){
  event.preventDefault()
  allValidatePageIndex()
  isEmpresaPageValidate()
  isProjetoPageValidate()
  takeInputValue()
  if(allValidatePageIndex() == true || isEmpresaPageValidate() == true || isProjetoPageValidate() == true){
    trocaPagina()
  }
}

//botao voltar
formulario.addEventListener("submit", submitAll)

const btnVoltar = document.querySelector(".back-input")

function voltaPagina() {
  history.back()
}

btnVoltar.addEventListener("click", voltaPagina)
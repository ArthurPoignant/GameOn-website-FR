function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", (e) => {
  e.preventDefault()
  launchModal(modalbg)
}))

// launch modal form
function launchModal(modal) {
  modal.style.display = "block"
}

// close modal form
function closeModal(modal) {
  modal.style.display = "none"
}

// form control
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault()
})

function validateForm() {
  let inputFirstname = document.getElementById("first")
  let inputLastname = document.getElementById("last")
  let inputEmail = document.getElementById("email")
  let inputDate = document.getElementById("birthdate")
  let inputQuantity = document.getElementById("quantity")
  let inputLocation = document.getElementById("location1")
  let inputTerms = document.getElementById("checkbox1")
  let validInput = []

  validInput.push(validateInputText(inputFirstname))
  validInput.push(validateInputText(inputLastname))
  validInput.push(validateInputEmail(inputEmail))
  validInput.push(validateInputDate(inputDate))
  validInput.push(validateInputNumber(inputQuantity))
  validInput.push(validateInputLocation(inputLocation))
  validInput.push(validateInputTerms(inputTerms))

  if (validInput.includes(false) === false) {
    closeModal(modalbg)
    displayValidationMessage()
    
  }


}

function validateInputText(input) {
  let divParent = input.parentElement
  let divErrorMessage = divParent.querySelector(".error-msg")
  if (input.value.trim().length < 2) {
    input.classList.add('input-error')

    displayErrorMsg(divErrorMessage, divParent, "Veuillez entrer 2 caractères ou plus pour ce champ.")
    return false;

  } else {
    input.classList.remove('input-error')
    removeErrorMsg(divErrorMessage)
  }
  return true;
}

function validateInputEmail(input) {
  let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let divParent = input.parentElement
  let divErrorMessage = divParent.querySelector(".error-msg")
  if (emailRegEx.test(input.value) == false) {
    input.classList.add('input-error')
    displayErrorMsg(divErrorMessage, divParent, "L'email est invalide")
    return false;

  } else {
    input.classList.remove('input-error')
    removeErrorMsg(divErrorMessage)
  }
  return true;
}

function validateInputDate(input) {
  let dateValidation = new Date(input.value)
  let divParent = input.parentElement
  let divErrorMessage = divParent.querySelector(".error-msg")
  if (dateValidation == "Invalid Date") {
    input.classList.add('input-error')
    displayErrorMsg(divErrorMessage, divParent, "Vous devez entrer votre date de naissance.")
    return false;
  } else {
    input.classList.remove('input-error')
    removeErrorMsg(divErrorMessage)
  }
  return true;
}

function validateInputNumber(input) {
  let divParent = input.parentElement
  let divErrorMessage = divParent.querySelector(".error-msg")
  if (isNaN(parseInt(input.value)) == true) {
    input.classList.add('input-error')
    displayErrorMsg(divErrorMessage, divParent, "Veuillez entrer un  nombre")
    return false;
  } else {
    input.classList.remove('input-error')
    removeErrorMsg(divErrorMessage)
  }
  return true;
}

function validateInputLocation(input) {
  let inputLocationChecked = document.querySelectorAll('input[name="location"]:checked')
  let divParent = input.parentElement
  let divErrorMessage = divParent.querySelector(".error-msg")

  if (inputLocationChecked.length < 1) {
    input.classList.add('input-error')
    displayErrorMsg(divErrorMessage, divParent, "Vous devez choisir une option.")
    return false;
  } else {
    input.classList.remove('input-error')
    removeErrorMsg(divErrorMessage)
  }
  return true;
}

function validateInputTerms(input) {
  let divParent = input.parentElement
  let divErrorMessage = divParent.querySelector(".error-msg")
  if (input.checked == false) {
    input.classList.add('input-error')
    displayErrorMsg(divErrorMessage, divParent, "Vous devez vérifier que vous acceptez les termes et conditions.")
    return false;
  } else {
    input.classList.remove('input-error')
    removeErrorMsg(divErrorMessage)
  }
  return true;
}

function displayErrorMsg(divErrorMessage, divParent, errorMessage) {
  if (divErrorMessage == null) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("error-msg")
    newDiv.innerText = errorMessage
    divParent.appendChild(newDiv)
  }
}

function removeErrorMsg(divErrorMessage) {
  if (divErrorMessage != null) {
    divErrorMessage.remove()
  }
}



function displayValidationMessage() {
  const modalValid = document.querySelector(".bground-valid")
  launchModal(modalValid)

  document.querySelector(".closeValid").addEventListener("click", (event) => {
    event.preventDefault()
    closeModal(modalValid)
  })

  document.querySelector(".validationModal-btn").addEventListener("click", (event) => {
    event.preventDefault()
    closeModal(modalValid)
  })
  
}
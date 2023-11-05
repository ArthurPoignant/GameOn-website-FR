function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
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
  let inputLocationChecked = document.querySelectorAll('input[name="location"]:checked')
  let inputTerms = document.getElementById("checkbox1")
  let divParentFirstname = inputFirstname.parentElement
  let divParentLastname = inputLastname.parentElement
  let divParentEmail = inputEmail.parentElement
  let divParentDate = inputDate.parentElement
  let divParentQuantity = inputQuantity.parentElement
  let divParentLocation = inputLocation.parentElement
  let divParentTerms = inputTerms.parentElement
  let errorMessageFirstname = divParentFirstname.querySelector(".error-msg")
  let errorMessageLastname = divParentLastname.querySelector(".error-msg")
  let errorMessageEmail = divParentEmail.querySelector(".error-msg")
  let errorMessageDate = divParentDate.querySelector(".error-msg")
  let errorMessageQuantity = divParentQuantity.querySelector(".error-msg")
  let errorMessageLocation = divParentLocation.querySelector(".error-msg")
  let errorMessageTerms = divParentTerms.querySelector(".error-msg")
  let dateValidation = new Date(inputDate.value)
  let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (inputFirstname.value.length < 2) {

    if (errorMessageFirstname == null) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("error-msg")
      newDiv.innerText = "Doit contenir 2 caractères"
      divParentFirstname.appendChild(newDiv)
    }

  } else {

    if (errorMessageFirstname != null) {
      errorMessageFirstname.remove()
    }
  }

  if (inputLastname.value.length < 2) {

    if (errorMessageLastname == null) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("error-msg")
      newDiv.innerText = "Doit contenir 2 caractères"
      divParentLastname.appendChild(newDiv)
    }

  } else {

    if (errorMessageLastname != null) {
      errorMessageLastname.remove()
    }
  }

  if (emailRegEx.test(inputEmail.value) == false) {

    if (errorMessageEmail == null) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("error-msg")
      newDiv.innerText = "Vous devez entrer un format d'email valide."
      divParentEmail.appendChild(newDiv)
    }

  } else {

    if (errorMessageEmail != null) {
      errorMessageEmail.remove()
    }
  }

  if (dateValidation == "Invalid Date") {

    if (errorMessageDate == null) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("error-msg")
      newDiv.innerText = "Vous devez entrer votre date de naissance."
      divParentDate.appendChild(newDiv)
    }

  } else {

    if (errorMessageDate != null) {
      errorMessageDate.remove()
    }
  }

  if (isNaN(parseInt(inputQuantity.value )) == true) {

    if (errorMessageQuantity == null) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("error-msg")
      newDiv.innerText = "Veuillez saisir un nombre."
      divParentQuantity.appendChild(newDiv)
    }

  } else {

    if (errorMessageQuantity != null) {
      errorMessageQuantity.remove()
    }
  }

  if (inputLocationChecked.length < 1) {

    if (errorMessageLocation == null) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("error-msg")
      newDiv.innerText = "Vous devez choisir une option."
      divParentLocation.appendChild(newDiv)
    }

  } else {

    if (errorMessageLocation != null) {
      errorMessageLocation.remove()
    }
  }

  if (inputTerms.checked == false) {

    if (errorMessageTerms == null) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("error-msg")
      newDiv.innerText = "Vous devez vérifier que vous acceptez les termes et conditions."
      divParentTerms.appendChild(newDiv)
    }

  } else {

    if (errorMessageTerms != null) {
      errorMessageTerms.remove()
    }
  }

}




const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementById("closeBtn");
const signUpModal = document.getElementById("signUpModal");

const signUpText = document.getElementById("signUpText");
const emailInput = document.getElementById("emailInput");
const submitBtn = document.getElementById("submitBtn");

function openModal() {
  signUpModal.style.display = "block";
}

function closeModal() {
  signUpModal.style.display = "none";
}

function windowOnClick(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
}

function signedUp() {
  signUpText.innerHTML =
    "Thanks for signing up, please check your email for confirmation!";
  emailInput.style.display = "none";
  submitBtn.style.display = "none";
}

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", windowOnClick);
submitBtn.addEventListener("click", signedUp);

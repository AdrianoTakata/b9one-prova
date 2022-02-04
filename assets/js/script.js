
const minusButton = document.querySelector(".minus-button");
const counter = document.querySelector(".counter-value");
const plusButton = document.querySelector(".plus-button");
const modalProduct = document.querySelector(".image-product");
const closeModalButton = document.querySelector(".close-modal");
const addCarTButton = document.querySelector(".cart-buy");
const buyNowButton = document.querySelector(".buy-now");
const callUsButton = document.querySelector(".call-us");
const sendMessageButton = document.querySelector(".send-message");
const submitEmailButton = document.querySelector(".submit-email");

minusButton.addEventListener("click", () => counterButtonHandler("-"));
plusButton.addEventListener("click", () => counterButtonHandler("+"));
modalProduct.addEventListener("click", renderModal);
closeModalButton.addEventListener("click", closeModalContainer);
addCarTButton.addEventListener("click", warningMessage);
buyNowButton.addEventListener("click", warningMessage);
buyNowButton.addEventListener("click", warningMessage);
callUsButton.addEventListener("click", warningMessage);
sendMessageButton.addEventListener("click", warningMessage);
submitEmailButton.addEventListener("click", emailMessage);


function counterButtonHandler(operation) {
  let counterValue = Number(counter.textContent);
  switch (operation) {
    case "-":
      if (counterValue > 0)
        counter.textContent = counterValue - 1;
      break;
    case "+":
      counter.textContent = counterValue + 1;
      break;
  }

}

function renderModal() {
  let modal = document.querySelector(".modal");
  let modalContainer = document.querySelector(".modal-product-container");
  modalContainer.classList.add("show");
  const srcImage = modalProduct.src;
  let image = document.createElement("img");
  image.src = srcImage;
  image.classList.add("image-modal");
  modal.appendChild(image);
}

function closeModalContainer() {
  let modalContainer = document.querySelector(".modal-product-container");
  let modal = document.querySelector(".modal");
  let image = document.querySelector(".image-modal");
  modal.removeChild(image);
  modalContainer.classList.remove("show");
}

function warningMessage(){
  alert("Serviço indisponível no momento!!!");
}

function emailMessage(){
  const emailText = document.querySelector(".email-text");
  const text = emailText.value
  console.log(text);
  if (text){
    alert("Email enviado com sucesso!");
  } else {
    alert("Nenhum email foi adicionado!");
  }
}
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

export default renderModal;
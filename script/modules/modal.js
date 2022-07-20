export default function initModal() {}

const abrirModal = document.querySelector('[data-modal="abrir"]');
const fecharModal = document.querySelector('[data-modal="fechar"]');
const modalContainer = document.querySelector('[data-modal="container"]');

function toggleModal(event) {
  event.preventDefault();
  modalContainer.classList.toggle("ativo");
}

function cliqueForaModal(event) {
  if (event.target === this) {
    toggleModal(event);
  }
}

abrirModal.addEventListener("click", toggleModal);
fecharModal.addEventListener("click", toggleModal);
modalContainer.addEventListener("click", cliqueForaModal);

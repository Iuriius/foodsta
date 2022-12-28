(() => {
  const refs = {
    openModalBtn1: document.querySelector("[data-modal-open-header]"),
    openModalBtn2: document.querySelector("[data-modal-open-hero]"),
    openModalBtn3: document.querySelector("[data-modal-open-offerings]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("[data-page]"), 
  };

  refs.openModalBtn1.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.openModalBtn3.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
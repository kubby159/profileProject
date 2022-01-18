const $profileSend = document.querySelector(".profile-send");
const $modalBox = document.querySelector(".modal-box");
const $btnCancel = document.querySelector(".btn-cancel");
const $mainBox = document.querySelector(".main-box");

const showModal = () => {
  $modalBox.style.display = "block";
};

const closeModal = () => {
  $modalBox.style.display = "none";
};

$profileSend.addEventListener("click", showModal);
$btnCancel.addEventListener("click", closeModal);

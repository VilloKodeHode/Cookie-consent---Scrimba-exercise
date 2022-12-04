// console.log("What is the capital of Peru?");

// setTimeout(function () {
//   console.log("Lima!");
// }, 3000);

// setTimeout(function () {
//   console.log("Ready for next question?");
// }, 6000);

// setTimeout(function () {
//   console.log("Modal Opened");
// }, 1500);

//! making the js to remove the centered popup on clicking the X in the popup window:
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const modalLoading = document.getElementById("modal-inner-loading");
const modalInner = document.getElementById("modal-inner");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  modalText.style.display = "none";
  modalLoading.style.display = "block";
  console.log("form submitted");
  const consentFormData = new FormData(consentForm);
  console.log(consentFormData);
  const fullName = consentFormData.get("fullName");
  console.log(fullName);
  setTimeout(function () {
    uploadText.innerText = "Making the sale...";
    //! use the code below minus the const uploadText for same result
    // document.getElementById("upload-text").innerText = `Making the sale...`;
  }, 1500);

  setTimeout(function () {
    modalInner.innerHTML = `<h2>Thanks <span class='modal-display-name'>${fullName}</span>, you sucker! </h2><p>We just sold the rights to your eternal soul.</p><div class='idiot-gif'><img src='https://media.tenor.com/bN0hO7r_M40AAAAM/laughing-laughing-hysterically.gif'></div>`;
  }, 3000);
});

// const consentFormData = new FormData(consentForm);
// const yourName = consentFormData.get("fullname");
// console.log(yourName);

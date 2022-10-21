'use strict';
const gender = document.querySelectorAll('input[name="gender"]');
const bmiMessage = document.querySelector('.message');
const bmiHeight = document.getElementById('height');
const bmiWeight = document.getElementById('weight');
const age = document.getElementById('your-age');
const ageDisplayed = document.querySelector('.age');
const bmiBtn = document.querySelector('.submit');
const labelColor = document.querySelectorAll('.validation');
const bmiResulted = document.querySelector('.bmi-resulted');
//COMMENT VIRIABLE
const openModal = document.querySelector('.comment-container');
const overlay = document.querySelector('.bmi-overlay');
const commentBtn = document.querySelector('.comment');
const closeModal = document.querySelector('.btn-comment-cancel');
const submitComment = document.querySelector('.btn-comment-submit');

const commentName = document.getElementById('your-name');
const commentMessageBox = document.getElementById('messaging');

const commentResultBox = document.querySelector('.comment-result');
const commentNameResult = document.getElementById('name-box');
const commentMessageResult = document.getElementById('comment-mbox');

// Remove class function
function removeClass() {
  openModal.classList.remove('bmi-hidden');
  overlay.classList.remove('bmi-hidden');
}
// Adding modal Class Function
function addingClass() {
  openModal.classList.add('bmi-hidden');
  overlay.classList.add('bmi-hidden');
}

// Form Validation function
function formValidation() {
  bmiWeight.style.borderColor = 'red';
  bmiHeight.style.borderColor = 'red';
  age.style.borderColor = 'red';
  for (let i = 0; i < labelColor.length; i++) {
    labelColor[i].classList.add('label-color');
  }
}
// theis function clear the form field
function clearFormField() {
  bmiWeight.value = '';
  bmiHeight.value = '';
  age.value = '';
  commentName.value = '';
  commentMessageBox.value = '';
}

// Select Gender function
function selectedGender() {
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked)
      document.querySelector(
        '.your-gender'
      ).textContent = `Gender: ${gender[i].value}`;
  }
}

bmiBtn.addEventListener('click', function () {
  //Form Validation check
  if (bmiHeight.value == '' && bmiWeight.value == '' && age.value == '') {
    formValidation();
  } else {
    // BMI calculation code
    let bmi = Number(bmiWeight.value) / Math.pow(Number(bmiHeight.value), 2);
    bmiResulted.textContent = Math.round(bmi);
    // Display  age
    ageDisplayed.textContent = `Age is: ${age.value}`;

    //clearing form field
    clearFormField();
    // Calling a Display Gender function
    selectedGender();

    // Message to display when the result been calculated
    if (bmi <= 24.9) {
      bmiMessage.textContent = `Your Body Mass Index is ${bmi}. This is considered normal.`;
    } else if (bmi <= 19.5) {
      bmiMessage.textContent = `Your Body Mass Index is ${bmi}. This is considered severely underweight.`;
    } else if (bmi >= 25.8) {
      bmiMessage.textContent = `Your Body Mass Index is ${bmi}. This is considered overweight.`;
    }
  }
});

//open modal
commentBtn.addEventListener('click', function () {
  removeClass(); //This hide modal class

  commentResultBox.classList.add('bmi-hidden');

  clearFormField(); //clearing form field
});
//close modal
closeModal.addEventListener('click', function () {
  addingClass(); // his display the modal class

  commentResultBox.classList.remove('bmi-hidden');
});

//submit comment
submitComment.addEventListener('click', function () {
  if (commentName.value == '' && commentMessageBox.value == '') {
  } else {
    commentNameResult.textContent = commentName.value;
    commentMessageResult.textContent = commentMessageBox.value;

    addingClass(); // his display the modal class

    commentResultBox.classList.remove('bmi-hidden');
  }
});

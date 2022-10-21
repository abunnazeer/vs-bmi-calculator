'use strict';
const gender = document.querySelectorAll('input[name="gender"]');
const bmiMessage = document.querySelector('.message');
const bmiHeight = document.getElementById('height');
const bmiWeight = document.getElementById('weight');
const age = document.getElementById('your-age');
const bmiBtn = document.querySelector('.submit');

// Form Validation function
const validation = function formValidation() {
  bmiWeight.style.borderColor = 'red';
  bmiHeight.style.borderColor = 'red';
  age.style.borderColor = 'red';
};
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
    bmiWeight.style.borderColor = 'red';
    bmiHeight.style.borderColor = 'red';
    age.style.borderColor = 'red';
  } else {
    // BMI calculation code
    let bmi = Number(bmiWeight.value) / Math.pow(Number(bmiHeight.value), 2);
    let bmiResult = (document.querySelector('.bmi-resulted').textContent =
      Math.round(bmi));
    // Display  age
    document.querySelector('.age').textContent = `Age: ${age.value}`;

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

'use strict';
// const male = document.getElementById('male').value;
// const female = document.getElementById('female').value;

const bmiHeight = document.getElementById('height');

const bmiWeight = document.getElementById('weight');
const age = document.getElementById('your-age');

const bmiDate = document.querySelector('.month-year');

const bmiBtn = document.querySelector('.submit');

const currentDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'numeric',
});
bmiBtn.addEventListener('click', function () {
  // this how we calculate the bmi
  let bmi = Number(bmiWeight.value) / Math.pow(Number(bmiHeight.value), 2);
  let bmiResult = (document.querySelector('.bmi-resulted').textContent =
    Math.round(bmi));
  // this how we get add value of the age
  document.querySelector('.age').textContent = `Age: ${age.value}`;
  if (bmi !== bmiResult) {
    bmiDate.textContent = currentDate;
  }
});
//Your Body Mass Index is 11.3. This is considered severely underweight.
// Your Body Mass Index is 25.8. This is considered overweight.

//Your Body Mass Index is 21.5. This is considered normal.

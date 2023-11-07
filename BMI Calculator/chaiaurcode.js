const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const lambai = parseInt(document.querySelector('#height').value);
  const wajan = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (lambai === ' ' || lambai < 0 || isNaN(lambai)) {
    result.innerHTML = `Please enter a valid lambai`;
  } else if (wajan === ' ' || wajan < 0 || isNaN(wajan)) {
    result.innerHTML = `Please enter a valid wajan`;
  } else {
    const bmi = (wajan / ((lambai * lambai) / 1000)).toFixed(3);
    if (bmi < 18.6) {
      result.innerHTML = `<span>Your BMI is ${bmi} and you are underweight</span>`;
    } else if (bmi > 24.9) {
      result.innerHTML = `<span>Your BMI is ${bmi} and you are overweight</span>`;
    } else {
      result.innerHTML = `<span>Your BMI is ${bmi} and Your BMI is normal</span>`;
    }
  }
});

// const lambai = document.querySelector('#height');
// console.log(lambai);
// const myHeight = lambai.getAttribute;

// const wajan = document.querySelector('#weight');
// console.log(wajan);
// const myWajan = wajan.getAttribute;

// const bmi = (703 * myWajan) / [myHeight * myHeight];
// console.log(bmi);

// let result = document.querySelector('#results');
// console.log(result);

// result = bmi;
// console.log(result);

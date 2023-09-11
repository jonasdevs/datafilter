/*
const rangeBars = document.querySelectorAll('.range-input');

rangeBars.forEach(rangeBar => {
  const bar = rangeBar.querySelector('.progress');
  const rangeInputs = rangeBar.querySelectorAll('.range-input input');
  rangeInputs.forEach((input) => {
    input.addEventListener('input',()=>{
      let minVal = parseInt(rangeInputs[0].value),
      maxVal = parseInt(rangeInputs[1].value).


      });
    });
  });
*/



const rangeInputs = document.querySelectorAll('.range-input');

rangeInputs.forEach((rangeInput) => {
    const minRange = rangeInput.querySelector('.range-min');
    const maxRange = rangeInput.querySelector('.range-max');
    const progress = rangeInput.querySelector('.progress');
    const rangeValues = rangeInput.querySelector('.range-values');
    const data = rangeInput.querySelectorAll('span');
    minRange.addEventListener('input', updateSlider);
    maxRange.addEventListener('input', updateSlider);

    function updateSlider() {
        const minValue = parseFloat(minRange.value);
        const maxValue = parseFloat(maxRange.value);
data[0].innerHTML = minValue;
data[1].innerHTML = maxValue;

        progress.style.left = (minValue / 100) * 100 + '%';
        progress.style.width = ((maxValue - minValue) / 100) * 100 + '%';

        rangeValues.textContent = `${minValue} - ${maxValue}`;
    }
});
const form = document.querySelector('form');
// this usecase will give you empty

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);//we don't need parseInt because we have already taken input type as number
  const weight = (document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if(bmi<18.6){
        result.innerHTML = `<span>${bmi}</span> <br><p>Underweight</p>`;
    }
    else if(bmi>18.6 && bmi<24.9){
        result.innerHTML = `<span>${bmi}</span> <br><p>Normal Weight</p>`;
    }
    if(bmi>24.9){
        result.innerHTML = `<span>${bmi}</span> <br><p>Overweight</p>`;
    }

  }
});
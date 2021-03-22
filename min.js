var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
var invBtn = document.getElementById('btn-inv');

function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: You left one or both spaces empty.';
    return;
  }

  if (garbageInput()) {
    label.textContent = 'Error: Please use just numbers.';
    return;
  }
  garbageInput();
  updateLabel();
}

function garbageInput() {
  const numb1 = getNumber1();
  const numb2 = getNumber2();
  if (isNaN(numb1) || isNaN(numb2)) {
    return label.textContent = 'Error: Please enter only numbers';
  }
}

function inputsAreEmpty() {
  if (getNumber1() === '' || getNumber2() === '') {
    return true;
  } else {
    return false;
  }
}

function updateLabel(addend1, addend2) {
  var addend1 = getNumber1();
  var addend2 = getNumber2();

  label.textContent = Math.min(addend1, addend2);

  if (addend1 === addend2) {
    return label.textContent = 'Error: Numbers are equal! Pay attention!';
  }
}


function getNumber1() {
  return inputs[0].value;
}

function getNumber2() {
  return inputs[1].value;
}

function invisible() {
  var section = document.getElementById('min');

  if (section.className === 'visible') {
    section.className = 'invisible';
    invBtn.textContent = 'Show!';
  } else if (section.className === 'invisible') {
    section.className = 'visible';
    invBtn.textContent = 'Hide!';
  }
}


button.addEventListener('click', onClick);
invBtn.addEventListener('click', invisible);



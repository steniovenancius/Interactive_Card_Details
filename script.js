const frontCardName = document.getElementById('front_name');
const inputName = document.querySelector('#inputName');
const erroName = document.querySelector('#erro_card_name');

const frontCardNumber = document.getElementById('front_number');
const inputNumber = document.querySelector('#inputNumber');
const erroNumber = document.querySelector('#erro_card_number');

const frontCardDataMonth = document.getElementById('front_month');
const inputDataMonth = document.getElementById('inputMonth');
const erroData = document.querySelector('#erro_card_data');

const frontCardDataYear = document.getElementById('front_year');
const inputDataYear = document.getElementById('inputYear');

const backCardCvc = document.getElementById('back_cvc');
const inputCvc = document.getElementById('inputCVC');
const erroCvc = document.querySelector('#erro_card_cvc')

const form = document.getElementById('form');
const submitBtn = document.querySelector('.btn_submit');

const thankYou = document.getElementById('thank');

function setCardName(e) {
    frontCardName.innerText = e.target.value;

    let key = e.key;
    let keyLetters = key.match(/^[A-Za-z ]*$/);

    if (inputName.value == '') {
        frontCardName.innerText = "Jane Applessed"
    } else if (keyLetters) {
        frontCardName.innerText = inputName.value;
        erroName.style.display ='none';
        inputName.classList.remove('inputErro');
    } else {
        erroName.style.display ='flex';
        inputName.classList.add('inputErro');
        inputName.blur();
    }

}

function setCardNumber(e) {
    frontCardNumber.innerText = format(e.target.value);

    let key = e.key;
    let keyNumbers = key.match(/^[0-9 ]*$/);

    if (inputNumber.value === '') {
        frontCardNumber.innerText = "0000 0000 0000 0000"
    } else if (keyNumbers) {
        frontCardNumber.innerText = inputNumber.value;
        erroNumber.style.display ='none';
        inputNumber.classList.remove('inputErro');
    } else if (key === "Backspace") {
        inputNumber.setAttribute("enabled", "")
    } else {
        erroNumber.style.display = 'flex';
        inputNumber.classList.add('inputErro');
        inputNumber.blur();
    }

}

function setCardMonth(e) {
    frontCardDataMonth.innerText = e.target.value;

    if (inputDataMonth.value == '') {
        frontCardDataMonth.innerText = "00";
    }
}

function setCardYear(e) {
    frontCardDataYear.innerText = e.target.value;

    if (inputDataYear.value == '') {
        frontCardDataYear.innerText = "00"
    }
}

function setCardCvc(e) {
    backCardCvc.innerText = e.target.value;

    if (inputCvc.value == '') {
        backCardCvc.innerText = "000"
    }
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$&");
}

function handleSubmit(e) {
    e.preventDefault();
    if (!inputName.value) {
        erroName.style.display ='flex';
        inputName.classList.add('inputErro');
        inputName.blur();
    } else {
        erroName.style.display ='none';
        inputName.classList.remove('inputErro');
    }
    if (!inputNumber.value) {
        erroNumber.style.display ='flex';
        inputNumber.classList.add('inputErro');
        inputNumber.blur();
    } else {
        erroNumber.style.display ='none';
        inputNumber.classList.remove('inputErro');
    }
    if (!inputDataMonth.value) {
        erroData.style.display ='flex';
        inputDataMonth.classList.add('inputErro');
        inputDataMonth.blur();
    } else {
        erroData.style.display ='none';
        inputDataMonth.classList.remove('inputErro');
    }
    if (!inputDataYear.value) {
        erroData.style.display ='flex';
        inputDataYear.classList.add('inputErro');
        inputDataYear.blur();
    } else {
        erroData.style.display ='none';
        inputDataYear.classList.remove('inputErro');
    }
    if (!inputCvc.value) {
        erroCvc.style.display ='flex';
        inputCvc.classList.add('inputErro');
        inputCvc.blur();
    } else {
        erroCvc.style.display ='none';
        inputCvc.classList.remove('inputErro');
    }
    if (inputName.value&&inputNumber.value&&inputDataMonth.value&&inputDataYear.value&&inputCvc.value) {
        thankYou.style.display = "flex";
        form.style.display = "none";
    }
}

inputName.addEventListener("keyup", setCardName);
inputNumber.addEventListener("keyup", setCardNumber);
inputDataMonth.addEventListener("keyup", setCardMonth);
inputDataYear.addEventListener("keyup", setCardYear);
inputCvc.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);

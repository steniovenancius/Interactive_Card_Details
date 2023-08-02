const frontCardName = document.getElementById('front_name');
const inputName = document.querySelector('#inputName');

const frontCardNumber = document.getElementById('front_number');
const inputNumber = document.querySelector('#inputNumber');

const frontCardDataMonth = document.getElementById('front_month');
const inputDataMonth = document.getElementById('inputMonth').value;

const frontCardDataYear = document.getElementById('front_year');
const inputDataYear = document.getElementById('inputYear').value;

const backCardCvc = document.getElementById('back_cvc');
const inputCvc = document.getElementById('inputCVC').value;

function cardHolder() {
    //recupera o que foi digitado no input e substitui no campo de nome
    frontCardName.innerHTML = inputName.value;

}

function cardNumber() {
    frontCardNumber.innerHTML = inputNumber.value;
}

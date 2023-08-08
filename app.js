//live update card

const cardNumber = document.querySelector('.card__number');
const cardName = document.querySelector('.card__name');
const cardMonth = document.querySelector('.card__month');
const cardYear = document.querySelector('.card__year');
const cardCVC = document.querySelector('.cvc');

const form = document.getElementById('form');
const inputNameId = document.getElementById('name');
const inputNumberId = document.getElementById('number');
const inputMonthId = document.getElementById('month');
const inputYearId = document.getElementById('year');
const inputCvcId = document.getElementById('cvc');

const infoError = document.querySelectorAll('.error');
const complete = document.querySelector('complete');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (index, message) => {
    infoError[index].innerText = message;

    parentE = infoError[index].parentElement;
    parentE.classList.remove('success');
    parentE.classList.add('error');
};

const setSuccess = index => {
    infoError[index].innerText = '';

    parentE = infoError[index].parentElement;
    parentE.classList.remove('error');
    parentE.classList.add('success');
};

const validateInputs = () => {
    const inputNameValue = inputNameId.value.trim();
    const inputNumberValue = inputNumberId.value.trim();
    const inputMonthValue = inputMonthId.value.trim();
    const inputCvcValue = inputCvcId.value.trim();

    if (inputNameValue === '') {
        setError(0, "Can't be blank");
    } else if (!inputNameValue.match(/[a-zA-Z]+/gu)) {
        setError(0, "Wrong format, letters only");
    } else {
        setSuccess(0);
    }

    if (inputNumberValue === '') {
        setError(1, "Can't be blank");
    } else if (inputNumberValue.match(/[a-zA-Z]+/gu)) {
        setError(1, "Wrong format, numbers only");
    } else if (inputNumberValue.length < 16) {
        setError(1, "Must be 16 characters");
    } else {
        setSuccess(1);
    }

    if (inputMonthValue === '') {
        setError(2, "Can't be blank");
    } else if (inputMonthValue.match(/[a-zA-Z]+/gu)) {
        setError(2, "Wrong format, numbers only");
    } else if (inputMonthValue.length < 2) {
        setError(2, "Must be 2 characters");
    } else {
        setSuccess(2);
    }

    if (inputCvcValue === '') {
        setError(3, "Can't be blank");
    } else if (inputCvcValue.match(/[a-zA-Z]+/gu)) {
        setError(3, "Wrong format, numbers only");
    } else if (inputNumberValue.length < 3) {
        setError(3, "Must be 3 characters");
    } else {
        setSuccess(3);
    }
};

const liveInput = (input, cardText) => {
    input.addEventListener('input', e => {
        e.preventDefault();
    
        const liveInput = e.target.value;
        cardText.textContent = liveInput;
    });
};

liveInput(inputNameId, cardName);
liveInput(inputNumberId, cardNumber);
liveInput(inputMonthId, cardMonth);
liveInput(inputYearId, cardYear);
liveInput(inputCvcId, cardCVC);

// inputNameId.addEventListener('input', e => {
    // e.preventDefault();

    // const CardInputNameValue = inputNameId.value; 
    // mozna tak a mozna tak, ten target zwraca ten element na ktory klikniemy, no ale my wiemy ze to jest w tym przypadku
    // akurat nasz inputNameId
//     const CardInputNameValue = e.target.value;
//     cardName.innerText = CardInputNameValue;
// });

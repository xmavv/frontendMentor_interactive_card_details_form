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
const complete = document.querySelector('.complete');




// musisz dodac ze na przycisk jest wyslane jak wszystko dobrze, czyli gdy setsuccess to input jest git, a gdy nie
// to wtedy jest pusty

//jeszcze to ze gdy sie usunie input number to sie podnosza do gory dane


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

let nameV;
let numberV;
let monthV;
let yearV;
let cvcV;

const validateInputs = () => {
    const inputName = inputNameId.value.trim();
    const inputNumber = inputNumberId.value.trim();
    const inputMonth = inputMonthId.value.trim();
    const inputYear = inputYearId.value.trim();
    const inputCvc = inputCvcId.value.trim();

    const date = new Date();

    if (inputName === '') {
        setError(0, "Can't be blank");
    } else if (!inputName.match(/[a-zA-Z]+/gu)) {
        setError(0, "Wrong format, letters only");
    } else {
        setSuccess(0);
        nameV = inputName;
    }

    if (inputNumber === '') {
        setError(1, "Can't be blank");
    } else if (inputNumber.match(/[a-zA-Z]+/gu)) {
        setError(1, "Wrong format, numbers only");
    } else if (inputNumber.length < 16) {
        setError(1, "Must be 16 characters");
    } else {
        setSuccess(1);
        numberV = inputNumber;
    }

    if (inputMonth === '') {
        setError(2, "Can't be blank");
    } else if (inputMonth.match(/[a-zA-Z]+/gu)) {
        setError(2, "Wrong format, numbers only");
    } else if (inputMonth.length < 2) {
        setError(2, "Must be 2 characters");
    } else if (+inputMonth > 12) {
        setError(2, "Month must be less than 12");
    } else if (inputYear === '') {
        setError(2, "Can't be blank");
    } else if (inputYear.match(/[a-zA-Z]+/gu)) {
        setError(2, "Wrong format, numbers only");
    } else if (inputYear.length < 2) {
        setError(2, "Must be 2 characters");
    } else if (+inputYear < date.getFullYear) {
        setError(2, "Can't be less that current year");
    } else {
        setSuccess(2);
        monthV = inputMonth;
    }

    if (inputYear === '') {
        setError(2, "Can't be blank");
    } else if (inputYear.match(/[a-zA-Z]+/gu)) {
        setError(2, "Wrong format, numbers only");
    } else if (inputYear.length < 2) {
        setError(2, "Must be 2 characters");
    } else if (+inputYear < date.getFullYear) {
        setError(2, "Can't be less that current year");
    } else {
        setSuccess(2);
        yearV = inputYear;
    }

    if (inputCvc === '') {
        setError(3, "Can't be blank");
    } else if (inputCvc.match(/[a-zA-Z]+/gu)) {
        setError(3, "Wrong format, numbers only");
    } else if (inputCvc.length < 2) {
        setError(3, "Must be 3 characters");
    } else {
        setSuccess(3);
        cvcV = inputCvc;
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

form.addEventListener('submit', e => {
    e.preventDefault();

    nameV = '';
    numberV = '';
    monthV = '';
    yearV = '';
    cvcV = '';

    validateInputs();

    if (nameV && numberV && monthV && yearV && cvcV) {
        form.classList.add('d__none');
        complete.classList.remove('d__none');
        // complete.classList.add('d__block');
    }
});

// inputNameId.addEventListener('input', e => {
    // e.preventDefault();

    // const CardInputNameValue = inputNameId.value; 
    // mozna tak a mozna tak, ten target zwraca ten element na ktory klikniemy, no ale my wiemy ze to jest w tym przypadku
    // akurat nasz inputNameId
//     const CardInputNameValue = e.target.value;
//     cardName.innerText = CardInputNameValue;
// });

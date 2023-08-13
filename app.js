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
const secondBtn = document.getElementById('secondBtn');

const infoError = document.querySelectorAll('.error');
const complete = document.querySelector('.complete');
let dateYear = new Date().getFullYear();
dateYear = String(dateYear).slice(2);

const setError = (index, message) => {
    infoError[index].innerText = message;

    let parentE = infoError[index].parentElement;
    parentE.classList.remove('success');
    parentE.classList.add('error');
};

const setSuccess = index => {
    infoError[index].innerText = '';

    let parentE = infoError[index].parentElement;
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
    } else if (inputYear.length < 2) {
        setError(2, "Must be 2 characters");
    } else if (+inputMonth > 12) {
        setError(2, "Month must be less than 13");
    } else if (+inputYear < +dateYear+1) {
        setError(2, `Year must be greater than ${dateYear}`);
    } else {
        setSuccess(2);
        monthV = inputMonth;
        yearV = inputYear;
    }

    if (inputCvc === '') {
        setError(3, "Can't be blank");
    } else if (inputCvc.match(/[a-zA-Z]+/gu)) {
        setError(3, "Wrong format, numbers only");
    } else if (inputCvc.length < 3) {
        setError(3, "Must be 3 characters");
    } else {
        setSuccess(3);
        cvcV = inputCvc;
    }
};

const changeColor = (input, color) => {
    if(input == inputNameId) {
        document.querySelector('.card__name').style.color = color;
    } else if(input == inputNumberId) {
        document.querySelector('.card__number').style.color = color;
    } else if(input == inputMonthId) {
        document.querySelector('.card__month').style.color = color;
    } else if(input == inputYearId) {
        document.querySelector('.card__year').style.color = color;
    } else {
        document.querySelector('.cvc').style.color = color;
    }
};

const liveInput = (input, cardText, index) => {
    input.addEventListener('input', e => {
        e.preventDefault();
        
        const liveInputV = e.target.value;
        cardText.textContent = liveInputV;

        changeColor(input, "white");
        
        if (e.target.value === '') {
            let parentE = infoError[index].parentElement;
            parentE.classList.remove('error');
            parentE.classList.remove('success');

            changeColor(input, "rgb(228, 228, 228)");

            if (input == inputNameId) {
                cardText.innerHTML = '<a href="https://github.com/xmavv" target="_blank">Mateusz Oleksy</a>';
            } else if (input == inputNumberId) {
                cardText.textContent = '0000 5555 0000 5555';
            } else if (input == inputMonthId || input == inputYearId) {
                cardText.textContent = '05';
            } else {
                cardText.textContent = '050';
            }
        }

        // idk what happens here
        if (input == inputNumberId) {
            let formatText = e.target.value;
            formatText = formatText.substring(0, 19);
            formatText = formatText.replace(/\s/g, "").replace(new RegExp(`(.{${4}})`, "g"), "$1 ").trim();

            e.target.value = formatText;
            
            numberV = e.target.value;
            cardNumber = numberV;

            if (/\s/.test(input.value)) {
                let formatText2 = input.value.replace(/\s/g, "");

                input.value = formatText2;
            }
        }
    });
};

liveInput(inputNameId, cardName, 0);
liveInput(inputNumberId, cardNumber, 1);
liveInput(inputMonthId, cardMonth, 2);
liveInput(inputYearId, cardYear, 2);
liveInput(inputCvcId, cardCVC, 3);

form.addEventListener('submit', e => {
    e.preventDefault();

    nameV = '';
    numberV = '';
    monthV = '';
    yearV = '';
    cvcV = '';

    validateInputs();
    
    if (nameV && numberV && monthV && yearV && cvcV) {

        form.classList.add('d__none__animation');

        form.addEventListener('animationend', e => {
            form.classList.add('d__none');
            complete.classList.remove('d__none');
            complete.classList.add('d__block');
        });
    }
});

secondBtn.addEventListener('click', () => {
    // like refresh button
    location.reload(true);
});

// inputNameId.addEventListener('input', e => {
    // e.preventDefault();

    // const CardInputNameValue = inputNameId.value; 
    // mozna tak a mozna tak, ten target zwraca ten element na ktory klikniemy, no ale my wiemy ze to jest w tym przypadku
    // akurat nasz inputNameId
//     const CardInputNameValue = e.target.value;
//     cardName.innerText = CardInputNameValue;
// });

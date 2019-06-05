
const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits button');
const opers = document.querySelectorAll('.opers button');
const eq = document.querySelector('.eq');
const clean = document.querySelector('.clean');
const cleanOne = document.querySelector('.cleanOne');
const point = document.querySelector('.point');


digits.forEach( btn => btn.addEventListener('click', digitPressed));
opers.forEach( btn => btn.addEventListener('click', operPressed));


function digitPressed(e) {
    e.preventDefault();
    if (display.value === '0') {
        display.value += e.target.innerText;
        display.value = eval(display.value);
    } else {
         display.value += e.target.innerText;
    }
}

function operPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText; 
    if (display.value === '0/' ) {
        display.value = 'Error';
    }
}

eq.addEventListener('click', eqPressed);

function eqPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
}

clean.addEventListener('click', cleanPressed);

function cleanPressed(e) {
    e.preventDefault();
    display.value = '0';
}

/*cleanOne.addEventListener('click', cleanOnePressed);
function cleanOnePressed(e) {
    e.preventDefault();*/
    

point.addEventListener ('click', pointPressed);
function pointPressed(e) {
    e.preventDefault();
    display.value += '.';
}
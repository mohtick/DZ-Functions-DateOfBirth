


let inpYear = document.querySelector('.inpYear');
let inpMonth = document.querySelector('.inpMonth');
let inpDay = document.querySelector('.inpDay');
let out = document.querySelector('.out');
let btn = document.querySelector('.btn');

let currDate = new Date();
let currYear = currDate.getFullYear();
let currMonth = currDate.getMonth() + 1;
let currDay = currDate.getDate();




let age = (event) => {

    let ageYear = currYear - inpYear.value;
    let ageMonth = currMonth - inpMonth.value;
    if (ageMonth < 0) {
        ageYear = ageYear - 1;

    }

    let ageDay = currDay - inpDay.value;

    if (ageMonth === 0 && ageDay < 0) {
        ageYear = ageYear - 1;
    }


    out.innerHTML = `You are ${ageYear} years old`;


    event.preventDefault();
}





btn.addEventListener("click", age);



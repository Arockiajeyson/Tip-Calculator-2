const perPerson = document.getElementById("perperson")
const total = document.getElementById("total")
const reset = document.getElementById("resetBUTTON")

const custom = document.getElementById("custom")

const bill = document.getElementById("bill")
const people = document.getElementById("people")


const buttons = document.querySelectorAll(".btn-color")
console.log(buttons);


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener(onclick,calculate(tip)) 
}


reset.addEventListener(onclick, ResetVals)

function ResetVals() {
    bill.value = ""
    people.value = ""
    perPerson.innerHTML = ""
    total.innerHTML = ""

}


function calculate(tip) {

    let per = (parseInt(bill.value) * parseInt(tip) / 100) / parseInt(people.value)
    perPerson.innerHTML = parseFloat(per).toFixed(2)

    let tot = parseInt(bill.value) + parseInt(bill.value * parseInt(tip) / 100 / parseInt(people.value))
    total.innerHTML = parseFloat(tot).toFixed(2)

}


function handleBill() {
    console.log(bill.value);
}

function handlePeople() {
    console.log(people);
}





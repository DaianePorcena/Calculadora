let display = document.querySelector('#display');

function showDisplay(value) {
    if (value == ".") {
       let x = display.value = "0";
    }
    display.value += value
}

function clearAll() {
    display.value = "";
}

function result() {
    let y = eval(display.value);
    display.value = y;

    if (display.value == "underfined") {
        display.value = "";
    }
}
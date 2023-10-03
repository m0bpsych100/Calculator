let inp = document.getElementById("inp")
function display(val) {
    inp.value += val
}

function clearInput() {
    inp.value = ""
}

function calc() {
    let expression = inp.value;
    try {
        let result = eval(expression);
        inp.value = result;
    } catch (error) {
        inp.value = "Error";
    }
}

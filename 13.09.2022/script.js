const headerResult = document.getElementById("result");
const btnCalc = document.getElementById("btn-calc");
const isC2f = document.getElementById('isC2f');
const isF2c = document.getElementById('isF2c');

let c2f = (degreesC) => degreesC * 9 / 5 + 32;
let f2c = (degreesF) => (degreesF - 32) * 5 / 9;

btnCalc.onclick = () => {
    let str;

    if (isC2f.checked) {
        let c = parseFloat(prompt("Celsius Degrees:"));
        let f = c2f(c);
        str = `${c} Celsius -> ${f} Fahrenheit`;
    } else if (isF2c.checked) {
        let f = parseFloat(prompt("Fahrenheit Degrees:"));
        let c = f2c(f);
        str = `${f} Fahrenheit -> ${c} Celsius`;
    }

    headerResult.innerHTML = str;
}
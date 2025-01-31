function calculateValue() {
    let randomFactor = Math.random() * 0.0000000000000000000001;
    document.getElementById("value").innerText = "Current value: " + randomFactor.toFixed(30) + " trillion 0";
}

function login() {
    alert("🚨 Error: Server not responding, try again never.");
}

function register() {
    alert("🎉 Congratulations! You have registered for PistonCoin.");
}
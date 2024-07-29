let resetbtn = document.getElementById("resetBtn");
let submitbtn = document.getElementById("submitBtn");
let textDislayed = document.getElementById("quoteDisplay");
let textTyped = document.getElementById("quoteInput");
let timer = document.getElementById("timer");
let result = document.getElementById("result");

let countdown = 1;
let intervalId = setInterval(function() {
    countdown = countdown + 1;
    timer.textContent = countdown;
}, 1000)

resetbtn.addEventListener("click", function() {
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            textDislayed.textContent = jsonData.content
        })
})

submitbtn.addEventListener("click", function() {
    if (textTyped.value === textDislayed.textContent) {
        clearInterval(intervalId)
        result.textContent = "You typed in " + String(countdown) + " seconds"
    } else {
        result.textContent = "You typed incorrect sentence"
    }
})
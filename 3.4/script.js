
let tiles = Array.from(document.querySelectorAll("li"))
let buttonElement = document.querySelector("#choose")
let buttonAnimateElement = document.querySelector("#chooseAnimated")
let prevIndex

function randomCountry() {
    prevIndex && tiles[prevIndex].classList.remove("selectedTile")
    let randomInt = Math.floor(Math.random() * 193)
    console.log(randomInt)
    tiles[randomInt].classList.add("selectedTile")
    tiles[randomInt].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
    prevIndex = randomInt
}

function randomCountryAnimated(counter = 1) {
    if (counter >= 2000) return

    randomCountry()
    setTimeout(() => randomCountryAnimated(counter * 1.35 ), counter);
}



buttonElement.addEventListener("click", randomCountry)
buttonAnimateElement.addEventListener("click", () => randomCountryAnimated(1))
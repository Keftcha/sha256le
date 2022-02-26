"use strict"

const addTry = (guess) => {
    const line = document.createElement("div")
    for (let i = 0; i < secretSha256.length; i++) {
        const guessCaracter = guess[i]
        const secretCaracter = secretSha256[i]

        const caracterBox = document.createElement("span")
        caracterBox.innerHTML = guessCaracter
        caracterBox.style.fontFamily = "monospace"
        caracterBox.style.backgroundColor = "gray"
        caracterBox.style.margin = "0.1em"

        if (guessCaracter === secretCaracter) {
            caracterBox.style.backgroundColor = "green"
        } else if (secretSha256.includes(guessCaracter)) {
            caracterBox.style.backgroundColor = "yellow"
        }

        line.appendChild(caracterBox)
    }
    const triesNode = document.getElementById("triesNode")
    triesNode.appendChild(line)
}

const addTriesNode = (parentNode) => {
    // Tries
    const tries = document.createElement("div")
    tries.id = "triesNode"
    parentNode.appendChild(tries)
    return tries
}

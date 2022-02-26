"use strict"

const addTry = (guess) => {
    const colors = compare(guess, secretSha256)

    const line = document.createElement("div")
    for (let i = 0; i < secretSha256.length; i++) {
        const characterBox = document.createElement("span")
        characterBox.innerHTML = guess[i]
        characterBox.style.fontFamily = "monospace"
        characterBox.style.backgroundColor = colors[i]
        characterBox.style.margin = "0.1em"

        line.appendChild(characterBox)
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

const compare = (guess, secret) => {
    let colors = [] // Return background color or characters (gray → not present, yellow → wrong place, green → good place)

    for (let i = 0; i < secret.length; i++){
        const guessCharacter = guess[i]
        const secretCharacter = secret[i]

        // The character is at the good place
        if (guessCharacter === secretCharacter) {
            colors.push("green")
            continue
        } else if (
            countOccurence(guess.substr(0, i), guessCharacter) <
            (
                countOccurence(secret, guessCharacter) -
                countOccurenceGoodPlaceAfter(
                    i + 1,
                    guess,
                    secret,
                    guessCharacter,
                )
            )
        ) {
            colors.push("yellow")
        } else {
            colors.push("gray")
        }

    }

    return colors
}

"use strict"

const countOccurence = (word, character) => {
    return word.split("").filter(c => c === character).length
}

const countOccurenceGoodPlace = (guess, secret, character) => {
    let nb = 0

    for (let i = 0; i < secret.length; i++) {
        if (guess[i] === character && secret[i] === character) {
            nb++
        }
    }

    return nb
}

"use strict"

const countOccurence = (word, character) => {
    return word.split("").filter(c => c === character).length
}

const countOccurenceGoodPlaceAfter = (i, guess, secret, character) => {
    let nb = 0

    for (; i < secret.length; i++) {
        if (guess[i] === character && secret[i] === character) {
            nb++
        }
    }

    return nb
}

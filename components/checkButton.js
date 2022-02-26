"use strict"

const addCheckButton = (parentNode, onValidInput, onInvalidInput) => {
    // Button to check the input
    const checkButton = document.createElement("button")
    checkButton.id = "checkButton"
    checkButton.innerHTML = "Check"
    checkButton.addEventListener("click", () => {
        if (isValidInput(guess)) {
            onValidInput(guess)
        } else {
            onInvalidInput(guess)
        }
    })

    parentNode.appendChild(checkButton)

    return addCheckButton
}

const isValidInput = (input) => {
    return input.length == 64
}

const onValidInput = (guess) => {
    nbTry++
    validInput()
    addTry(guess)
    isGameOver(guess)
}

const validInput = () => {
    const inputField = document.getElementById("input")
    inputField.style.borderColor = null

    const errMsg = document.getElementById("err")
    errMsg.innerHTML = ""
}

const onInvalidInput = (_) => {
    unvalidInput()
}

const unvalidInput = () => {
    const inputField = document.getElementById("input")
    inputField.style.borderColor = "red"

    const errMsg = document.getElementById("err")
    errMsg.innerHTML = "The sha256 must be 64 caracters long"
}

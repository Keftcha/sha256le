"use strict"

let guess = ""

const isValidInput = (input) => {
    return input.length == 64
}

const unvalidInput = () => {
    const inputField = document.getElementById("input")
    inputField.style.borderColor = "red"

    const errMsg = document.getElementById("err")
    errMsg.innerHTML = "The sha256 must be 64 caracters long"
}

const validInput = () => {
    const inputField = document.getElementById("input")
    inputField.style.borderColor = null

    const errMsg = document.getElementById("err")
    errMsg.innerHTML = ""
}

const addTry = (guess) => {
    console.log(guess)
}

const addInputField = (parentNode) => {
    // Text box to input sha256
    const inputField = document.createElement("input")
    inputField.type = "text"
    inputField.id = "input"
    inputField.maxLength = 64
    inputField.autofocus = "autofocus"
    inputField.size = 64
    inputField.style.fontFamily = "monospace"
    inputField.addEventListener("input", (e) => {
        const inputField = document.getElementById("input")
        guess = inputField.value
    })

    parentNode.appendChild(inputField)

    return inputField
}

const addCheckButton = (parentNode) => {
    // Button to check the input
    const checkButton = document.createElement("button")
    checkButton.id = "checkButton"
    checkButton.innerHTML = "Check"
    checkButton.addEventListener("click", () => {
        if (isValidInput(guess)) {
            validInput()
            addTry(guess)
        } else {
            unvalidInput()
        }
    })

    parentNode.appendChild(checkButton)

    return addCheckButton
}

const addErrMsg = (parentNode) => {
    // Error message if needed
    const errMsg = document.createElement("div")
    errMsg.id = "err"
    errMsg.style.color = "red"
    errMsg.style.fontSize = "0.5em"
    errMsg.style.textAlign = "left"
    errMsg.innerText = ""

    app.appendChild(errMsg)

    return errMsg
}

const main = (
    () => {
        const app = document.getElementById("app")

        const inputField = addInputField(app)
        addCheckButton(app)
        addErrMsg(app)
    }
)

main()

"use strict"

let guess = ""
const secretSha256 = "1a79c411025b1250d340e5f4a1680eb811ceea1d7818e231e4bdcbd686527ecb"

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
    const trysNode = document.getElementById("trysNode")
    trysNode.appendChild(line)

    // TODO: end game if the sha256 is guessed
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

const onValidInput = (guess) => {
    validInput()
    addTry(guess)
}

const onInvalidInput = (_) => {
    unvalidInput()
}

const addErrMsg = (parentNode) => {
    // Error message if needed
    const errMsg = document.createElement("div")
    errMsg.id = "err"
    errMsg.style.color = "red"
    errMsg.style.fontSize = "0.5em"
    errMsg.style.textAlign = "left"
    errMsg.innerText = ""

    parentNode.appendChild(errMsg)

    return errMsg
}

const addTrysNode = (parentNode) => {
    // Trys
    const trys = document.createElement("div")
    trys.id = "trysNode"
    parentNode.appendChild(trys)
    return trys
}

const main = (
    () => {
        const app = document.getElementById("app")

        const inputField = addInputField(app)
        addCheckButton(app, onValidInput, onInvalidInput)
        addErrMsg(app)
        addTrysNode(app)
    }
)

main()

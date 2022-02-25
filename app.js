"use strict"

let guess = ""
let nbTry = 0
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
    const triesNode = document.getElementById("triesNode")
    triesNode.appendChild(line)
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
    inputField.addEventListener("input", (_) => {
        const inputField = document.getElementById("input")
        guess = inputField.value
    })
    // Check guess sha256 when pressing Enter
    inputField.addEventListener("keyup", (e) => {
        if (e.keyCode != 13) {
            return
        }

        const checkButton = document.getElementById("checkButton")
        checkButton.click()
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

const isGameOver = (guess) => {
    if (guess != secretSha256) {
        return
    }

    const app = document.getElementById("app")

    app.insertBefore(document.createElement("br"), app.firstChild)
    app.insertBefore(document.createElement("br"), app.firstChild)

    // Add reset button
    const reset = document.createElement("button")
    reset.innerHTML = "Reset"
    reset.addEventListener("click", () => {
        window.location.reload()
    })
    app.insertBefore(reset, app.firstChild)

    app.insertBefore(document.createElement("br"), app.firstChild)

    // Add score
    const score = document.createElement("div")
    score.innerHTML = `You guessed the sha256 in ${nbTry} tries.`
    app.insertBefore(score, app.firstChild)

    app.insertBefore(document.createElement("br"), app.firstChild)

    // Add congratulation text
    const congrats = document.createElement("div")
    congrats.innerHTML = "🥳 You guess the sha256 ! Congratulation ! 🎉"
    congrats.style.fontSize = "2em"
    app.insertBefore(congrats, app.firstChild)

    // Disable the check button and input field
    const checkButton = document.getElementById("checkButton")
    checkButton.disabled = true
    const inputField = document.getElementById("input")
    inputField.disabled = true
}

const onValidInput = (guess) => {
    nbTry++
    validInput()
    addTry(guess)
    isGameOver(guess)
}

const onInvalidInput = (_) => {
    unvalidInput()
}

const addErrMsg = (parentNode) => {
    // Error message if needed
    const errMsg = document.createElement("div")
    errMsg.id = "err"
    errMsg.style.color = "red"
    errMsg.style.fontSize = "0.75em"
    errMsg.style.textAlign = "left"
    errMsg.innerText = ""

    parentNode.appendChild(errMsg)

    return errMsg
}

const addTriesNode = (parentNode) => {
    // Tries
    const tries = document.createElement("div")
    tries.id = "triesNode"
    parentNode.appendChild(tries)
    return tries
}

const main = (
    () => {
        const app = document.getElementById("app")

        const inputField = addInputField(app)
        addCheckButton(app, onValidInput, onInvalidInput)
        addErrMsg(app)
        addTriesNode(app)
    }
)

window.addEventListener("load", main)

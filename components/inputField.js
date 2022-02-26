"use strict"

const addInputField = (parentNode) => {
    // Text box to input sha256
    const inputField = document.createElement("input")
    inputField.type = "text"
    inputField.id = "input"
    inputField.maxLength = 64
    inputField.autofocus = "autofocus"
    inputField.size = 64
    inputField.style.fontFamily = "monospace"
    inputField.placeholder = "sha256"
    inputField.addEventListener("input", (_) => {
        const inputField = document.getElementById("input")
        guess = inputField.value.toLowerCase()
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

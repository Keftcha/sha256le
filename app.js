"use strict"

let guess = ""
let nbTry = 0
let secretSha256 = ""

const main = async () => {
    secretSha256 = await digestMessage(Math.random().toString())
    const app = document.getElementById("app")

    const inputField = addInputField(app)
    addCheckButton(app, onValidInput, onInvalidInput)
    addErrMsg(app)
    addTriesNode(app)
}

window.addEventListener("load", main)

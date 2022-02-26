"use strict"

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

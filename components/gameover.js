"use strict"

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

const main = (
    () => {
        const app = document.getElementById("app")
        let guess = ""

        // Text box to input sha256
        const input = document.createElement("input")
        input.type = "text"
        input.id = "input"
        input.maxLength = 64
        input.autofocus = "autofocus"
        input.size = 64
        input.style.fontFamily = "monospace"
        input.addEventListener("input", e => {
            const input = document.getElementById("input")
            guess = input.value
        })
        app.appendChild(input)

        // Button to check the input
        const checkButton = document.createElement("button")
        checkButton.innerHTML = "Check"
        checkButton.addEventListener("click", _ => {
            console.log(guess)
        })
        app.appendChild(checkButton)
    }
)

main()

let string = "";
let buttons = document.querySelectorAll(".button, .button1");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        }

        else if (e.target.innerHTML == "AC") {
            string = "";
            document.querySelector("input").value = string;
        }

        else if (e.target.innerHTML == "+/-") {
            if (string.startsWith('-')) {
                string = string.substring(1);
            } else {
                string = '-' + string;
            }
            document.querySelector("input").value = string;
        }

        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
})



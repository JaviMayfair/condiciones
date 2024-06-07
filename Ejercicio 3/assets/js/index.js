function enviarPassword() {
    number1 = document.querySelector("#number1")
    number2 = document.querySelector("#number2")
    number3 = document.querySelector("#number3")
    p = document.querySelector("p")
    password = number1.value + number2.value + number3.value
    console.log(password);
    if(password == "911") {
        p.innerHTML = "Password 1 correcto"
    }
    else if(password == "714") {
        p.innerHTML = "Password 2 correcta"
    }
    else{
        p.innerHTML = "Password Incorrecta"
    }
}
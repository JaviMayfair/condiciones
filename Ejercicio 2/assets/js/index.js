function agregarSticker() {
    number1 = document.querySelector("#number1")
    number2 = document.querySelector("#number2")
    number3 = document.querySelector("#number3")
    p = document.querySelector("p")

    total = Number(number1.value) + Number(number2.value) + Number(number3.value)
    p.innerHTML = total

    if(total <= 10 ) {
        p.innerHTML = "Llevas " + total + " Stickers"
    }
    else{
        p.innerHTML = "Llevas demasiados Stickers"
    }
}
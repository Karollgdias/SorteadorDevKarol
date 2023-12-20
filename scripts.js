function generateNumber() {

    const min = Math.ceil(document.querySelector(".inputMin").value)
    const max = Math.floor(document.querySelector(".inputMax").value)

    const result = Math.floor(Math.random() * (max - min) + min)


    const Output = document.querySelector(".resultNumber")

    Output.innerHTML = "<p>Número sorteado: " + result + "</p>"

}

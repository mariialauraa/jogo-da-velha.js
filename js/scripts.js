// marcador x e o:
let x = document.querySelector(".x") //class
let o = document.querySelector(".o")

let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#buttons-container button")

let messageContainer = document.querySelector("#message")
let messageText = document.querySelector("#message p")

let secondPlayer;

// contador jogadas
let player1 = 0
let player2 = 0

// adicionando eventos de click as boxes
for(let i = 0; i < boxes.length; i++) {

    // quando alguem clica na caixa
    boxes[i].addEventListener("click", function() {

        let elemento = checkElemento(player1, player2)

        // só deixa um elemento por box
        if(this.childNodes.length == 0) {

            let cloneElemento = elemento.cloneNode(true)

            this.appendChild(cloneElemento)

            // computar jogada (alterna entre os elementos (x/o))
            if(player1 == player2) {
                player1++
            } else {
                player2++
            }
        }
    })
}
//verifica quem vai jogar
function checkElemento(player1, player2) {
    // iniciam com 0 jogadas
    if(player1 == player2) {
        // x
        elemento = x
    } else {
        // o
        elemento = o
    }

    return elemento
}
var cuadrados=[null,null,null,null,null,null,null,null,null]
let jugador="o"
var salidaMensaje=document.getElementById("titulo")

function colocarFigura(indice){
    var cuadrado = document.getElementById(indice.toString());
    if (cuadrados[indice]===null){
        cuadrados[indice]=jugador
        if(jugador=="x"){
        jugador="o"
    }else{
        jugador="x"
    }
        figura=cuadrado.querySelector("#figura");
        if (jugador==="x"){
            figura.classList.add("cruses")
        }else{
            figura.classList.add("circulo")
        }
        figura.style.visibility="visible"
        cuadrado.appendChild(figura)
        if(jugador==="o"){
            salidaMensaje.textContent="Turno del jugador X"
            salidaMensaje.style.color="red"
            salidaMensaje.style.fontSize="30px"
        }else{
            salidaMensaje.textContent="Turno del jugador O"
            salidaMensaje.style.color="blue"
            salidaMensaje.style.fontSize="30px"
        }
        const ganador=calcularGanador()
        if (ganador){
            if(ganador==="o"){
                salidaMensaje.textContent="Jugador X gana"
                salidaMensaje.style.color="red"
            }else{
                salidaMensaje.textContent="Jugador O gana"
                salidaMensaje.style.color="blue"
            }
            for (let num=0;num<cuadrados.length;num++){
                if (cuadrados[num]===null){
                    cuadrados[num]=true
                }            }
        }else if(!cuadrados.includes(null)){
            salidaMensaje.textContent="Empate"
            salidaMensaje.style.color="darkmagenta"
        }
    }

}


function calcularGanador(){
    const casosGanadores=[[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
    for(const caso of casosGanadores){
      const [a, b, c] = caso;
      if (cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[a] === cuadrados[c]) {
        return cuadrados[a];
      }
    }
    return null;
}

function reiniciarPartida(){
    for(let cuadros=0; cuadros<cuadrados.length; cuadros++){
        
        let figuraCuadrado=document.getElementById(cuadros.toString())
        let figuraFuera=figuraCuadrado.querySelector("#figura")
        figuraFuera.classList.remove("cruses")
        figuraFuera.classList.remove("circulo")
        cuadrados[cuadros]=null
    }
    salidaMensaje.textContent="Tic Tac Toe"
    salidaMensaje.style.fontSize="50px"
    salidaMensaje.style.color="black"
}


const colores = ["0 0 7px khaki","0 0 7px blue","0 0 7px gray", "0 0 7px red", "0 0 7px chartreuse"];
let currentIndex = 0;

function changeColor() {
    salidaMensaje.style.textShadow=colores[currentIndex]
    currentIndex += 1 
    if(currentIndex==colores.length){
        currentIndex=0
    }
}

setInterval(changeColor,700)
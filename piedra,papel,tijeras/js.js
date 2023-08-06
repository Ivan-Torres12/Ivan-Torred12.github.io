
function startGame() {
    let player1 = document.querySelector("#player1")
      let player2 = document.querySelector("#player2")
      player1.innerText = ""
      player2.innerText = ""
    isPvP = document.querySelector('input[name="mode"]:checked').value === "pvp";
    isPvC = document.querySelector('input[name="mode"]:checked').value === "pvc";
    let puntosUsuario = 0;
    let puntosPC = 0;
    let rondas = document.querySelector("#rounds").value
    rondas=parseInt(rondas)
    rondas= 0
    const botonesArmas = document.querySelectorAll(".arma");
    botonesArmas.forEach(boton => {
        boton.removeEventListener("click", iniciarTurno);
       });
    if (isPvP === true){
      document.getElementById("instrucciones").style.display = "block"
      document.getElementById("marcador").style.display = "block"
      document.getElementById("elegi-tu-arma").style.display = "block"
      document.getElementById("start-container").style.display = "none"
      let px = document.querySelector("#p")
      let player1 = document.querySelector("#player1")
      let player2 = document.querySelector("#player2")
      player1.innerText = "Jugador1"
      player2.innerText = "Jugador2"
      px.innerText = "Jugador vs Jugador"
      let puntosUsuario = 0;
      let puntosPC = 0;
      let eleccionPC = null;
      let eleccionUsuario = null;

      let rondas = document.querySelector("#rounds").value
      rondas=parseInt(rondas)
      let instrucciones = document.querySelector("#instrucciones");
      let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
      let contenedorPuntosPC = document.querySelector("#puntos-computadora");
      let mensaje = document.querySelector("#mensaje");
      let contenedorGanaPunto = document.querySelector("#gana-punto");
      let elegiTuArma = document.querySelector("#elegi-tu-arma");
      let turnoJugador1 = true;

      let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
      let contenedorEleccionPC = document.querySelector("#eleccion-computadora");
      instrucciones.innerText = "El primero en llegar a " + rondas + " puntos gana."
      const botonesArmas = document.querySelectorAll(".arma");
      botonesArmas.forEach(boton => {
          boton.addEventListener("click", iniciarTurno);
      });

      function iniciarTurno(e) {
        if (turnoJugador1) {
          if (eleccionUsuario === null) {
              eleccionUsuario = e.currentTarget.id;
              turnoJugador1 = false;
              logica()
          }
      } else {
          if (eleccionPC === null) {
              eleccionPC = e.currentTarget.id;
              turnoJugador1 = true;
              logica();
              eleccionUsuario = null;
              eleccionPC = null;
          }
      }
    }
function logica(){
      if (
          (eleccionUsuario === "piedra🗿" && eleccionPC === "tijera✂️") ||
          (eleccionUsuario === "tijera✂️" && eleccionPC === "papel📋") ||
          (eleccionUsuario === "papel📋" && eleccionPC === "piedra🗿")
      ) {
          ganaUsuario();
      } else if (
          (eleccionPC === "piedra🗿" && eleccionUsuario === "tijera✂️") ||
          (eleccionPC === "tijera✂️" && eleccionUsuario === "papel📋") ||
          (eleccionPC === "papel📋" && eleccionUsuario === "piedra🗿")
      ) {
          ganaPC();
      } else {
          empate();
      }

      contenedorEleccionUsuario.innerText = eleccionUsuario;
      contenedorEleccionPC.innerText = eleccionPC;

      if (puntosUsuario > rondas / 2|| puntosPC > rondas / 2) {

          if (puntosUsuario > rondas / 2) {
              instrucciones.innerText = "🔥 ¡Ganaste el juego jugador 1! 🔥"
              document.getElementById("elegi-tu-arma").style.display = "none"
              document.getElementById("reiniciar").style.display = "block"
              
            }
          }

          if (puntosPC > rondas / 2) {
              instrucciones.innerText = "🔥 ¡Ganaste el juego jugador 2! 🔥"
              document.getElementById("elegi-tu-arma").style.display = "none"
              document.getElementById("reiniciar").style.display = "block"
            }
          else if  (puntosPC === puntosUsuario && puntosPC + puntosUsuario === rondas){
                instrucciones.innerText = "🔥 ¡EMPATE! 🔥"
                document.getElementById("elegi-tu-arma").style.display = "none"
                document.getElementById("reiniciar").style.display = "block"
            }
        
        
              

          reiniciar.addEventListener("click", reiniciarJuego);
      }

        function ganaUsuario() {
            puntosUsuario++;
            console.log(puntosUsuario)
            contenedorPuntosUsuario.innerText = puntosUsuario;
            contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥"
        }

        function ganaPC() {
            puntosPC++;
            contenedorPuntosPC.innerText = puntosPC;
            contenedorGanaPunto.innerText = "¡La computadora ganó un punto! 😭"
        }

        function empate() {
            contenedorGanaPunto.innerText = "¡Empate! 😱"
        }

        function reiniciarJuego() {
          document.getElementById("instrucciones").style.display = "none"
          document.getElementById("marcador").style.display = "none"
          document.getElementById("elegi-tu-arma").style.display = "none"
          document.getElementById("start-container").style.display = "block"
          document.getElementById("reiniciar").style.display = "none"
          puntosUsuario = 0;
          puntosPC = 0;
          let rondas = document.querySelector("#rounds").value
          rondas = parseInt(rondas)
          rondas = 0
          contenedorPuntosUsuario.innerText = puntosUsuario;
          contenedorPuntosPC.innerText = puntosPC;
          eleccionUsuario = null;
          eleccionPC = null;
          botonesArmas.forEach(boton => {
            boton.removeEventListener("click", iniciarTurno);
        });
    }
} else if (isPvC === true) {
    let px = document.querySelector("#p")
    px.innerText = "Jugador vs Computadora"
    let player1 = document.querySelector("#player1")
      let player2 = document.querySelector("#player2")
      player1.innerText = "Jugador"
      player2.innerText = "Computadora"
    document.getElementById("mensaje").style.display = "block"
    document.getElementById("instrucciones").style.display = "block"
    document.getElementById("marcador").style.display = "block"
    document.getElementById("elegi-tu-arma").style.display = "block"
    document.getElementById("start-container").style.display = "none"
    let puntosUsuario = 0;
        let puntosPC = 0;
        let rondas = document.querySelector("#rounds").value
      rondas=parseInt(rondas)
        
        let instrucciones = document.querySelector("#instrucciones");
        let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
        let contenedorPuntosPC = document.querySelector("#puntos-computadora");
        let mensaje = document.querySelector("#mensaje");
        let contenedorGanaPunto = document.querySelector("#gana-punto");
        let elegiTuArma = document.querySelector("#elegi-tu-arma");
        
        let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
        let contenedorEleccionPC = document.querySelector("#eleccion-computadora");
        
        instrucciones.innerText = "El primero en llegar a " + rondas + " puntos gana."
        let botonesArmas = document.querySelectorAll(".arma");
        botonesArmas.forEach(boton => {
            boton.addEventListener("click", iniciarTurno);
        });
        
        function iniciarTurno(e) {
            
            let eleccionPC = Math.floor(Math.random() * 3);
            let eleccionUsuario = e.currentTarget.id;
        
            // piedra => 0
            // papel => 1
            // tijera => 2
        
            if (eleccionPC === 0) {
                eleccionPC = "piedra🗿";
            } else if (eleccionPC === 1) {
                eleccionPC = "papel📋"
            } else if (eleccionPC === 2) {
                eleccionPC = "tijera✂️"
            }
        
            // piedra vence a tijera
            // tijera vence a papel
            // papel vence a piedra
            // si son iguales es empate
        
            if (
                (eleccionUsuario === "piedra🗿" && eleccionPC === "tijera✂️") ||
                (eleccionUsuario === "tijera✂️" && eleccionPC === "papel📋") ||
                (eleccionUsuario === "papel📋" && eleccionPC === "piedra🗿")
            ) {
                ganaUsuario();
            } else if (
                (eleccionPC === "piedra🗿" && eleccionUsuario === "tijera✂️") ||
                (eleccionPC === "tijera✂️" && eleccionUsuario === "papel📋") ||
                (eleccionPC === "papel📋" && eleccionUsuario === "piedra🗿")
            ) {
                ganaPC();
            } else {
                empate();
            }
        
            mensaje.classList.remove("disabled");
            contenedorEleccionUsuario.innerText = eleccionUsuario;
            contenedorEleccionPC.innerText = eleccionPC;
        
            if (puntosUsuario > rondas / 2|| puntosPC > rondas / 2) {

                if (puntosUsuario > rondas / 2) {
                    console.log(" j1 :" + puntosUsuario)
                    console.log(rondas)
                    instrucciones.innerText = "🔥 ¡Ganaste el juego! 🔥"
                    document.getElementById("elegi-tu-arma").style.display = "none"
                    document.getElementById("reiniciar").style.display = "block"
                    
                  }
                }
      
                if (puntosPC > rondas / 2) {
                    instrucciones.innerText = "😭 ¡Perdiste! 😭"
                    document.getElementById("elegi-tu-arma").style.display = "none"
                    document.getElementById("reiniciar").style.display = "block"
                    document.getElementById("mensaje").style.display = "block"
                  }
                else if  (puntosPC === puntosUsuario && puntosPC + puntosUsuario === rondas){
                      instrucciones.innerText = "🔥 ¡EMPATE! 🔥"
                      document.getElementById("elegi-tu-arma").style.display = "none"
                      document.getElementById("reiniciar").style.display = "block"
                      document.getElementById("mensaje").style.display = "block"
                  }
        
                  reiniciar.addEventListener("click", reiniciarJuego);
        }
        
        function ganaUsuario() {
            puntosUsuario++;
            contenedorPuntosUsuario.innerText = puntosUsuario;
            contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥"
        }
        
        function ganaPC() {
            puntosPC++;
            contenedorPuntosPC.innerText = puntosPC;
            contenedorGanaPunto.innerText = "¡La computadora ganó un punto! 😭"
        }
        
        function empate() {
            contenedorGanaPunto.innerText = "¡Empate! 😱"
        }
        
        function reiniciarJuego() {
            document.getElementById("instrucciones").style.display = "none"
          document.getElementById("marcador").style.display = "none"
          document.getElementById("elegi-tu-arma").style.display = "none"
          document.getElementById("start-container").style.display = "block"
          document.getElementById("reiniciar").style.display = "none"
          document.getElementById("mensaje").style.display = "none"
          puntosUsuario = 0;
          puntosPC = 0;
          let rondas = document.querySelector("#rounds").value
          rondas = parseInt(rondas)
          rondas = 0
          contenedorPuntosUsuario.innerText = puntosUsuario;
          contenedorPuntosPC.innerText = puntosPC;
          const botonesArmas = document.querySelectorAll(".arma");
          botonesArmas.forEach(boton => {
              boton.removeEventListener("click", iniciarTurno);
             });
}
}
}

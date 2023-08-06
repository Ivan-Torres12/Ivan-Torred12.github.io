var cartas = [
    {nombre: 'Alejandro', seleccion: false}, {nombre: 'Rodrigo', seleccion: false},
    {nombre: 'Irina', seleccion: false}, {nombre: 'Elena', seleccion: false}, 
    {nombre: 'Vanessa', seleccion: false}, {nombre: 'Daniel', seleccion: false}, 
    {nombre: 'Carlos', seleccion: false}, {nombre: 'Amelia', seleccion: false}, 
    {nombre: 'Alejandro', seleccion: false}, {nombre: 'Rodrigo', seleccion: false}, 
    {nombre: 'Irina', seleccion: false}, {nombre: 'Elena', seleccion: false}, 
    {nombre: 'Vanessa', seleccion: false}, {nombre: 'Daniel', seleccion: false}, 
    {nombre: 'Carlos', seleccion: false}, {nombre: 'Amelia', seleccion: false}
  ]
  
  var intentos = 0;
  var jugada1 = "";
  var jugada2 = "";
  var identificadorJ1 = "";
  var identificadorJ2 = "";
  var turno = 0;
  var scoreJugador1 = 0;
  var scoreJugador2 = 0;
  var jugadores = 2;
  var turnoActual = 1;
  
  function indicarTurnoJugador1() {
    turnoActual = 1;
    turno = turnoActual
    alert("Turno del Jugador 1")
}

function indicarTurnoJugador2() {
    turnoActual = 2;
    turno = turnoActual
    alert("Turno del Jugador 2")
}

  function iniciarJuego () {  
    var dato = document.getElementById("juego")
    dato.style.opacity = 1;
  
    cartas.sort(function() {return Math.random() - 0.5})
    for ( var i = 0 ; i < 16 ; i++ ) {
      var carta = cartas[i].nombre
      var dato = document.getElementById( i.toString() )
      dato.dataset.valor = carta;
    }
  }
  
  function resetearJuego () {
    cartas.sort(function() {return Math.random() - 0.5})

    for ( let i = 0 ; i < 16 ; i++ ) {
      const carta = cartas[i].nombre;
      const dato = document.getElementById( i.toString() )
      dato.dataset.valor = carta;
      colorCambio( i, 'purple', '?')

      cartas[i].seleccion= false;
    } 
    var juegoElemento = document.getElementById("juego");
    juegoElemento.style.opacity = 1;
  }
  
  function girarCarta () {
    var evento = window.event;
  
    jugada2 = evento.target.dataset.valor
    identificadorJ2 = evento.target.id

    if (turno==0){
      alert("Elige el turno primero")
      return
    }

    if ( jugada1 !== "" && jugada2 !== "" && identificadorJ1 !== "" && identificadorJ2 !== "") {
  
      if ( jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true &&               cartas[parseInt(identificadorJ1)].seleccion != true) {
        
        cartas[parseInt(identificadorJ1)].seleccion = true
        cartas[parseInt(identificadorJ2)].seleccion = true
  
        colorCambio(identificadorJ2, "violet", jugada2)
        vaciar();
        comprobar();
      }else if(identificadorJ1 !== identificadorJ2){
        var self = this;
        setTimeout(function(){
          colorCambio(self.identificadorJ1, "black", "?")
          colorCambio(self.identificadorJ2, "black", "?")
          vaciar()
        },200); 
  
        colorCambio(identificadorJ2, "violet", jugada2)
      }
    } else if(jugada2 !== "valor") {
  
      colorCambio(identificadorJ2, "violet", jugada2)
  
      jugada1 = jugada2;
      identificadorJ1 = identificadorJ2
    }
  }
  
  function vaciar ()  {
    jugada1 = ""; 
    jugada2 = ""; 
  
    identificadorJ1 = "";
    identificadorJ2 = "";
  }
  
  function colorCambio (posicion, color, contenido) {
    document.getElementById(posicion.toString()).style.backgroundColor = color
    document.getElementById(posicion.toString()).innerHTML = contenido
    
  }  

  function comprobar() {
    if (jugada1 !== "" && jugada2 !== "" && identificadorJ1 !== "" && identificadorJ2 !== "") {
      if (jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 &&
        !cartas[parseInt(identificadorJ2)].seleccion && !cartas[parseInt(identificadorJ1)].seleccion) {
  
        cartas[parseInt(identificadorJ1)].seleccion = true;
        cartas[parseInt(identificadorJ2)].seleccion = true;
  
        colorCambio(identificadorJ2, "violet", jugada2)
        vaciar()
        aumentarScore(turno)
        comprobar()
      } else if (identificadorJ1 !== identificadorJ2) {
        var self = this;
        setTimeout(function() {
          colorCambio(self.identificadorJ1, "black", "?")
          colorCambio(self.identificadorJ2, "black", "?")
          vaciar()
        }, 200);
      }
    } else {
      alert("Gira dos cartas primero antes de comprobar.")
    }
  }

  function mostrarMensajePuntaje(jugadorNombre, puntaje) {
    alert(`¡Encontraste un par! ${jugadorNombre} obtiene 1 punto. Puntaje actual: ${puntaje}`);
  }
  
  function aumentarScore(jugador) {
    if (jugador === 1 && turnoActual === 1) {
      scoreJugador1++;
      mostrarMensajePuntaje("Jugador 1", scoreJugador1)
      reiniciarPuntajeOtroJugador(2)
    } else if (jugador === 2 && turnoActual === 2) {
      scoreJugador2++;
      mostrarMensajePuntaje("Jugador 2", scoreJugador2)
      reiniciarPuntajeOtroJugador(1)
    }
  }
  
    function cambiarTurno() {
      turnoActual = (turnoActual % jugadores) + 1
      alert("Turno del Jugador " + turnoActual)
    }
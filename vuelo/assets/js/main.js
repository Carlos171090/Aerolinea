$(document).ready(function() { // lo incio siempre para ser ordenado al momento del Jquery

  $(document).on("change","#origen", function(){ // bsco las acciones  en este caso el change solo se utiliza en js, ya que en el html no va change, siempre se utiliza cuando se utiliza option en este caso en el selct
    
      mostrarEscalas()
      let origen = $('option:selected', "#origen").text()
      $("#resultado-origen").html(origen)
  })

  $(document).on("change","#destino", function(){ 
    mostrarEscalas()
      let destino = $('option:selected', "#destino").text()
      $("#resultado-destino").html(destino)
  })

  $(document).on("input", "#fecha-origen", function() {
      let fechaOrigen = $("#fecha-origen").val()
      $("#resultado-fecha-origen").text(fechaOrigen)
      mostrarEscalas()
  })

  $(document).on("input", "#fecha-destino", function() {
    let fechaDestino = $("#fecha-destino").val()
      $("#resultado-fecha-destino").text(fechaDestino)
      mostrarEscalas()
  })

  function mostrarEscalas() { // declaro la funcion  con las mismas variables  con un .val() y si mismo creo otra variable y les doy la logica para que muestren la fecha y el origen y el destino
    // que aprace abajo en iterinario por eso de declara solo con "" ya que eso lo ingresa el usuario  siemprees un !== y los && es para indicar que la otra variable igual lo debe hacer
    let origen = $("#origen").val()
    let destino = $("#destino").val()
    let fechaOrigen = $("#fecha-origen").val()
    let fechaDestino = $("#fecha-destino").val()

    let mostrarItinerario = origen !== "" && destino !== "" && fechaOrigen !== "" && fechaDestino !== ""

      if(mostrarItinerario){
          $("#contenedor-itinerario").removeClass("d-none")
      } else {
          $("#contenedor-itinerario").addClass("d-none")
      }
      

      let siTieneEscala = (origen === "chicago" && destino === "venecia") || // aca declaro una ultima variable haciendo el llamado a las anteriores en () y asi como solo indico que tiene o no escala 
                          (origen === "boston" && destino === "paris")  // debe ser en orden ya que solo chicago y venicia tenian escala  y arrojo el mensaje  igual ordenado ya que corresponde a ese orden 

      let mensajeEscala = siTieneEscala ? "¡Ojo! Tu vuelo tiene una escala" : "Tu vuelo no tiene escala"
      $("#resultado-escala").html(mensajeEscala)

  }
})
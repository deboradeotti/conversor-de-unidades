function calcular() {
  var entrada = document.querySelector('#anosluz')
  var valorAnosLuz = entrada.value
  var anosLuzFloat = parseFloat(valorAnosLuz)
  var kmCalcula = (anosLuzFloat*(9.461*(10**12))).toFixed(3)  
  var valida = isNaN(kmCalcula)
  if (valida === false) {                
    document.querySelector(".resultado").innerHTML = "A distância é de " + kmCalcula + " km."
  } 
  if (valida === true) {
    document.querySelector(".resultado").innerHTML = "Valor inválido."
  }
  entrada.value = ""
  }

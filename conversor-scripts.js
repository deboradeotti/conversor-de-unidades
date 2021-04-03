function calcular() {
  var entrada = document.querySelector('#anosluz')
  var valorAnosLuz = entrada.value
  var anosLuzFloat = parseFloat(valorAnosLuz)
  var kmCalcula = (anosLuzFloat*(9.461*(10**12))).toFixed(3)                  
  document.querySelector(".resultado").innerHTML = "A distância é de " + kmCalcula + " km."
  }

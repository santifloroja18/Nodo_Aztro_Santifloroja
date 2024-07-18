// Un nadador necesita conocer el promedio final de tiempo que gasta en recorrer una piscina de 100 metros, sabiendo que en el día el realiza cinco pruebas medidas en segundos.

function calcularPromedioTiempos(tiempos) {
    // Sumar todos los tiempos
    let suma = 0;
    for (let i = 0; i < tiempos.length; i++) {
      suma += tiempos[i];
    }
    
    // Calcular el promedio
    const promedio = suma / tiempos.length;
    
    return promedio;
  }
  
  // Ejemplo de uso
  const tiemposPruebas = [50.5, 52.3, 49.8, 51.7, 50.2]; // Tiempos en segundos
  
  const promedioTiempo = calcularPromedioTiempos(tiemposPruebas);
  
  console.log(`El promedio de tiempo en recorrer la piscina de 100 metros es: ${promedioTiempo.toFixed(2)} segundos`);
  
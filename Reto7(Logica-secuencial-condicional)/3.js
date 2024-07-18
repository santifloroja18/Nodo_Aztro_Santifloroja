// Un maestro de obra quiere emplear una forma rápida de poder calcular el numero de ladrillo que necesita para una pared ¿Puedes ayudarlo?

function calcularLadrillos() {
    const anchoPared = parseFloat(document.getElementById('anchoPared').value);
    const altoPared = parseFloat(document.getElementById('altoPared').value);
    const anchoLadrillo = parseFloat(document.getElementById('anchoLadrillo').value);
    const altoLadrillo = parseFloat(document.getElementById('altoLadrillo').value);
  
    if (isNaN(anchoPared) || isNaN(altoPared) || isNaN(anchoLadrillo) || isNaN(altoLadrillo)) {
      document.getElementById('resultado').textContent = 'Por favor, ingrese valores válidos.';
      return;
    }
  
    const areaPared = anchoPared * altoPared;
    const areaLadrillo = anchoLadrillo * altoLadrillo;
    const numeroLadrillos = Math.ceil(areaPared / areaLadrillo);
  
    document.getElementById('resultado').textContent = `Número de ladrillos necesarios: ${numeroLadrillos}`;
  }
  
  
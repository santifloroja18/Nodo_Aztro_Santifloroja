function calcularCompra(){
    let tipoUsuario = document.getElementById('afiliacion').value;
    let valorCompra = parseFloat(document.getElementById('vCompra').value);

    if(tipoUsuario == "2"){
        if(valorCompra>100000.0 && valorCompra<300000.0){
            let descuento = valorCompra*0.03;
            let totalPagar = valorCompra - descuento;
            alert("Se aplica descuento")
            document.getElementById('descuento').value = descuento;
            document.getElementById('total').value = totalPagar;
        }else if(valorCompra>=300000.0 && valorCompra<=499000.0){
            let descuento = valorCompra*0.05;
            let totalPagar = valorCompra - descuento;
            alert("Se aplica descuento")
            document.getElementById('descuento').value = descuento;
            document.getElementById('total').value = totalPagar;
        }else if(valorCompra>499000.0){
            const descuento = 80000.0;
            let totalPagar = valorCompra - descuento;
            alert("Se aplica descuento")
            document.getElementById('descuento').value = descuento;
            document.getElementById('total').value = totalPagar;
        }else{
            alert("Se compra no alcanza los $100.000 pesos")
            document.getElementById('descuento').value = descuento;
            document.getElementById('total').value = totalPagar;
        }


    }else{
        alert("No aplica para ningún descuento")
        document.getElementById('descuento').value = 0;
        document.getElementById('total').value = valorCompra;
    }
}

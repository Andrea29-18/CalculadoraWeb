var operacion = "";
var pantalla;

window.onload = function() {
    pantalla = document.getElementById("txt_resultado");
}

function limpiar() {
    operacion = "";
    pantalla.value = operacion;
}

function borrar() {
    if(operacion.length > 0) {
        operacion = operacion.substring(0, operacion.length - 1);
    }
    pantalla.value = operacion;
}

function clickbutton(element){
    switch(element.id) {
        case 'b00': operacion += "0"; break;
        case 'b01': operacion += "1"; break;
        case 'b02': operacion += "2"; break;
        case 'b03': operacion += "3"; break;
        case 'b04': operacion += "4"; break;
        case 'b05': operacion += "5"; break;
        case 'b06': operacion += "6"; break;
        case 'b07': operacion += "7"; break;
        case 'b08': operacion += "8"; break;
        case 'b09': operacion += "9"; break;
        case 'bpanIzq': operacion += "("; break;
        case 'bpanDer': operacion += ")"; break;
        case 'b_sum': if (operacion.length > 0 && validarOperador()) operacion += "+"; break;
        case 'b_res': if (validarOperador()) operacion += "-"; break;
        case 'b_mul': if (operacion.length > 0 && validarOperador()) operacion += "*"; break;
        case 'b_div': if (operacion.length > 0 && validarOperador()) operacion += "/"; break;
        case 'b_pun': if (validarPunto()) operacion += "."; break;
        
        case 'b_ig':
            if(validarOperador()) {
                try {
                    console.log(eval (operacion));
                    operacion = "" + eval(operacion);
                } catch (e) {
                    console.log(e);
                    alert("La operación no es válida");
                    operacion = "";
                }
            }
            break;
    }
    pantalla.value = operacion;
}

function validarOperador() {
    if(!operacion.endsWith("+") && !operacion.endsWith("-") && !operacion.endsWith("*") && !operacion.endsWith("/")) {
        return true;
    }
    return false;
}

function validarPunto() {
    if(operacion.length == 0 || !validarOperador()) {
        return true;
    }

    var temp = operacion;
    temp = temp + '.';

    try{
        eval(temp);
        return true;
    }catch(e) {
        console.log(e);
    }

    return false;
}
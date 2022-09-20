/*  Simulador --> Control de Temperatura Hogareño 
    ---------------------------------------------
    Funciona en dos franjas horarias:   06:00hs - 08:00hs   (al levantarse, corta cuando se sale al Trabajo, Colegio, etc.)
                                        16:30hs - 22:30hs   (al regresar del Trabajo, Colegio, etc.; hasta la hora de acostarse)
        Por una cuestión de simplificación, la hora se toma como Float (ej. 07:30hs --> 7.5 [hs])
    
    Parámetros que recibe:  Temp. Actual
                            Temp. Deseada
                            Hora Actual                     
                            
    Los ingresos son por medio de funciones que controlan los datos ingresados      */



/*  Funciones   */
function controlTemperatura(temperaturaActual, temperaturaDeseada, horaActual) {
    if(((horaActual >= 6) & (horaActual <= 8)) | ((horaActual >= 16.5) & (horaActual <= 22.5))) {
        if(temperaturaActual < temperaturaDeseada){
            alert('Calentando el ambiente...');
        }else if(temperaturaActual > temperaturaDeseada){
            alert('Enfriando el ambiente...');
        }else{
            alert('Temperatura en su punto justo...');
        }
        alert('Temperatura Controlada.');
    } else {
        alert('Horario Fuera de Control.');
    }
}

function ingresoTemperatura() {
    let temperatura = 0;
    
    do{
        temperatura = Number(prompt('Ingrese una Temperatura (Mín: -20°C ; Máx: 60°C), por favor: '));
    }while((temperatura < -20) | (temperatura > 60));
    
    return temperatura;
}

function ingresoHora() {
    let hora = 0;

    do{
        hora = parseFloat(prompt('Ingrese una Hora en formato fraccionario (ej. 21:45hs --> 21.75 [hs]), por favor: '));
    }while((hora < 0) | (hora > 23.99));

    return hora;
}

/*  Ejecución Principal */
let cantidadMediciones = parseInt(prompt('Ingrese cuantas mediciones desea realizar: '));

for(let i=0; i < cantidadMediciones; i++){
    alert('Temperatura Actual');
    let tempActual = ingresoTemperatura();
    
    alert('Temperatura Deseada');
    let tempDeseada = ingresoTemperatura();

    let hoActual = ingresoHora();

    controlTemperatura(tempActual, tempDeseada, hoActual);
}

alert('Gracias por usar nuestro Sistema ;-)');
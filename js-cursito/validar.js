/*
JAVASCRIP ES UN LENGUAJE DE PROGRAMACION MULTIPARADIGMA, ACEPTA PROGRAMACION FUNCIONAL, ESTRUCTURADA
ESTRUCTURADA, POO, EVENTOS 

EN JS NO EXISTE INT, DOUBLE, FLOAT, STRING 

PARA EL MANEJO DE DATOS CON TIPO DE DATOS EXISTE EL ESTANDAR ES6 EL CUAL NOS DICE QUE PARA EL MANEJO DE VARIABLES
TENEMOS: 

VAR, CONST, LET




*/

//Tarea 5 ejercicios de javascrip


//vamos a hacer una funcion para comprobar que el campo nombre sea mayor a 3 caracteres

function validar(formulario){
    if(formulario.nombre.value.length < 4){
        alert("Escribe por favor mas 3 caracteres en el nombre");
        fomrulario.nombre.focus();
        return false;
    }

    var abcok = "abcdefghijk";
    var checkStr = formulario.nombre.value;

    alert(checkStr);

    var alivalido = true;

    /*Haremos un bucle mediante el cual primero obtenga la cadena del nombre y la separa en caracateres 
    una vez que tenga cada caracter 
    */

    for(var i = 0; i < checkStr.length; i++){
        var caracateres = checkStr.charAt(i);
    }
    for(var j = 0; j < abcok.length; j++){
        if(caracateres == abcok.charAt(j)){
            break;
        }
        if(j == abcok.length){
            alivalido = false;
            break;
        }
         if (alivalido){
            alert("Escriba unicamente letras en el campo de nombre");
            formulario.nombre.focus();
            return false;
         }
    }
    //numeros
    var abcok = "1234567890";
    var checkStr = formulario.edad.value;

    alert(checkStr);

    var alivalido = true;

    /*Haremos un bucle mediante el cual primero obtenga la cadena del nombre y la separa en caracateres 
    una vez que tenga cada caracter 
    */

    for(var i = 0; i < checkStr.length; i++){
        var caracateres = checkStr.charAt(i);
    }
    for(var j = 0; j < abcok.length; j++){
        if(caracateres == abcok.charAt(j)){
            break;
        }
        if(j == abcok.length){
            alivalido = false;
            break;
        }
         if (alivalido){
            alert("Escriba unicamente numeros en el campo de edad");
            formulario.edad.focus();
            return false;
         }
    }

    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;
    var txt = formulario.correo.value;
    alert("Email " + (b.test(txt)? " ": " no valido ") + "valido");
    return b.test;

    


}
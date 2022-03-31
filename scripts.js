//********************************************************************************
    // C O N S I G N A  1 // Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado (OK)
//********************************************************************************

   let  numeroA = parseInt (prompt ("Ingresar un numero para sumar a la calculadora"));
   let   numeroB = parseInt (prompt ("Sumale otro numerito"));
//Suma  de dos números (A + B = Salida)
   let resultadoSuma  = numeroA + numeroB;

//********************************************************************************
    // C O N S I G N A  2 //Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”. (OK)
//********************************************************************************

//script de texto hasta ESC
  let entrada = prompt("Para ver el resultado, ingresar ESC");
//Repetimos con While hasta que el usuario ingresa "ESC" (LA SALIDA CAMBIA EN BASE A LO INGRESADO POR USUARIO)
   while(entrada != "ESC" ){
  alert(" El usuario debe ingresar ESC para ver resultado de tu suma, El usuario ingresó "+ entrada) ;
//Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
   entrada = prompt("Ingresar ESC para ver el resultado de tu suma");
   }

//corro los logs de consola en esta instancia para que no interfieran con la consigna 3
console.log(resultadoSuma);
console.log(entrada);

//********************************************************************************
    // C O N S I G N A  3 //Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada. (OK)
//********************************************************************************

//numeroX es el valor que se va a mostrar la pagina, el cual se le pide al user
let  numeroX = parseInt (prompt ("Ingresar un numero de veces que queres que javascript te salude en el log de consola"));

//"holas" es la constante y la misma contiene simplemente el texto HOLA!
const holas = 'HOLA! ';

//el script funciona perfectamente, me volvi medio loquito con la sintaxis pero me ayudè a fuerza de google con prueba y error
    console.log 
        (
//la comilla simple (') me muestra la variable ($) como texto. La misma variable consiste en la constante "holas" que define el texto de saludo,
//y la entrada numeroX siendo aplicada en funcion de repeat, todo entre llaves para su ejecucion correcta
            `
            ${holas.repeat(numeroX)}
            `
    );


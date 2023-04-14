/* 
Operadores de Condición 
*/
document.write("<h2> ** Verificación de Condiciones Simples y Dobles ** <h2>");
document.write("<h3>Cond. #1  " + (4 < 4));
document.write("<h3>Cond. #2  " + (23 == 33));
document.write("<h3>Cond. #3  " + (37 >= -3));
document.write("<h3>Cond. #4  " + ("Joel" == "Joel"));
document.write("<h3>Cond. #5  " + ("joel" == "Joel") );
document.write("<h3>Cond. #6  " + ('!"$:;14;' != "123qwerty") );
document.write("<h3>Cond. #7  " + (("Joel" == "Joel") && ('!"$:;14;' == '!"$:;14;')) );
document.write("<h3>Cond. #8  " + (("Joel" == "joel") || ('!"$:;14;' == '!"$:;14;')) );
document.write("<h3>Cond. #9  " + (("joel" != "Joel") && ('!"$:;14;' != "123qwerty")) );
document.write("<h3>Cond. #10 " + (("joel" != "Joel") && !('!"$:;14;' != "123qwerty"))+(" Igual que #9 con 2da Condición Negada") ); /* niego la 2da expresión */

document.write("<h2>*** Verficación Edad de Usuario *** <h2>"); 
/* Verifico Edad Usando "if" y "else" fuera del console.log */
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 100;  /* Debe ser menor que este número */  
let edadUsuarioIngresado = 23;
edadUsuarioIngresado = prompt("Ingrese Edad de Usuario");
document.write("<h2>Edad de Usuario Ingresada = " +edadUsuarioIngresado+ ".-");
document.write('<h2>Verfico Edad del Usuario usando "if" y "else" fuera del "console.log"'); 
if((edadUsuarioIngresado >= EDAD_MINIMA) && (edadUsuarioIngresado < EDAD_MAXIMA)) {
    document.write("<h2>Chk Edad #1 = Edad de Usuario Válida!!"); }
else {
    document.write("<h2>Chk Edad #1 = Edad de Usuario No válida!!"); } 

/* Dentro del console.log */
document.write('<h2>Verifico Edad del Usuario dentro del comando "console.log"');
document.write("<p>"+(((edadUsuarioIngresado >= EDAD_MINIMA) && (edadUsuarioIngresado < EDAD_MAXIMA)) ? 
    "Chk Edad #1 = Edad de Usuario Válida!!!" : "Chk Edad #1 = Edad de Usuario No válida!!!") +"<p>");
document.write("<p>"+(((edadUsuarioIngresado >= EDAD_MINIMA) || (edadUsuarioIngresado < EDAD_MAXIMA)) ? 
    "Chk Edad #2 = Edad de Usuario Válida!!!" : "Chk Edad #2 = Edad de Usuario No válida!!!") +"<p>");
document.write("<p>"+(((edadUsuarioIngresado <= EDAD_MINIMA) || (edadUsuarioIngresado < EDAD_MAXIMA)) ? 
    "Chk Edad #3 = Edad de Usuario Válida!!!" :  "Chk Edad #3 = Edad de Usuario No válida!!!")+"<p>");
document.write("<p>"+(((edadUsuarioIngresado <  EDAD_MINIMA) && (edadUsuarioIngresado > EDAD_MAXIMA)) ? 
    "Chk Edad #4 = Edad de Usuario Válida!!!" :  "Chk Edad #4 = Edad de Usuario No válida!!!")+"<p>");
document.write("<p>"+(((edadUsuarioIngresado <  EDAD_MINIMA) || (edadUsuarioIngresado > EDAD_MAXIMA)) ? 
    "Chk Edad #5 = Edad de Usuario Válida!!!" :  "Chk Edad #5 = Edad de Usuario No válida!!!")+"<p>");

document.write("<h2>** Fin **");
    /*Fin */

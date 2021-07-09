// NOTA: al tag HTML script he indicat l'atribut defer
// segons https://www.w3schools.com/tags/att_script_defer.asp
// el script s'executa quan finalitzi el parsing del HTML
// Torno a jquery ja que es simplifica molt el codi, sobretot pels temes ajax.   
/*    document.getElementById("guardar").addEventListener("click", guardar);
    document.getElementById("recupera").addEventListener("click", recupera);
    document.getElementById("formulari").addEventListener("click", mostraform);
*/

//tornem al redil jqury
    $(document).ready(function() {

        //Establim els events a controlar
        //$( "#textCerca" ).on('input', cercaNova);
        $( "#guardar" ).on('click', guardar);
        $( "#recupera" ).on('click', recupera);
        $( "#formulari" ).on('click', mostraform);
        //$( "#missatge" ).on('click', borrarMissatge);
        //$( "h1" ).on('click', prova);
    
    });






// Recuperar dades del servidor
function getDadesServer(url){
  $.get( url ).done( function( data ) {
    console.log( url );
    console.log( data );
    alert ("Username1: " + data.username + "\nCognom1: " + data.cognome  + "\nMissatge1: " + data.msg );
    return JSON.stringify(data);
  });
};








// Procés guardar valors en un tag html
function guardar(){
  alert("A punt de guardar valors");
  $.getJSON('/enviar', function(objJson) {
    //do something with the JSON here.
    console.log(objJson);
    alert ("Username: " + objJson.username + "\nCognom: " + objJson.cognome  + "\nMissatge: " + objJson.msg );
    $("#missatges").html("<p>" + objJson.msg + "</p>");
  });
};

//Proces per recuperar valors d'un tag html
function recupera(){
  alert("A punt de recuperar valors");

  //alert(JSON.stringify(objJson));
};


function mostraform(){
  alert("Mostrar formmulari");
};



function pintamsg(dades){
  var msg = document.getElementById("msg");
};

/*
function pintar_msg(data){
  var text_a_pintar = "";
  if (data["status"]){
    netejar_camps_formulari();
    $("#msg").css("color", "green");
    text_a_pintar = "Valors enviats: " + data["talta"] + " / " + data["tbaixa"] +  " / " + data["pulse"];
    $("#msg").text(text_a_pintar);
    $("#msg").css("color", "green");
  }
  else{
    $("#msg").css("color", "red");
    $("#msg").text(data["msg"]);
    if (!data["talta"])
      $('#talta').focus();
    else if (!data["tbaixa"])
      $('#tbaixa').focus();
    else
      $('#pulse').focus();      
  } 
}

function presentar_formulari(){
  netejar_camps_formulari();
  netejar_blocks(); 
  $("#altes").css("display", "block"); 
  //getDadesServer("/ultimes");
}

function netejar_camps_formulari(){
  $("#talta").val(""); 
  $("#tbaixa").val(""); 
  $("#pulse").val(""); 
  $("#msg").html(""); 
  $('#talta').focus();
  $("#llistat").html("");
}

// Fi procés alta -------------------------
//
function mostraMenu(){ 
  netejar_blocks();
  $("#menu").css("display", "block");
}

// Executar opcions del menu
function getDades(){
  //console.log("Get dades");
  $("#menu").css("display", "none");
  var opcio = $(this).attr("name");
  $("#llistat").html("");

  switch(opcio) {
    case "alta":
      presentar_formulari();
      break;
    case "ultimes":
      getDadesServer("/ultimes");
      break;
    case "setmana":
      getDadesServer("/setmana/0");
      break;
    case "setmanaA":
      getDadesServer("/setmana/1");
      break;
    case "mes":
      getDadesServer("/mes/0");
      break;
    case "mesA":
      getDadesServer("/mes/1");
      break;
    default:
      $("#llistat").html("Opció incorrecte");
  }

}
// Recuperar dades del servidor
function getDadesServer(opcio){
  $.get( opcio ).done(function( data ) {
    //console.log( opcio );
    $("#llistat").html(data);
  });
}

// 
function netejar_blocks(){
  $("#llistat").html("");
  $("#menu").css("display", "none"); 
  $("#altes").css("display", "none");
}
*/
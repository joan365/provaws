// Procés guardar valors
function guardar(){
  alert("A punt de guardar valors");
  //alert(JSON.stringify(objJson));
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
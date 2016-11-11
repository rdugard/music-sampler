$(document).ready(function(){

function hideAll() {
  $("#johnnyringototal").hide();
  $("#thefallouttotal").hide();
  $("#machinestotal").hide();
  $("#sk68total").hide();
}
hideAll()
//hides all of the players before you click on them



$(".albumcover").click(function(){
//when any picture in class albumcover is clicked the music player shows up

hideAll();



switch ($(this).attr("id")) {
  case "limitlesspic":
    $(this).animate( { top: "+=20px" }, 'fast' );
    $("#johnnyringototal").show();
    break;
  case "thefalloutpic":
    $(this).animate( { top: "+=20px" }, 'fast' );
    $("#thefallouttotal").show();
    break;
  case "theresistancepic":
    $(this).animate( { top: "+=20px" }, 'fast' );
    $("#machinestotal").show();
    break;
  case "retrogradepic":
    $(this).animate( { top: "+=20px" }, 'fast' );
    $("#sk68total").show();
    break;
}

$("audio").each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});



}); //end of clicking function


});


//when user clicks on the button with class "button" the 

//on click will add 1 to the vaRIABLE "count" and then display the count in the div with class "count"


function init() {
    console.log('App has started');
};

let count = 0;

init();



$(".button1").click(function(){
  count = count + 1;
  $(".count").html(count);
} );

$(".button2").click(function(){
    count = count + 2;
    $(".count").html(count);
} );

$(".button3").click(function(){
    count = count + 3;
    $(".count").html(count);
} );

$(".button4").click(function(){
    count = count + 4;
    $(".count").html(count);
} );

$(".button5").click(function(){
    count = count + 5;
    $(".count").html(count);
} );

$(".button6").click(function(){
    count = count + 6;
    $(".count").html(count);
} );

$(".button7").click(function(){
    count = count + 7;
    $(".count").html(count);
} );

$(".button8").click(function(){
    count = count + 8;
    $(".count").html(count);
} );

$(".button9").click(function(){
    count = count + 9;
    $(".count").html(count);
} );

$(".button0").click(function(){
    count = count + 0;
    $(".count").html(count);
} );
    
$(".-").click(function(){
  count = count - 2;
  $(".count").html(count);
} );

$(".reset").click(function(){
  count = 0;
  $(".count").html(count);
} );

$(".double").click(function(){
  count = count * 2;
  $(".count").html(count);
} );

$(".half").click(function(){
    count = count / 2;
    $(".count").html(count);
    } );
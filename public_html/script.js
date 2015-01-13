/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".wwb").css("background-color", "red");
    $("p:last").css("background-color", "pink");
    $('h1').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('h1').bind('click', mouseClick);
    
});

function mouseOverMe() {
    $("h1").html("This is easy");
}
function MouseOutMe() {
    $('hi').html('I am Cool');
}
function MouseClick() {
    $('p').html('swagswagswag');
}



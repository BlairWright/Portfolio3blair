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
    

$('#replaceWText').css('color', 'blue');

$('#replaceWText').bind('click', replaceWText);

$('#randPara').bind('click', addAPara);

$('#removePara').bind('click', removeAPara);
$(document).ready(function() {
 //Code to implement gallery using jkit
$('#myelement').jKit('gallery', { 'event': 'mouseover' });
});
});


function removeAPara() {
    $('#randPara p:last').remove();
}
function addAPara() {
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText() {
    $('#replaceWText').html('<h1>Kaelen sucks</h1>');
}
function alertButtonClick() {
    alert("There was a button clicked");
}


function mouseOverMe() {
    $("h1").html("This is easy");
}
function mouseOutMe() {
    $('hi').html('I am Cool');
}
function mouseClick() {
    $('p').html('swagswagswag');
}




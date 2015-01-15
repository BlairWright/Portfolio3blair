/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".background").css("background-image", "url()");
    $(".wwb").css("background-color", "red");
    $("p:last").css("background-color", "pink");
    $('h1').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('h1').bind('click', mouseClick);
    
    $('#superHumans').accordion({header: "h3"});
    

$('#replaceWText').css('color', 'blue');

$('#replaceWText').bind('click', replaceWText);

$('#randPara').bind('click', addAPara);

$('#cool').bind('click', yeet);

$('#coolv2').bind('click', yeetv2);

$('#removePara').bind('click', removeAPara);
$(document).ready(function() {
 //Code to implement gallery using jkit
$('#myelement').jKit('gallery', { 'event': 'mouseover' });
});
});

function yeet() {
    $('.logo').hide('explode', {}, 2500);
}

function yeetv2() {
    $('.logo').show('fade', {}, 2500);
}

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




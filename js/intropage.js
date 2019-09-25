// Everything OK?
console.log('OK');

// Open-overlay

$(document).ready(function(){
  $(".open-overlay").click(function(){
    $(".bar-top").animate({top: "14px"});
  });
  $(".open-overlay").click(function(){
    $(".bar-top").animate({top: "3px"});
  });
  $(".open-overlay").click(function(){
    $(".bar-bottom").animate({top: "3px"});
  });
  $(".open-overlay").click(function(){
    $(".bar-bottom").animate({top: "14px"});
  });
});

$(document).ready(function(){
    
  $(".overlay-navigation").hide();

  $(".open-overlay").click(function(){
      $(".overlay-navigation").animate({'width': 'toggle'});
  });
});

 // gallery filter 

 var checkClass = function() {
  
  // Remove Existing Hide 
  if ( $('figure').hasClass('hide') ) {
    $('figure').removeClass('hide'); 
  }
  
};

// light gallery 

$(document).ready(function() {
  $('#lightgallery').lightGallery({
    thumbnail: false, 
    share: false,
    pager: false
  });
});


// Click Photography
$('#photography').click( function() {
  
  // Check Class
  checkClass();
  
  // Hide Other Stuff
  $('figure:not(.gallery-images-photography)').toggleClass('hide');
});

// Click digital design
$('#digital-design').click( function() {
  
  checkClass();
  $('figure:not(.gallery-images-d-d)').toggleClass('hide');

});

// Click writing samples
$('#writing-samples').click( function() {

  checkClass();
  $('figure:not(.gallery-images-s-w)').toggleClass('hide');
  
});

// Show All 
$('#all-subjects-link').click( function() {
  
  checkClass();
  
});


// about me svg 

$svg = $('#about-be-svg').drawsvg();

function animate() {
$svg.drawsvg('animate');  
}

animate();



//footer copyright

// Get current year
var today = new Date();

// Store current year
var year = today.getFullYear();

// Check check 
console.log( today, year ); 


// Show current year
$('#copyright span').text( year );  


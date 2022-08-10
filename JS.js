$(document).ready(function(){
  $('#menuA').click(function(){
    $('.subMenu').slideToggle('500', function(){
      $(this).css('color', 'black');
    });
  });
});

$(document).ready(function(){
  $("#draggableElements img").draggable({
    containment : "#dragNDropBoxToBox",
    revert: "invalid",
  });

  $("#droppableElements").droppable();
});

$(document).ready(function(){
  $('.switchBody, .switchBall').click(function(){
    $('.toggleText').toggle('500', function(){
      if($('.toggleText').text() === "OFF") {
        $('.switchBall').animate({left: '32px',}, 'fast');
        $('.toggleText').css("position", "relative");
        $('.toggleText').text("ON");
        $('.switchBody').css('backgroundColor', 'green');
        $('.modeName').css('color', 'white');
        $('body').css('backgroundColor', 'black');
      } else {
        $('.switchBall').animate({left: '3px',}, 'fast');
        $('.toggleText').css("position", "relative");
        $('.toggleText').text("OFF");
        $('.switchBody').css('backgroundColor', 'gray');
        $('.modeName').css('color', 'black');
        $('body').css('backgroundColor', 'white');
      }
      $('.toggleText').css("display", "block");
    });
  });
});

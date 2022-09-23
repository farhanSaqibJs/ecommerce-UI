// Single product Slider at details page Start
$('.thumbnail-g').on('click', function() {
  var clicked = $(this);
  var newSelection = clicked.data('big');
  var $img = $('.primary-g').css("background-image","url(" + newSelection + ")");
  clicked.parent().find('.thumbnail-g').removeClass('selected');
  clicked.addClass('selected');
  $('.primary-g').empty().append($img.hide().fadeIn('slow'));
});
// Single product Slider at details page End

// product Details Table Js Start
$('.sectionForTable h4').click(function(event) {
  event.preventDefault();
  $(this).addClass('active');
  $(this).siblings().removeClass('active');

  var ph = $(this).parent().height();
  var ch = $(this).next().height();

  if (ch > ph) {
    $(this).parent().css({
      'min-height': ch + 'px'
    });
  } else {
    $(this).parent().css({
      'height': 'auto'
    });
  }
});

function tabParentHeight() {
  var ph = $('section').height();
  var ch = $('section ul').height();
  if (ch > ph) {
    $('section').css({
      'height': ch + 'px'
    });
  } else {
    $(this).parent().css({
      'height': 'auto'
    });
  }
}

$(window).resize(function() {
  tabParentHeight();
});

$(document).resize(function() {
  tabParentHeight();
});
tabParentHeight();

// product Details Table Js End


// register form animation JS start
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('form-container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});




// register form animation JS End


// Card Number JS Start


// Card Number JS End

$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
          $('.gray-out').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
          $('.gray-out').removeClass('active');
      }
  });
  $('.gray-out').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
          $('.hamburger').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
          $('.hamburger').removeClass('active');
      }
  });
  $('.globalMenuSp').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.gray-out').addClass('active');
          $('.hamburger').addClass('active');
      } else {
          $('.gray-out').removeClass('active');
          $('.hamburger').removeClass('active');
      }
  });
});
var barPos = $( '.top-bar' ).offset().top; // トップバーの位置
var barHeight = $( '.top-bar' ).outerHeight(); // トップバーの高さ
$( window ).on( 'scroll', function() {
    if ( 40 < $( this ).scrollTop() ) { // 1000px以上スクロールしたら
      $( '.top-bar' ).addClass( 'fixed' );
    } else {
      $( '.top-bar' ).removeClass( 'fixed' );
    }
  });
$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
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
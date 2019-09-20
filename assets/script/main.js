$(window).on('load', function() {
  $('.gamburger').click(function(){
    $('.gamburger').toggleClass('click-gamburger')
    $('.dropdown').toggle('dropdown')
  })

})
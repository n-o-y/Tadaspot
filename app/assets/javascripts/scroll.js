/*global $*/
/*global scrollHeight*/
/*global scrollPosition*/
console.log("Hello");
$('.jscroll').on('scroll', function() {
  let scrollHeight = $('.jscroll').height();
  let scrollPosition = $('.jscroll').scrollTop() - 140;
  console.log(scrollHeight);
  console.log(scrollPosition);
  if ( (scrollHeight - scrollPosition) / scrollHeight <= 0.05) {
    $('.jscroll').jscroll({
      contentSelector: '.scroll-list'
      // nextSelector: 'span.next:last a'
    });
  }
});
console.log("OK");
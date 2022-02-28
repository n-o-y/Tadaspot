/*global $*/
$('.jscroll').jscroll({
  contentSelector: '.scroll-list',
  loadingHtml: '読み込み中',
  autoTrigger: true,
  padding: 50,
  callback: function(){
    $('.post-star').empty();
    $('.post-star').raty({
      readOnly: true,
      score: function(){
        return $(this).attr('data-score');
      }
      // path: "/assets/"
    });
  }
});
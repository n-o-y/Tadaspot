/*global $*/
$('.post-star').raty({
    readOnly: true,
    score: function(){
      return $(this).attr('data-score');
    }
    // path: '/public/'
});

$('.like-star').raty({
    readOnly: true,
    score: function(){
      return $(this).attr('data-score');
    }
    // path: "/assets/"
});
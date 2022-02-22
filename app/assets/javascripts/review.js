/*global $*/
$('.post-star').raty({
    readOnly: true,
    score: function(){
      return $(this).attr('data-score');
    }
    // starOn: '/assets/views/star-off.png',
    // starOff: "<%= asset_path('star-off.png') %>"
});

$('.like-star').raty({
    readOnly: true,
    score: function(){
      return $(this).attr('data-score');
    }
    // path: "/assets/"
});
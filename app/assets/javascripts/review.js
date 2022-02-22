/*global $*/
$('.post-star').raty({
    readOnly: true,
    score: function(){
      return $(this).attr('data-score');
    },
    path: "/public/"
    // starOn: "<%= asset_path('star-on.png') %>",
    // starOff: "<%= asset_path('star-off.png') %>"
});

$('.like-star').raty({
    readOnly: true,
    score: function(){
      return $(this).attr('data-score');
    },
    path: "/assets/"
});
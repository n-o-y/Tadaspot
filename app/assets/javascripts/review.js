/*global $*/
$('.post-star').raty({
    readOnly: true,
    score: function(){
      return $(this).attr('data-score');
    },
    path: "/public/",
    starOn: "star-on.png",
    starOff: "star-off.png"
});

$('.like-star').raty({
    readOnly: true,
    score: function(){
      return $(this).attr('data-score');
    }
    // path: "/assets/"
});
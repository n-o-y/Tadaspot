/*global $*/
$('.post-star').raty({
    readOnly: true,
    score: function(){
      return $(this).attr('data-score');
    },
    starOn: "/assets/star-on.png",
    starOff: "/assets/star-off.png",
    starHalf: "/assets/star-half.png"
});

$('.like-star').raty({
        readOnly: true,
        score: function(){
          return $(this).attr('data-score');
        },
        starOn: "/assets/star-on.png",
        starOff: "/assets/star-off.png",
        starHalf: "/assets/star-half.png"
});
console.log("test");
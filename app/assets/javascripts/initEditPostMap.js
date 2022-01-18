  let map;
  let geocoder;
  let marker;

  function initEditPostMap(){
    geocoder = new google.maps.Geocoder();
    post_LatLng = new google.maps.LatLng(
      gon.post.latitude,
      gon.post.longitude
    );

    map = new google.maps.Map(document.getElementById('map'),{
      center: post_LatLng,
      zoom: 14
    });

    marker = new google.maps.Marker({
      map: map,
      position: post_LatLng
    })

  };
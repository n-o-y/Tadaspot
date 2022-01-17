  let map;
  let geocoder;
  let marker = [];
  let infoWindow = [];

  function initPostMap(){
    geocoder = new google.maps.Geocoder();
    post_LatLng = new google.maps.LatLng(
      gon.post.latitude,
      gon.post.longitude
    );
    map = new google.maps.Map(document.getElementById('map'),{
      center: post_LatLng,
      zoom: 14
    });

    let markerData = gon.posts;

    for (let i = 0; i < markerData.length; i++) {
      let markerLatLng = {lat: parseFloat( markerData[i]['latitude'] ), lng: parseFloat( markerData[i]['longitude'] )};
      marker[i] = new google.maps.Marker({
        map: map,
        position: markerLatLng
      });

      const postId = markerData[i]['id'];
      infoWindow[i] = new google.maps.InfoWindow({
        content: '<a href="/posts/' + postId + '">' + markerData[i]['name'] + '</a>'
      });

      markerEvent(i);

    }

    function markerEvent(i) {
      marker[i].addListener('click', function() {
        infoWindow[i].open(map, marker[i]);
      });
    }
  };
 function currentLocation(){
    navigator.geolocation.getCurrentPosition(function(position) {
      LatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      map = new google.maps.Map(document.getElementById('map'),{
        center: LatLng,
        zoom: 16
      });
      marker = new google.maps.Marker({
        map: map,
        position: LatLng
      });
    });
  }

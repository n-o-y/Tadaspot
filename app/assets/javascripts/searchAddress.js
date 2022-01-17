function searchAddress(){
    let inputSearchAddress = document.getElementById('search').value;
    // let geocoder;
    // let map;
    geocoder.geocode( { 'address': inputSearchAddress }, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
function getClickLatLng(lat_lng, map) {
    document.getElementById('getlat').textContent = lat_lng.lat();
    document.getElementById('getlng').textContent = lat_lng.lng();
    console.log(clickMarker != null);
    if (clickMarker != null){
      clickMarker.setMap(null);
    }
    clickMarker = null;
    clickMarker = new google.maps.Marker({
      position: lat_lng,
      map: map,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/micons/yellow.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    });
    let postLat = document.getElementById('postLat')
    postLat.value = lat_lng.lat();
    let postLng = document.getElementById('postLng')
    postLng.value = lat_lng.lng();
  }
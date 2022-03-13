let geocoder = new google.maps.Geocoder();

if (geocoder) {
    geocoder.geocode(
        {
            address: "810 Horsehill Rd NW, Edmonton, Alberta",
        },
        function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                let lat = results[0].geometry.location.lat();
                let lng = results[0].geometry.location.lng();

                console.log(lng);
                let mapOptions = {
                    center: new google.maps.LatLng(lat, lng),
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    draggable: false,
                    zoomControl: false,
                    scrollwheel: false,
                    disableDoubleClickZoom: true,
                    mapTypeControl: false,
                    fullscreenControl: false,
                    streetViewControl: false,
                };

                let map = new google.maps.Map(
                    document.getElementById("map-canvas"),
                    mapOptions
                );

                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(lat, lng),
                    map: map,
                    title: "CharacterDB Site",
                });
            }
        }
    );
}

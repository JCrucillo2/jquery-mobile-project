var defaultLatLng = new google.maps.LatLng(
    53.589188757639185,
    -113.33148788990094
);
if (navigator.geolocation) {
    function success(pos) {
        drawMap(
            new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
        );
    }
    function fail(error) {
        drawMap(defaultLatLng);
    }
    navigator.geolocation.getCurrentPosition(success, fail, {
        maximumAge: 500000,
        enableHighAccuracy: true,
        timeout: 6000,
    });
} else {
    drawMap(defaultLatLng);
}
function drawMap(latlng) {
    var myOptions = {
        zoom: 10,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
    };
    var map = new google.maps.Map(
        document.getElementById("map-canvas"),
        myOptions
    );
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: "Greetings!",
    });
}

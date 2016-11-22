//
//// API reference docs - https://developers.google.com/maps/documentation/javascript/3.exp/reference
//
//// TODO:
///*
//declare lets for all initialized values
//create HTML links to functions
//    click.(function() {
//        pan to location
//        increase zoom
//        show a dialog box of some kind -bootstrap?
//    });
//    dialog box.mouseleave(function() {
//        recenter
//        reset zoom
//        close dialog box
//    })
//
//add dates to workplaces
//add marker icons before workplace name
//color coordinate icon markers & map markers
//*/
//// let cityDiner = {CityDiner, {38.601656, -90.242675}};
//// let circusFlora = {CircusFlora, {38.637968, -90.231024}};
//// let mxMovies = {MXMovies, {38.630198, -90.290194}};
//// let poochPatrol = {PoochPatrol, {38.685590, -90.228082}};
//// let lumiere = {LumierePlace, {38.632111, -90.184482}};
//// let novaks = {Novaks, {38.628040, -90.251098}};
//// let blackthorn = {Blackthorn, {38.599705, -90.246407}};
//// let  = {, {38.6, -90.2}};
//// let  = {, {38.6, -90.2}};
//
//
//let circusFlora = {lat:38.637968, lng:-90.231024};
//let cityDiner = {lat:38.601656, lng:-90.242675};
//let mxMovies = {lat:38.630198, lng:-90.190194};
//let chavas = {lat:38.608833, lng:-90.205452};
//let poochPatrol = {lat:38.585590, lng:-90.228082};
//let lumiere = {lat:38.632111, lng:-90.184482};
//let novaks = {lat:38.628040, lng:-90.251098};
//let blackthorn = {lat:38.599705, lng:-90.246407};
//
//
////let coords = [{name: name, {lat: lat, lng: long}}]
//let initialCtr = {lat:38.621291, lng:-90.224846};
//
//
//function initMap() {
//
//    //Custom map overlay
//    // https://snazzymaps.com/style/80426/greyworld
//    let overlay = new google.maps.StyledMapType(
//
//        [
//            {
//                "featureType": "all",
//                "elementType": "all",
//                "stylers": [
//                    {
//                        "hue": "#ff0000"
//                    },
//                    {
//                        "saturation": -100
//                    },
//                    {
//                        "lightness": -30
//                    }
//                ]
//            },
//            {
//                "featureType": "all",
//                "elementType": "labels.text.fill",
//                "stylers": [
//                    {
//                        "color": "#ffffff"
//                    }
//                ]
//            },
//            {
//                "featureType": "all",
//                "elementType": "labels.text.stroke",
//                "stylers": [
//                    {
//                        "color": "#353535"
//                    }
//                ]
//            },
//            {
//                "featureType": "landscape",
//                "elementType": "geometry",
//                "stylers": [
//                    {
//                        "color": "#656565"
//                    }
//                ]
//            },
//            {
//                "featureType": "poi",
//                "elementType": "geometry.fill",
//                "stylers": [
//                    {
//                        "color": "#505050"
//                    }
//                ]
//            },
//            {
//                "featureType": "poi",
//                "elementType": "geometry.stroke",
//                "stylers": [
//                    {
//                        "color": "#808080"
//                    }
//                ]
//            },
//            {
//                "featureType": "road",
//                "elementType": "geometry",
//                "stylers": [
//                    {
//                        "color": "#454545"
//                    }
//                ]
//            }
//        ]
//    )
//    let marker = new google.maps.Marker(
//    );
//    let url = 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/';
//
//
//    let pinColor = "0FF";//"FE7569";
//    let pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
//        new google.maps.Size(21, 34),
//        new google.maps.Point(0,0),
//        new google.maps.Point(10, 34));
//    let pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
//        new google.maps.Size(40, 37),
//        new google.maps.Point(0, 0),
//        new google.maps.Point(12, 35));
//
//    let map = new google.maps.Map(document.getElementById('map'), {
//        zoom: 12,
//        center: initialCtr,
//        mapTypeControl:false,
//        // mapTypeControlOptions: {
//        //     mapTypeIds: ['styled_map']
//        // },
//        streetViewControl: false,
//        rotateControl: true,
//        zoomControl: false,
//    });
//
//
//    let circusFloraMarker = new google.maps.Marker({
//        position: circusFlora,
//        map: map,
//    });
//
//    let cityDinerMarker = new google.maps.Marker({
//        position: cityDiner,
//        map: map
//    });
//
//    let mxMoviesMarker = new google.maps.Marker({
//        position: mxMovies,
//        map: map
//    });
//
//    let chavasMarker = new google.maps.Marker({
//        position: chavas,
//        map: map
//    });
//
//    let poochPatrolMarker = new google.maps.Marker({
//        position: poochPatrol,
//        map: map
//    });
//
//    let lumiereMarker = new google.maps.Marker({
//        position: lumiere,
//        map: map
//    });
//
//    let novaksMarker = new google.maps.Marker({
//        position: novaks,
//        map: map
//    });
//
//    let blackthornMarker = new google.maps.Marker({
//        position: blackthorn,
//        map: map
//    });
//
//    // let Marker = new google.maps.Marker({
//    //     position: ,
//    //     map: map
//    // });
//
//    //Associate the styled map with the MapTypeId and set it to display.
//    map.mapTypes.set('styled_map', overlay);
//    map.setMapTypeId('styled_map');
//
//    // map.addListener('center_changed', function() {
//    //   // 3 seconds after the center of the map has changed, pan back to the
//    //   // marker.
//    //   window.setTimeout(function() {
//    //     map.panTo(marker.getPosition());
//    //   }, 3000);
//    // });
//
//
//
//
//
//}
let initialCtr = {lat:38.585590, lng:-90.228082};
function initMap(){

	
//  let map = new google.maps.Map(document.getElementById('map'), {
//  zoom: 12,
//  center: initialCtr,
//  mapTypeControl:false,
//  // mapTypeControlOptions: {
//  //     mapTypeIds: ['styled_map']
//  // },
//  streetViewControl: false,
//  rotateControl: true,
//  zoomControl: false,
//});
	
	let map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: initialCtr,
		mapTypeControl:false,
		streetViewControl: false,
		rotateControl: true,
		zoomControl: false,
	});
	let marker = new google.maps.Marker({
		position: initialCtr,
		map: map
	});
}
//AIzaSyCeiaJwCSYtqaltd3ZtN_eGOG6pJ9evh3c

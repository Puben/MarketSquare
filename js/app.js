
    var map;

    var rootRef = new Firebase('https://marketsquare.firebaseio.com/');
    var groupsRef = new Firebase('https://marketsquare.firebaseio.com/groups');
    var usersRef = new Firebase('https://marketsquare.firebaseio.com/groups');


    // Nedenstående lavet af Anton Hansen og Andreas Weber


    // hvis hash'en ændres, reload siden
    // Lavet af Anton Hansen
    setTimeout(function () {
        $(window).on('hashchange', function () {
            window.location.reload();
        });
    }, 0);

    var username;


    var groupRef = rootRef.child('test');
    // reference til Firebase - hiver fat i layers
    var usersRef = groupRef.child('users');
    // reference til Firebase - hiver fat i users
    var adsRef = groupRef.child('ads');
    // reference til Firebase - den enkelte user (en selv, sådenset)

    console.log("main function");
    initializeMap();
/*****************/
/*  GOOGLE MAPS  */
/*****************/
/* Initializes Google Maps */
function initializeMap() {
    console.log("in function initializeMap");
    // Get the location as a Google Maps latitude-longitude object
    var loc = new google.maps.LatLng("55.6834544","12.5858016");

    // Create the Google Map
    map = new google.maps.Map(document.getElementById("map-canvas"), {
        center: loc,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
}





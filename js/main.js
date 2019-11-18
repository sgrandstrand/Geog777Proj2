// Javascript by //

var light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2dyYW5kc3RyYW5kIiwiYSI6ImNqY3BtMm52MjJyZWsycXBmMDZremxsN3EifQ.3HVgf9jrNbmCSBBBlp5zlQ', {
    id: 'mapbox.light',
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
});

var outdoors = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2dyYW5kc3RyYW5kIiwiYSI6ImNqY3BtMm52MjJyZWsycXBmMDZremxsN3EifQ.3HVgf9jrNbmCSBBBlp5zlQ', {
    id: 'mapbox.outdoors',
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
});

var imagery = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2dyYW5kc3RyYW5kIiwiYSI6ImNqY3BtMm52MjJyZWsycXBmMDZremxsN3EifQ.3HVgf9jrNbmCSBBBlp5zlQ', {
    id: 'mapbox.satellite',
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
});

var mapOptions = {
    zoomControl: false,
    center: [48.55, -113.630],
    zoom: 9.25,
    minZoom: 3,
    maxZoom: 18,
    layers: [outdoors]
};

var map = L.map('mapid', mapOptions);

var zoomHome = L.Control.zoomHome({
    position: 'topleft'
});
zoomHome.addTo(map);

var baseMaps = {
    "Default": outdoors,
    "Light": light,
    "Imagery": imagery
}


// sql queries to get layers

var sqlQuery1 = "SELECT t.the_geom, t.class, t.route_no, t.name, t.meters, t.miles, t.trlname,t.trllabel, t.trlsurface, t.trlclass, u.first_name, u.last_name, u.trail_id, u.user_date, u.review FROM sgrandstrand.gnp_trailss AS t LEFT OUTER JOIN sgrandstrand.user_review AS u ON t.route_no = u.trail_id";
//var sqlQuery1 = "SELECT * FROM sgrandstrand.gnp_trailss"; // trails 
var sqlQuery2 = "SELECT * FROM sgrandstrand.gnp_roads"; // roads
var sqlQuery3 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Amphitheater'"; // Amphitheater
var sqlQuery4 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Boat Launch'";
var sqlQuery5 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Bus Stop / Shuttle Stop'";
var sqlQuery6 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Cabin'";
var sqlQuery7 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Campground'";
var sqlQuery8 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Entrance Station'";
var sqlQuery9 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Food Service'";
var sqlQuery10 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Gas Station'";
var sqlQuery11 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Gift Shop'";
var sqlQuery12 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Horseback Riding'";
var sqlQuery13 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Lodging'";
var sqlQuery14 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Parking'";
var sqlQuery15 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Picnic Area'";
var sqlQuery16 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Post Office'";
var sqlQuery17 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Ranger Station'";
var sqlQuery18 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Restroom'";
var sqlQuery19 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Trailhead'";
var sqlQuery20 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Train Station'";
var sqlQuery21 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Tunnel'";
var sqlQuery22 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Viewpoint'";
var sqlQuery23 = "SELECT * FROM sgrandstrand.gnp_poi WHERE poitype = 'Visitor Center'";
//sql for dropdown list
var sqlQueryddl = "SELECT route_no, trllabel FROM sgrandstrand.gnp_trailss"; // trails 
//icons 



var iconTemp = L.Icon.extend({
    options: {
        iconSize: [25, 25],
    }
});

var iconTemp2 = L.Icon.extend({
    options: {
        iconSize: [20, 20],
    }
});

var ampthIcon = new iconTemp({
    iconUrl: 'js/image/theater.svg'
});
var boatIcon = new iconTemp({
    iconUrl: 'js/image/boat.svg'
});
var busIcon = new iconTemp({
    iconUrl: 'js/image/bus.svg'
});
var cabinIcon = new iconTemp({
    iconUrl: 'js/image/cabin.svg'
});
var campIcon = new iconTemp({
    iconUrl: 'js/image/campground.svg'
});
var entranceIcon = new iconTemp({
    iconUrl: 'js/image/entrance.svg'
});
var foodIcon = new iconTemp({
    iconUrl: 'js/image/food.svg'
});
var gasIcon = new iconTemp({
    iconUrl: 'js/image/gasstation.svg'
});
var giftIcon = new iconTemp({
    iconUrl: 'js/image/giftshop.svg'
});
var horseIcon = new iconTemp({
    iconUrl: 'js/image/horse.svg'
});
var lodgeIcon = new iconTemp({
    iconUrl: 'js/image/lodging.svg'
});
var parkingIcon = new iconTemp({
    iconUrl: 'js/image/parking.svg'
});
var picnicIcon = new iconTemp({
    iconUrl: 'js/image/picnic.svg'
});
var postIcon = new iconTemp({
    iconUrl: 'js/image/postoffice.svg'
});
var rangerIcon = new iconTemp({
    iconUrl: 'js/image/ranger.svg'
});
var restroomIcon = new iconTemp({
    iconUrl: 'js/image/restroom.svg'
});
var trailIcon = new iconTemp({
    iconUrl: 'js/image/trailhead1.svg'
});
var trainIcon = new iconTemp({
    iconUrl: 'js/image/train.svg'
});
var viewptIcon = new iconTemp({
    iconUrl: 'js/image/viewpt.svg'
});
var visitorIcon = new iconTemp({
    iconUrl: 'js/image/visitor.svg'
});

var tunnelIcon = new iconTemp2({
    iconUrl: 'js/image/tunnel.svg'
});



//for each point of interest 

var onEachFeature = function (feature, layer) {
    if (feature.properties) {
        var popUpContent = makePopUpContent(feature.properties);
        layer.bindPopup(popUpContent);

        layer.on('mouseover', function (e) {
            this.openPopup();
        });
        layer.on('mouseout', function (e) {
            this.closePopup();
        });
    };

}
// function to make our popup-content
var makePopUpContent = function (props) {
    return '<div class="popup-content">' +
        '<p><strong>Name:</strong> ' + props.poilabel + '</p>' +
        '</div>'
}

// urls to get layer from carto
var callsite = "https://sgrandstrand.carto.com/api/v2/sql?format=GeoJSON&q=";
var url3 = callsite + sqlQuery3;
var url4 = callsite + sqlQuery4;
var url5 = callsite + sqlQuery5;
var url6 = callsite + sqlQuery6;
var url7 = callsite + sqlQuery7;
var url8 = callsite + sqlQuery8;
var url9 = callsite + sqlQuery9;
var url10 = callsite + sqlQuery10;
var url11 = callsite + sqlQuery11;
var url12 = callsite + sqlQuery12;
var url13 = callsite + sqlQuery13;
var url14 = callsite + sqlQuery14;
var url15 = callsite + sqlQuery15;
var url16 = callsite + sqlQuery16;
var url17 = callsite + sqlQuery17;
var url18 = callsite + sqlQuery18;
var url19 = callsite + sqlQuery19;
var url20 = callsite + sqlQuery20;
var url21 = callsite + sqlQuery21;
var url22 = callsite + sqlQuery22;
var url23 = callsite + sqlQuery23;


// Point of interest layers for map
var ampitheather = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: ampthIcon
        });
    }
});

var boatLaunch = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: boatIcon
        });
    }
});
var busStop = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: busIcon
        });
    }
});


var cabins = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: cabinIcon
        });
    }
});
var campgrounds = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: campIcon
        });
    }
});
var entranceStation = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: entranceIcon
        });
    }
});
var foodService = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: foodIcon
        });
    }
});

var gasStations = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: gasIcon
        });
    }
});
var giftShop = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: giftIcon
        });
    }
});
var horseback = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: horseIcon
        });
    }
});
var lodging = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: lodgeIcon
        });
    }
});
var parking = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: parkingIcon
        });
    }
});
var picnicArea = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: picnicIcon
        });
    }
});
var postOffice = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: postIcon
        });
    }
});
var rangerStation = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: rangerIcon
        });
    }
});
var restroom = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: restroomIcon
        });
    }
});
var trailheads = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: trailIcon
        });
    }
});
var trainStation = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: trainIcon
        });
    }
});
var tunnel = L.geoJson(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: tunnelIcon
        });
    }
}).addTo(map);

var viewpoint = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: viewptIcon
        });
    }
});
var visitorCenter = L.geoJson(null, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: visitorIcon,
        });
    }
});
$.getJSON(url3, function (data) {
    ampitheather.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url4, function (data) {
    boatLaunch.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url5, function (data) {
    busStop.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url6, function (data) {
    cabins.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url7, function (data) {
    campgrounds.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url8, function (data) {
    entranceStation.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url9, function (data) {
    foodService.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url10, function (data) {
    gasStations.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url11, function (data) {
    giftShop.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url12, function (data) {
    horseback.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url13, function (data) {
    lodging.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url14, function (data) {
    parking.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url15, function (data) {
    picnicArea.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url16, function (data) {
    postOffice.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url17, function (data) {
    rangerStation.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url18, function (data) {
    restroom.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url19, function (data) {
    trailheads.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url20, function (data) {
    trainStation.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url21, function (data) {
    tunnel.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url22, function (data) {
    viewpoint.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});
$.getJSON(url23, function (data) {
    visitorCenter.addData(data);
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});



// Get trails selection as GeoJSON and Add to Map
var trails = $.getJSON("https://sgrandstrand.carto.com/api/v2/sql?format=GeoJSON&q=" + sqlQuery1, function (data) {
    trails = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup('<p><b>' + feature.properties.trllabel + '</b><br/><em>' + 'Surface Type: ' + feature.properties.trlsurface + '<br/><em>' + 'Trail Level: ' + feature.properties.trlclass + '<br/><em>' + 'Miles: ' + feature.properties.miles + '<br/><em>' + 'Reviews: ' + feature.properties.user_date + ': ' + feature.properties.review + '</p>');
            layer.on({
                mouseover: function (e) {
                    layer.setStyle({
                        weight: 3,
                        color: "#00FFFF",
                        opacity: 1
                    });
                    if (!L.Browser.ie && !L.Browser.opera) {
                        layer.bringToFront();
                    }
                },
                mouseout: function (e) {
                    trails.resetStyle(e.target);
                },

            });
        },
        style: styleTrails,
    }).addTo(map);
});


function styleTrails(feature) {
    type = feature.properties.trlsurface;
    var colorToUse;
    if (type === "Earth") colorToUse = 'green';
    else if (type === "Wood") colorToUse = 'gray';
    else if (type === "Asphalt") colorToUse = 'black';
    else colorToUse = "red";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 3,
        "dashArray": "5 5"
    };
}

function styleFilterTrails(feature) {
    return {
        "color": 'red',
        "fillColor": 'red',
        "weight": 2,
        "dashArray": "5 5"
    };
}

var roads = $.getJSON("https://sgrandstrand.carto.com/api/v2/sql?format=GeoJSON&q=" + sqlQuery2, function (data) {
    roads = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup('<p><b>' + feature.properties.rdlabel + '</b><br /><em>' + 'Surface Type: ' + feature.properties.rdsurface + '</p>');
            layer.on({
                mouseover: function (e) {
                    layer.setStyle({
                        weight: 3,
                        color: "#00FFFF",
                        opacity: 1
                    });
                    if (!L.Browser.ie && !L.Browser.opera) {
                        layer.bringToFront();
                    }
                },
                mouseout: function (e) {
                    roads.resetStyle(e.target);
                },

            });
        },
        style: styleRoads,
    }).addTo(map);
});

function styleRoads(feature) {
    type = feature.properties.rdsurface;
    var colorToUse;
    if (type === "Gravel") colorToUse = '#BF9D7E';
    else if (type === "Asphalt") colorToUse = 'black';
    else colorToUse = "red";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
    };
}

var groupedOverlays = {
    "Park Amenities": {
        "<img src='js/image/theater.svg' width='24' height='28'>&nbsp;Ampitheater": ampitheather,
        "<img src='js/image/boat.svg' width='24' height='28'>&nbsp;Boat Launch": boatLaunch,
        "<img src='js/image/entrance.svg' width='24' height='28'>&nbsp;Entrance Station": entranceStation,
        "<img src='js/image/food.svg' width='24' height='28'>&nbsp;Food Service": foodService,
        "<img src='js/image/gasstation.svg' width='24' height='28'>&nbsp;Gas Station": gasStations,
        "<img src='js/image/giftshop.svg' width='24' height='28'>&nbsp;Gift Shop": giftShop,
        "<img src='js/image/lodging.svg' width='24' height='28'>&nbsp;Lodging": lodging,
        "<img src='js/image/picnic.svg' width='24' height='28'>&nbsp;Picnic Area": picnicArea,
        "<img src='js/image/postoffice.svg' width='24' height='28'>&nbsp;Post Office": postOffice,
        "<img src='js/image/restroom.svg' width='24' height='28'>&nbsp;Restroom": restroom,
        "<img src='js/image/visitor.svg' width='24' height='28'>&nbsp;Visitor Center": visitorCenter

    },
    "Trail Points of Interest": {
        "<img src='js/image/cabin.svg' width='24' height='28'>&nbsp;Cabin": cabins,
        "<img src='js/image/campground.svg' width='24' height='28'>&nbsp;Campgrounds": campgrounds,
        "<img src='js/image/horse.svg' width='24' height='28'>&nbsp;Horseback Riding": horseback,
        "<img src='js/image/ranger.svg' width='24' height='28'>&nbsp;Ranger Station": rangerStation,
        "<img src='js/image/trailhead1.svg' width='24' height='28'>&nbsp;Trailheads": trailheads,
        "<img src='js/image/viewpt.svg' width='24' height='28'>&nbsp;View Point": viewpoint,

    },
    "Transit": {
        "<img src='js/image/bus.svg' width='24' height='28'>&nbsp;Bus/Shuttle Stop": busStop,
        "<img src='js/image/parking.svg' width='24' height='28'>&nbsp;Parking": parking,
        "<img src='js/image/train.svg' width='24' height='28'>&nbsp;Train Station": trainStation,
    }
};


var layerControl = L.control.groupedLayers(baseMaps, groupedOverlays).addTo(map);
map.addControl(layerControl);

/* GPS enabled geolocation control set to follow the user's location */
var locateControl = L.control.locate({
    //    position: "bottomright",
    drawCircle: true,
    follow: true,
    setView: true,
    keepCurrentZoomLevel: true,
    markerStyle: {
        weight: 1,
        opacity: 0.8,
        fillOpacity: 0.8
    },
    circleStyle: {
        weight: 1,
        clickable: false
    },
    icon: "fa fa-location-arrow",
    metric: false,
    strings: {
        title: "My location",
        popup: "You are within {distance} {unit} from this point",
        outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
    },
    locateOptions: {
        maxZoom: 18,
        watch: true,
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 10000
    }
}).addTo(map);


function getsearchdata() {
    var sqlSer = "SELECT poilabel, poitype, the_geom FROM sgrandstrand.gnp_poi WHERE poitype IN ('Amphitheater','Boat Launch', 'Bus Stop / Shuttle Stop','Cabin','Campground', 'Entrance Station', 'Food Service', 'Gas Station','Gift Shop','Horseback Riding','Lodging','Parking','Picnic Area','Post Office','Ranger Station','Restroom','Trailhead', 'Train Station','Viewpoint','Visitor Center')";
    var searchLayer = $.getJSON("https://sgrandstrand.carto.com/api/v2/sql?format=GeoJSON&q=" + sqlSer, function (data) {
        return L.geoJson(data);
        console.log(L.geoJson(data));
    });
}
//function getsearchdata() {
//    var searchSQL = new cartodb.SQL({
//        user: 'sgrandstrand'
//    });
//    var sqlSer = "SELECT poilabel, poitype, the_geom FROM sgrandstrand.gnp_poi WHERE poitype IN ('Amphitheater','Boat Launch', 'Bus Stop / Shuttle Stop','Cabin','Campground', 'Entrance Station', 'Food Service', 'Gas Station','Gift Shop','Horseback Riding','Lodging','Parking','Picnic Area','Post Office','Ranger Station','Restroom','Trailhead', 'Train Station','Viewpoint','Visitor Center')";
//    return searchSQL.execute(sqlSer, null, {
//            format: 'geojson'
//        })
//        .done(function (data) {
//            console.log(data);
//            console.log(data.feature.properties.poilabel);
//        })
//        .error(function (errors) {
//            console.log("errors:" + errors);
//        });
//}

map.addControl(new L.Control.Search({
    sourceData: getsearchdata,
    propertyName: 'poilabel',
    textPlaceholder: 'Search for Point of Interest...',
    markerLocation: true
}));


$(document).ready(function () {
    $("#query-trails-reset").click(function () {
        $("#query_trails_form")[0].reset();
        $('#trailFiltOutput').empty();
    });

    $('<p class = "controlHeader">Basemap Tilesets</p>').insertBefore('div.leaflet-control-layers-base');

    $("#sidebar-toggle-btn").click(function () {
        animateSidebar();
        return false;
    });

    $("#sidebar-hide-btn").click(function () {
        animateSidebar();
        return false;
    });
    //open and close sidebar
    function animateSidebar() {
        $("#sidebar").animate({
            width: "toggle"
        }, 350, function () {
            map.invalidateSize();
        });
    }

    function openReview() {
        $("#reviewSection").collapse('show');
        $("#filterSection").collapse('hide');
    }

    function openFilter() {
        $("#filterSection").collapse('show');
        $("#reviewSection").collapse('hide');
    }

    /* Highlight search box text on click */
    $("#searchbox").click(function () {
        $(this).select();
    });
    /* Prevent hitting enter from refreshing the page */
    $("#searchbox").keypress(function (e) {
        if (e.which == 13) {
            e.preventDefault();
        }
    });
    $("#review-btn").click(function () {
        animateSidebar();
        openReview();
        return false;
    });
    $("#filter-btn").click(function () {
        animateSidebar();
        openFilter();
        return false;
    });

    var ddlTrails = document.getElementById("ddlTrails")
    $.get("https://sgrandstrand.carto.com/api/v2/sql?q=" + sqlQueryddl,
        function (data) {
            console.log(data);
            for (i = 0; i < data.total_rows; i++) {
                var option = document.createElement("OPTION");
                option.innerHTML = data.rows[i].trllabel;

                //Set route_no in Value part.
                option.value = data.rows[i].route_no;

                //Add the Option element to DropDownList.
                ddlTrails.options.add(option);
            }
        });

    $("#reviewSubmitBtn").click(function (e) {
        e.preventDefault(); //just use when testing


        var x = $("#review_trails_form").serializeArray();

        var trailVal = x[0].value;
        var trailID = (trailVal * 1);

        var review_ = x[4].value;
        var userDate = x[3].value;
        var fn = x[1].value;
        var ln = x[2].value;
        var sqlReview = "INSERT INTO sgrandstrand.user_review(trail_id, review, user_date, first_name, last_name) VALUES(" + trailID + ", '" + review_ + "' , '" + userDate + "' , '" + fn + "' ,'" + ln + "')";

        var posting = $.post("https://sgrandstrand.carto.com/api/v2/sql?q=" + sqlReview).done(function () {
            alert("Your review has been submitted!")
            // Reset the form
            $("#review_trails_form")[0].reset();
        }).fail(function (xhr, status, error) {
            alert("Status: " + status + "\nError: " + error)
        });

    });
    $("#querySubmitBtn").click(function (e) {
        e.preventDefault(); //just use when testing
        $('#trailFiltOutput').empty();
        map.removeLayer(trails);

        //        map.removeLayer(filterTrails);

        var x = $("#query_trails_form").serializeArray();
        console.log(x);

        var surfaceType = x[0].value;
        console.log(surfaceType);
        //        "WHERE trlsurface = 'surfaceType'"

        var classType = x[1].value;
        console.log(classType);
        //        "WHERE trlclass LIKE 'classType'"

        var distanceRange = x[2].value;
        console.log(distanceRange);
        //        "WHERE miles distanceRange"


        var sqlFilter = "SELECT t.the_geom, t.class, t.route_no, t.name, t.meters, t.miles, t.trlname,t.trllabel, t.trlsurface, t.trlclass, u.first_name, u.last_name, u.trail_id, u.user_date, u.review FROM sgrandstrand.gnp_trailss AS t LEFT OUTER JOIN sgrandstrand.user_review AS u ON t.route_no = u.trail_id"



        // If no filters are selected
        if (surfaceType == "" && classType == "" && distanceRange == "") {
            var sql = sqlFilter;
        }

        // If at least one filter is selected
        else {
            // Add WHERE clause root
            var sql = sqlFilter + " WHERE ";
            // If surface type is not null, add surfaceType to WHERE clause
            if (surfaceType != "") {
                var where_surface = "t.trlsurface = '" + surfaceType + "'";
                sql += where_surface;
            }
            // If classType is not null, add classType to WHERE clause
            if (classType != "") {
                var where_class = "t.trlclass LIKE '" + classType + "'";
                if (surfaceType != "") {
                    sql += " AND " + where_class;
                } else {
                    sql += where_class;
                }
            }
            // If distanceRange is not null, add distanceRange to WHERE clause
            if (distanceRange != "") {
                var where_dist = "t.miles " + distanceRange;
                if (surfaceType != "" || classType != "") {
                    sql += " AND " + where_dist;
                } else {
                    sql += where_dist;
                }
            }
        }
        console.log(sql);

        var filterTrails = $.getJSON("https://sgrandstrand.carto.com/api/v2/sql?format=GeoJSON&q=" + sql, function (data) {
            trails = L.geoJson(data, {
                onEachFeature: function (feature, layer) {
                    console.log(feature);
                    console.log(feature.properties);
                    layer.bindPopup('<p><b>' + feature.properties.trllabel + '</b><br/><em>' + 'Surface Type: ' + feature.properties.trlsurface + '<br/><em>' + 'Trail Level: ' + feature.properties.trlclass + '<br/><em>' + 'Miles: ' + feature.properties.miles + '<br/><em>' + 'Reviews: ' + feature.properties.user_date + ': ' + feature.properties.review + '</p>');
                    $('#trailFiltOutput').append('<p class="trail-filter">' + feature.properties.trllabel + '</p>')
                    layer.on({
                        mouseover: function (e) {
                            layer.setStyle({
                                weight: 3,
                                color: "#00FFFF",
                                opacity: 1
                            });
                            if (!L.Browser.ie && !L.Browser.opera) {
                                layer.bringToFront();
                            }
                        },
                        mouseout: function (e) {
                            trails.resetStyle(e.target);
                        },

                    });
                },
                style: styleFilterTrails,
            }).addTo(map);
        });

    });


    // Leaflet patch to make layer control scrollable on touch browsers
    var container = $(".leaflet-control-layers")[0];
    if (!L.Browser.touch) {
        L.DomEvent
            .disableClickPropagation(container)
            .disableScrollPropagation(container);
    } else {
        L.DomEvent.disableClickPropagation(container);
    }

});

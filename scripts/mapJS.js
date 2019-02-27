
function initMap() {
	//map options
	var options = {
		zoom: 11,
		center: {lat:41.505493, lng:-81.681290},
		styles: [
			{elementType: 'geometry', stylers: [{color: '#c1946a'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#9d4171'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#ffffff'}]},
      {
        featureType: 'administrative.locality',//City labels
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]//green
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
      },
      {
        featureType: 'poi.park',//park area fill
        elementType: 'geometry',
        stylers: [{color: '#6ac194'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
      },
      {
        featureType: 'poi.park',//park text outline
        elementType: 'labels.text.stroke',
        stylers: [{color: '#946ac1'}]//gray
      },
      {
        featureType: 'road',//road fill
        elementType: 'geometry',
        stylers: [{color: '#30632f'}]
      },
      {
        featureType: 'road',//road outline
        elementType: 'geometry.stroke',
        stylers: [{color: '#5eb25c'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#622f63'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#607689'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
		]
	}
	//adds new map object
	var map = new google.maps.Map(document.getElementById('map'), options);

	// listen for onclick
	google.maps.event.addListener(map, 'click',
	 function(event){
	 	addMarker({coords:event.latLng});
	 });


// add JS for list of markers

	var markers = [
		{
			coords:{lat:41.505493,lng:-81.681280},
			iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
			content:'<h1>Cle, OH</h1>'
		}

	];

  var noIcon = {
    url:'images/flag.png',
    size:new google.maps.Size(64,64),
    origin:new google.maps.Point(0,0),
    anchor:new google.maps.Point(10,64)
  };

 var flag = {
  url:'images/flag.png',
  size:new google.maps.Size(64,64),
  origin:new google.maps.Point(0,0),
  anchor:new google.maps.Point(10,64)
};

 var bike = {
  url:'images/bike.png',
  size:new google.maps.Size(64,64),
  origin:new google.maps.Point(0,0),
  anchor:new google.maps.Point(0,64)
};

 var mountain = {
  url:'images/mission.png',
  size:new google.maps.Size(64,64),
  origin:new google.maps.Point(0,0),
  anchor:new google.maps.Point(0,64)
};

/*  var icons = {
    flag: {
      icon: 'images/flag.png'
    },
    bike: {
      icon: 'images/bike.png'
    },
    mountain: {
      icon: 'images/mission.png'
    }
  };*/


  //loops through radios to see which is checked, then grabs value.
  //found here https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value

  var userIcon = " ";
  var radios = document.getElementsByName('radio');
    
    for(var i = 0, length = radios.length; i <= length; i++) {
      if(radios[i].checked) {
        var userRadio = radios[i].value;
        if(userRadio = 'noIcon') {
          userIcon = noIcon;
        }
        else if(userRadio = 'flag') {
          userIcon = flag;
        }
        else if(userRadio = 'bike') {
          userIcon = bike;
        }
        else if(userRadio = 'mountain') {
          userIcon = mountain;
        }

        break;
      }
      return userIcon;
    };

	for (var i = 0;i < markers.length;i++) {
		addMarker(markers[i]);
	}

	function addMarker(props) {
		var marker = new google.maps.Marker({
			position:props.coords,
      draggable:true,
      icon:userIcon,
			map:map			
		});


		//checks for user set icon 
		if (props.iconImage) {
			marker.setIcon(props.iconImage);
		}

  //window function that changes info in permanent marker

    if(props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });
    }

		marker.addListener('click', function(){
			infoWindow.open(map, marker);
			});
		}	

  function changeWindow(props) {
    var newMarkerName = document.getElementById('windowIn').value;
      if(props.newMarkerName) {
        var infoWindow = new google.maps.InfoWindow({
        content:props.newMarkerName
      });
    }
  }

  var btn = document.getElementById("setWindowBtn");
  btn.addEventListener("click", changeWindow, false);
  
	/*
	if (upload file is uploaded) { 
    var item = document.createElement('a')
		var dropItem = document.getElementById('dropdown').innerHTML = item;
    
	}


  clear markers marker.setMap(null);
	*/
}
//
// 321 JavaScript
//

//setCookiesAllowed();

function login_facebook() {
	// var url = ['https://', window.location.host].join('');
	//	var url = window.location.href;
	var url = '/site/hellojs.html';

	hello.login("facebook", {display: 'popup', redirect_uri: url, scope: 'email'}, function(auth) {
		window.location.href = window.location.pathname+"?"+$.param({"access_token": auth.authResponse.access_token, "network": auth.authResponse.network});})
}

function login_google() {
	var google = hello('google');
	// var url = ['https://', window.location.host].join('');
	// var url = window.location.href;
	var url = '/site/hellojs.html';
	
	google.login({display: 'popup', redirect_uri: url, scope: 'email'}, function(auth) {
		
		google.api('me').then(function(json) {
			window.location.href = window.location.pathname+"?"+$.param({"access_token": auth.authResponse.access_token, "network": auth.authResponse.network, "first_name": json.first_name, "last_name": json.last_name, "email": json.email});
		});
	});
}

function selectmany_preventTooManyChecks(regionId, number, message) {
	if ($('#'+regionId+' input:checkbox:checked').length > number) {
		alert(message);
		return false;
	}
	return true;
}

function onMapPairsDrop(dropzone, draggable) {
  $(dropzone).children('div.rightObject').prepend(draggable);
	$(draggable).css({top:0, left:0});
}

function onDragDropDrop(dropzone, draggable) {
  $(dropzone).append(draggable);
	$(draggable).css({top:0, left:0});
}




function textinput_markAsEmpty(event, elementId) {
	var element = $('#'+elementId);
	event.stopPropagation();

	element.toggleClass('markedAsEmpty');

	if (element.hasClass('markedAsEmpty')) {
		$(event.target).addClass('active');
		element.val('BLANK')
	} else {
		$(event.target).removeClass('active');
		element.val('')		
	}	
}

function open321VideoTutorial(language) {
	var lightbox = UIkit.lightboxPanel({
		items: [{source: '/site/video/321via_'+language+'.mp4', type: 'video'}],
		videoAutoplay: true,
		preload: 0,
	});
	
	lightbox.show();

}


/* Haupt JS init */
$(document).ready(function(){

	if (! (typeof JoelPurra === 'undefined') ) {
		JoelPurra.PlusAsTab.setOptions({
			// Use the enter key as tab keys
			key: [13]
		});	
		$('input.clozeTextPlaceholder').plusAsTab();
	}

	$('.popover').webuiPopover({trigger:'hover'});
	$('span.dictionaryEntry').webuiPopover({trigger:'hover'});

  $("textarea").autosize();

	$.mapael.prototype.defaultOptions = {
    map: {
      cssClass: "map",
      tooltip: {
        cssClass: "mapTooltip"
      },
      defaultArea: {
        attrs: {
          fill: "#343434",
          stroke: "#5d5d5d",
          "stroke-width": 1,
          "stroke-linejoin": "round"
        },
        attrsHover: {
          fill: "#777777",
          animDuration: 300
        },
        text: {
          position: "inner",
          margin: 10,
          attrs: {
            "font-size": 15,
            fill: "#c7c7c7"
          },
          attrsHover: {
            fill: "#eaeaea",
            "animDuration": 300
          }
        },
        target: "_self",
        cssClass: "area"
      },
      defaultPlot: {
        type: "circle",
        size: 15,
        attrs: {
          fill: "#0088db",
          stroke: "#eee",
          "stroke-width": 1,
          "stroke-linejoin": "round"
        },
        attrsHover: {
          "stroke-width": 2,
          animDuration: 300
        },
				// tooltip: {
				// 	overflow: {right: true, bottom: false},
				// 	offset: {left: 10, top: -75}
				// },
        text: {
          position: "right",
          margin: 10,
          attrs: {
            "font-size": 15,
            fill: "#c7c7c7"
          },
          attrsHover: {
            fill: "#eaeaea",
            animDuration: 300
          }
        },
        target: "_self",
        cssClass: "plot"
      },
      defaultLink: {
        factor: 0.5,
        attrs: {
          stroke: "#0088db",
          "stroke-width": 2
        },
        attrsHover: {
          animDuration: 300
        },
        text: {
          position: "inner",
          margin: 10,
          attrs: {
            "font-size": 15,
            fill: "#c7c7c7"
          },
          attrsHover: {
            fill: "#eaeaea",
            animDuration: 300
          }
        },
        target: "_self",
        cssClass: "link"
      },
      zoom: {
        enabled: false,
        minLevel: 0,
        maxLevel: 10,
        step: 0.25,
        mousewheel: false,
        touch: false,
        animDuration: 200,
        animEasing: "linear",
        buttons: {
          "reset": {
            cssClass: "zoomButton zoomReset",
            content: "&#8226;", // bullet sign
            title: "Reset zoom"
          },
          "in": {
            cssClass: "zoomButton zoomIn",
            content: "+",
            title: "Zoom in"
          },
          "out": {
            cssClass: "zoomButton zoomOut",
            content: "&#8722;", // minus sign
            title: "Zoom out"
          }
        }
      }
    },
    legend: {
      redrawOnResize: true,
      area: [],
      plot: []
    },
    areas: {},
    plots: {},
    links: {}
  };
	
	// $('video,audio').mediaelementplayer(/* Options */);

	// Lazy load von Bildern installieren
	setLazy();
	lazyLoad();
// zu langsam	$(window).on('scroll', debounce(lazyLoad, 50, false));
	$(window).on('scroll', lazyLoad);

	
});

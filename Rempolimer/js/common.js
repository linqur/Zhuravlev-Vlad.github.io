;var cl = console.log;


YMaps.jQuery(function () {

  var map          = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]),
      destinations = {
        '1' : new YMaps.GeoPoint(61.37696469, 55.15683683),
        '2' : new YMaps.GeoPoint(61.38163200, 55.16138857),
        '3' : new YMaps.GeoPoint(61.40181027, 55.16478582),
        '4' : new YMaps.GeoPoint(61.30150200, 55.16677807)
      },

      destinations2 = {
        '<p>5</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071),
        '<p>6</p>' : new YMaps.GeoPoint(-1.1420950000004564, 51.48265070696638),
        '<p>7</p>' : new YMaps.GeoPoint(64.40181027, 55.1478582),
        '<p>8</p>' : new YMaps.GeoPoint(60.3015200, 55.1677807)
      },

      destinations3 = {
        '<p>9</p>'  : new YMaps.GeoPoint(31.3055779999997, 59.9181363876071),
        '<p>10</p>' : new YMaps.GeoPoint(-1.1420955000004564, 51.4826570696638),
        '<p>11</p>' : new YMaps.GeoPoint(31.4011027, 55.1648582),
        '<p>12</p>' : new YMaps.GeoPoint(71.3015000, 55.16677807)
      };

    map.setCenter(destinations['1'], 14);

    var menuContainer = YMaps.jQuery('#mapMenu ul');
    var num = 0;




    for (var item in destinations) {
      
      (function (title, geoPoint) {

        num++;
        YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
            map.panTo(geoPoint, {flying: 1});
            return false;
        }).end().appendTo(menuContainer);

      })(item, destinations[item])

    }

    var menuContainer = YMaps.jQuery('#mapMenu2 ul');

    for (var item in destinations2) {

      (function (title, geoPoint) {
            
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);

      })(item, destinations2[item])

    }

    var menuContainer = YMaps.jQuery('#mapMenu3 ul');

    for (var item in destinations3) {

      (function (title, geoPoint) {

          num++;
          YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
              map.panTo(geoPoint, {flying: 1});
              return false;
          }).end().appendTo(menuContainer);

      })(item, destinations3[item])

    }

    var Data = {
          1:{coord:[61.37696469, 55.15683683],descr:'1'},
          2:{coord:[61.38163200, 55.16138857],descr:'2'},
          3:{coord:[61.40181027, 55.16478582],descr:'3'},
          4:{coord:[61.30150200, 55.16677807],descr:'1'},

          5:{coord:[33.3055779999997, 59.91815363876071],descr:'2'},
          6:{coord:[-1.1420950000004564, 51.48265070696638],descr:'3'},
          7:{coord:[64.40181027, 55.1478582],descr:'1'},
          8:{coord:[60.3015200, 55.1677807],descr:'2'},

          9:{coord:[31.3055779999997, 59.9181363876071],descr:'3'},
          10:{coord:[-1.1420955000004564, 51.4826570696638],descr:'1'},
          11:{coord:[31.4011027, 55.1648582],descr:'2'},
          12:{coord:[71.3015000, 55.16677807],descr:'3'}
        };

    for( p in Data ) {
      if(  Data[p].coord[0] != undefined &&  Data[p].coord[0] != undefined ) {

        placemark = new YMaps.Placemark(new YMaps.GeoPoint( Data[p].coord[0], Data[p].coord[1]), {style:s} );
        placemark.description = Data[p].descr;
        map.addOverlay( placemark );

      }
    }



});

YMaps.jQuery(function() {

  YMaps.jQuery('.YMaps-placemark').each(function(i, item) {

    YMaps.jQuery('#collapse-group ul li a')[i].conformityElement = YMaps.jQuery(item);

  });

  YMaps.jQuery('#collapse-group ul li a').click(function () {

    YMaps.jQuery('#collapse-group ul li a').each(function (i, item) {
      item.conformityElement.children().attr('src', 'img/mark2.png');
    });

    this.conformityElement.children().attr('src', 'img/mark.png');

  })

});

YMaps.jQuery(function () {
  YMaps.jQuery('.panel-title-link').click(function() {

    YMaps.jQuery(this).parent().parent().siblings('div').find('li:first').find('a').trigger('click');

  });
})






var tabLinks = new Array();
var contentDivs = new Array();

function init() {

  // Grab the tab links and content divs from the page
  var tabListItems = document.getElementById('tabs0').childNodes;

  for ( var i = 0; i < tabListItems.length; i++ ) {
    if ( tabListItems[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }

  }

  var tabListItems2 = document.getElementById('tabs1').childNodes;

  for ( var i = 0; i < tabListItems2.length; i++ ) {

    if ( tabListItems2[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems2[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }

  }

  var tabListItems = document.getElementById('tabs2').childNodes;

  for ( var i = 0; i < tabListItems.length; i++ ) {

    if ( tabListItems[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }

  }

  // Assign onclick events to the tab links, and
  // highlight the first tab
  var i = 0;

  for ( var id in tabLinks ) {

    tabLinks[id].onclick = showTab;
    tabLinks[id].onfocus = function() { this.blur() };
    if ( i == 0 ) tabLinks[id].className = 'selected';
    i++;

  }

  // Hide all content divs except the first
  var i = 0;

  for ( var id in contentDivs ) {
    if ( i != 0 ) contentDivs[id].className = 'tabContent hide';
    i++;
  }

};

function showTab() {
  
  var selectedId = getHash( this.getAttribute('href') );

  // Highlight the selected tab, and dim all others.
  // Also show the selected content div, and hide all others.
  for ( var id in contentDivs ) {
    if ( id == selectedId ) {
      tabLinks[id].className = 'selected';
      contentDivs[id].className = 'tabContent';
    } else {
      tabLinks[id].className = '';
      contentDivs[id].className = 'tabContent hide';
    }
  }

  // Stop the browser following the link
  return false;

};

function getFirstChildWithTagName( element, tagName ) {
  
  for ( var i = 0; i < element.childNodes.length; i++ ) {
    if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
  }

};

function getHash( url ) {

  var hashPos = url.lastIndexOf ( '#' );
  return url.substring( hashPos + 1 );

}
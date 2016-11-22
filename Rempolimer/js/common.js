YMaps.jQuery(function () {
        var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]),
          destinations = {/**/
            '1' : new YMaps.GeoPoint(61.37696469, 55.15683683),
            '2' : new YMaps.GeoPoint(61.38163200, 55.16138857),
            '3' : new YMaps.GeoPoint(61.40181027, 55.16478582),
            '4' : new YMaps.GeoPoint(61.30150200, 55.16677807)
          },
          destinations2 = {
            '<p>5</p>' : new YMaps.GeoPoint(30.30557799999997, 59.91815363876071),
            '<p>6</p>' : new YMaps.GeoPoint(-0.14209550000004564, 51.48265070696638),
            '<p>7</p>' : new YMaps.GeoPoint(61.40181027, 55.16478582),
            '<p>8</p>' : new YMaps.GeoPoint(61.30150200, 55.16677807)
          };
           destinations3 = {
            '<p>9</p>' : new YMaps.GeoPoint(30.30557799999997, 59.91815363876071),
            '<p>10</p>' : new YMaps.GeoPoint(-0.14209550000004564, 51.48265070696638),
            '<p>11</p>' : new YMaps.GeoPoint(61.40181027, 55.16478582),
            '<p>12</p>' : new YMaps.GeoPoint(61.30150200, 55.16677807)
          };
          map.setCenter(destinations['1'], 14);
          var menuContainer = YMaps.jQuery('#mapMenu ul');
          var num = 0;
          for (var item in destinations) {
            (function (title, geoPoint) {
                num++;
                  YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>')
                    .find('a')
                      .click(function () {
                        map.panTo(geoPoint, {flying: 1});
                          return false;
                      })
                    .end()

              .appendTo(menuContainer);
                })(item, destinations[item])
              }

              var menuContainer = YMaps.jQuery('#mapMenu2 ul');
              for (var item in destinations2) {
                (function (title, geoPoint) {
                    num++;
                      YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>')
                        .find('a')
                          .bind('click', function () {
                            map.panTo(geoPoint, {flying: 1});
                              return false;
                          })
                        .end()

                  .appendTo(menuContainer);
                    })(item, destinations2[item])
                  }
                var menuContainer = YMaps.jQuery('#mapMenu3 ul');
                  for (var item in destinations3) {
                    (function (title, geoPoint) {
                      num++;
                      YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>')
                        .find('a')
                          .bind('click', function () {
                            map.panTo(geoPoint, {flying: 1});
                              return false;
                          })
                        .end()

                      .appendTo(menuContainer);
                        })(item, destinations3[item])
                      }

              var Data = {
                  1:{coord:[61.37696469, 55.15683683],descr:'1'},
                  2:{coord:[61.38163200, 55.16138857],descr:'2'},
                  3:{coord:[61.40181027, 55.16478582],descr:'3'},
                  4:{coord:[61.30150200, 55.16677807],descr:'4'}
                  };
    
              for( p in Data ) {
                if(  Data[p].coord[0] != undefined &&  Data[p].coord[0] != undefined ) {
                  placemark = new YMaps.Placemark(new YMaps.GeoPoint( Data[p].coord[0], Data[p].coord[1]), {style:s} );
                  
                  
                  placemark.description = Data[p].descr;
                  map.addOverlay( placemark );
              }
            }

      });
var tabLinks = new Array();
    var contentDivs = new Array();

    function init() {

      // Grab the tab links and content divs from the page
      var tabListItems = document.getElementById('tabs').childNodes;
      for ( var i = 0; i < tabListItems.length; i++ ) {
        if ( tabListItems[i].nodeName == "LI" ) {
          var tabLink = getFirstChildWithTagName( tabListItems[i], 'A' );
          var id = getHash( tabLink.getAttribute('href') );
          tabLinks[id] = tabLink;
          contentDivs[id] = document.getElementById( id );
        }
      }
      var tabListItems2 = document.getElementById('tabs2').childNodes;
      for ( var i = 0; i < tabListItems2.length; i++ ) {
        if ( tabListItems2[i].nodeName == "LI" ) {
          var tabLink = getFirstChildWithTagName( tabListItems2[i], 'A' );
          var id = getHash( tabLink.getAttribute('href') );
          tabLinks[id] = tabLink;
          contentDivs[id] = document.getElementById( id );
        }
      }
      var tabListItems = document.getElementById('tabs3').childNodes;
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
    }

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
    }

    function getFirstChildWithTagName( element, tagName ) {
      for ( var i = 0; i < element.childNodes.length; i++ ) {
        if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
      }
    }

    function getHash( url ) {
      var hashPos = url.lastIndexOf ( '#' );
      return url.substring( hashPos + 1 );
    }
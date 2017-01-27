;var cl = console.log;


YMaps.jQuery(function () {

  var map          = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]),
      destinations = {//Центральный федеральный округ
        // Белгородская область
        // Воронежская область
        '<p>ИП Адамян Г.А.</p>' : new YMaps.GeoPoint(60.3015200, 55.1677807),
        // Курская область
        // Липецкая область
        '<p>ИП Слукин П. В. «Русские краски»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071),
        '<p>ИП Слукин П. В. «Русский Мастер»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071),
        // Москва
        '<p>ООО «МИКСЭЛ»</p>' : new YMaps.GeoPoint(61.37696469, 55.15683683)
      },
      destinations2 = {//Северо-Западный федеральный округ
        // Архангельская область
        '<p>ИП Федорова  У.В.</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071),
        // Ленинградская область
        '<p>ООО «Колор Эксперт»</p>' : new YMaps.GeoPoint(-1.1420950000004564, 51.48265070696638)
      };
      destinations3 = {//Южный федеральный округ
        // Волгоградская область
        '<p>ИП Шестакова И.П./ООО "АВТОКОЛОР"</p>' : new YMaps.GeoPoint(64.40181027, 55.1478582),
        // Краснодарский край
        '<p>ИП Криворогова И.И</p>' : new YMaps.GeoPoint(-1.1420955000004564, 51.4826570696638),
        // Республика Крым
        '<p>ИП Бедрик Д.В.</p>' : new YMaps.GeoPoint(71.3015000, 55.16677807),
        // Ростовская область
        '<p>ИП Логвинов А.И</p>' : new YMaps.GeoPoint(71.3015000, 55.16677807)
      };
      destinations4 = {//Северо-Кавказский федеральный округ
        '<p>ООО «Rempolimer»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      destinations5 = {//Приволжский федеральный округ
        // Пензенская область
        // Пермская область
        '<p>ООО «Фора»</p>' : new YMaps.GeoPoint(60.3015200, 55.1677807)
      };
      destinations6 = {//Уральский федеральный округ
        // Курганская область
        // '<p>ИП Кильдяев И.А.</p>' : new YMaps.GeoPoint(61.37696469, 55.15683683),
        // Челябинская область
        '<p>ИП Кильдяев И.А.</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      destinations7 = {//Сибирский федеральный округ
        // Новосибирская область
        '<p>ООО «ТД Сибирь»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071),
        // Омская область
        '<p>ИП Самойлович С.А.</p>' : new YMaps.GeoPoint(64.40181027, 55.1478582),
        // Бурятия
        '<p>ИП Кузьмин А.В.</p>' : new YMaps.GeoPoint(-1.1420950000004564, 51.48265070696638),
        // Томская область
        // '<p>ООО «ТД Сибирь»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      destinations8 = {//Дальневосточный федеральный округ
        '<p>ООО «Rempolimer»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      destinations9 = {//Азербайджан
        '<p>ООО «Rempolimer»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      destinations10 = {//Армения
        '<p>ООО «Rempolimer»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      destinations11 = {//Белоруссия
        '<p>ООО «Rempolimer»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      destinations12 = {//Казахстан
        '<p>ООО «Rempolimer»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      destinations13 = {//Киргизия
        '<p>ООО «Rempolimer»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      destinations14 = {//Молдавия
        '<p>ООО «Rempolimer»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      destinations15 = {//Таджикистан
        '<p>ООО «Rempolimer»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      destinations16 = {//Туркмения
        '<p>ООО «Rempolimer»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      destinations17 = {//Узбекистан
        '<p>ООО «Rempolimer»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      destinations18 = {//Украина
        '<p>ООО «Rempolimer»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };



    map.setCenter(destinations['<p>ИП Адамян Г.А.</p>'], 14);
    // Центральный федеральный округ
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
    // Северо-Западный федеральный округ
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

    // Южный федеральный округ
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

    // Северо-Кавказский федеральный округ
    var menuContainer = YMaps.jQuery('#mapMenu4 ul');
    for (var item in destinations4) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations4[item])
    }

    // Приволжский федеральный округ
    var menuContainer = YMaps.jQuery('#mapMenu5 ul');
    for (var item in destinations5) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations5[item])
    }

    // Уральский федеральный округ
    var menuContainer = YMaps.jQuery('#mapMenu6 ul');
    for (var item in destinations6) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations6[item])
    }

    //Сибирский федеральный округ
    var menuContainer = YMaps.jQuery('#mapMenu7 ul');
    for (var item in destinations7) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations7[item])
    }

    //Дальневосточный федеральный округ
    var menuContainer = YMaps.jQuery('#mapMenu8 ul');
    for (var item in destinations8) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations8[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu9 ul');
    for (var item in destinations9) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations9[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu10 ul');
    for (var item in destinations10) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations10[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu11 ul');
    for (var item in destinations11) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations11[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu12 ul');
    for (var item in destinations12) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations12[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu13 ul');
    for (var item in destinations13) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations13[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu14 ul');
    for (var item in destinations14) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations14[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu15 ul');
    for (var item in destinations15) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations15[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu16 ul');
    for (var item in destinations16) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations16[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu17 ul');
    for (var item in destinations17) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations17[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu18 ul');
    for (var item in destinations18) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations18[item])
    }






    var Data = {
          // Алтайский край
          1:{coord:[60.3015200, 55.1677807],descr:'ИП Слукин П.В. «Русские краски»'},
          
          // Липецкая область
          2:{coord:[33.3055779999997, 59.91815363876071],descr:'ИП Слукин П. В. «Русские краски»'},
          3:{coord:[33.3055779999997, 59.91815363876071],descr:'ИП Слукин П. В. «Русский Мастер»'},

          // Москва
          4:{coord:[61.37696469, 55.15683683],descr:'ООО «МИКСЭЛ»'},
          // Архангельская область
          5:{coord:[33.3055779999997, 59.91815363876071],descr:'ИП Федорова  У.В.'},
          // Ленинградская область
          6:{coord:[-1.1420950000004564, 51.48265070696638],descr:'ООО «Колор Эксперт»'},
          // Волгоградская область
          7:{coord:[64.40181027, 55.1478582],descr:'ИП Шестакова И.П./ООО "АВТОКОЛОР"'},
          // Краснодарский край
          8:{coord:[-1.1420955000004564, 51.4826570696638],descr:'ИП Криворогова И.И.'},
          // Республика Крым
          9:{coord:[71.3015000, 55.16677807],descr:'ИП Бедрик Д.В.'},
          // Ростовская область
          10:{coord:[71.3015000, 55.16677807],descr:'ИП Логвинов А.И.'},

          11:{coord:[71.3015000, 55.16677807],descr:'ООО «Rempolimer»'},
          // Пермская область
          12:{coord:[60.3015200, 55.1677807],descr:'ООО «Фора»'},
          // Курганская область
          13:{coord:[61.37696469, 55.15683683],descr:'ИП Кильдяев И.А.'},
          // Челябинская область
          14:{coord:[33.3055779999997, 59.91815363876071],descr:'ИП Кильдяев И.А.'},
          // Новосибирская область
          15:{coord:[33.3055779999997, 59.91815363876071],descr:'ООО «ТД Сибирь»'},
          // Омская область
          16:{coord:[61.37696469, 55.15683683],descr:'ИП Самойлович С.А.'},
          // Бурятия
          17:{coord:[-1.1420950000004564, 51.48265070696638],descr:'ИП Кузьмин А.В'},


          18:{coord:[33.3055779999997, 59.91815363876071],descr:'ООО «Rempolimer»'},
          19:{coord:[33.3055779999997, 59.91815363876071],descr:'ООО «Rempolimer»'},
          20:{coord:[33.3055779999997, 59.91815363876071],descr:'ООО «Rempolimer»'},
          21:{coord:[33.3055779999997, 59.91815363876071],descr:'ООО «Rempolimer»'},
          22:{coord:[33.3055779999997, 59.91815363876071],descr:'ООО «Rempolimer»'},
          23:{coord:[33.3055779999997, 59.91815363876071],descr:'ООО «Rempolimer»'},
          24:{coord:[33.3055779999997, 59.91815363876071],descr:'ООО «Rempolimer»'},
          25:{coord:[33.3055779999997, 59.91815363876071],descr:'ООО «Rempolimer»'},
          26:{coord:[33.3055779999997, 59.91815363876071],descr:'ООО «Rempolimer»'},
          27:{coord:[33.3055779999997, 59.91815363876071],descr:'ООО «Rempolimer»'}
        };

    for( p in Data ) {
      if(  Data[p].coord[0] != undefined &&  Data[p].coord[0] != undefined ) {

        placemark = new YMaps.Placemark(new YMaps.GeoPoint( Data[p].coord[0], Data[p].coord[1]), {style:s} );
        placemark.description = Data[p].descr;
        map.addOverlay( placemark );

      }
    }



});

// Активная метка
YMaps.jQuery(function() {

  YMaps.jQuery('.YMaps-placemark').each(function(i, item) {

    YMaps.jQuery('#collapse-group ul li a')[i].conformityElement = YMaps.jQuery(item);

  });

  YMaps.jQuery('#collapse-group ul li a').click(function () {

    YMaps.jQuery('#collapse-group ul li a').each(function (i, item) {
      item.conformityElement.children().attr('src', 'img/mark2.png');
      item.conformityElement.css({'z-index' : '100'})
    });

    this.conformityElement.children().attr('src', 'img/mark.png');
    this.conformityElement.css({'z-index' : '999'})

  })

});

// Фокус первого элемента
YMaps.jQuery(function () {
  YMaps.jQuery('.panel-title-link').click(function() {

    YMaps.jQuery(this).parent().parent().siblings('div').find('li:first').find('a').trigger('click');

  });
})




// Табы
var tabLinks = new Array();
var contentDivs = new Array();

function init() {

  var tabListItems = document.getElementById('tabs0').childNodes;
  for ( var i = 0; i < tabListItems.length; i++ ) {
    if ( tabListItems[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }

  var tabListItems1 = document.getElementById('tabs1').childNodes;
  for ( var i = 0; i < tabListItems1.length; i++ ) {
    if ( tabListItems1[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems1[i], 'A' );
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
  var tabListItems3 = document.getElementById('tabs3').childNodes;
  for ( var i = 0; i < tabListItems3.length; i++ ) {
    if ( tabListItems3[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems3[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems4 = document.getElementById('tabs4').childNodes;
  for ( var i = 0; i < tabListItems4.length; i++ ) {
    if ( tabListItems4[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems4[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems5 = document.getElementById('tabs5').childNodes;
  for ( var i = 0; i < tabListItems5.length; i++ ) {
    if ( tabListItems5[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems5[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems6 = document.getElementById('tabs6').childNodes;
  for ( var i = 0; i < tabListItems6.length; i++ ) {
    if ( tabListItems6[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems6[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems7 = document.getElementById('tabs7').childNodes;
  for ( var i = 0; i < tabListItems7.length; i++ ) {
    if ( tabListItems7[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems7[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
   var tabListItems8 = document.getElementById('tabs8').childNodes;
  for ( var i = 0; i < tabListItems8.length; i++ ) {
    if ( tabListItems8[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems8[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems9 = document.getElementById('tabs9').childNodes;
  for ( var i = 0; i < tabListItems9.length; i++ ) {
    if ( tabListItems9[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems9[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems10 = document.getElementById('tabs10').childNodes;
  for ( var i = 0; i < tabListItems10.length; i++ ) {
    if ( tabListItems10[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems10[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems11 = document.getElementById('tabs11').childNodes;
  for ( var i = 0; i < tabListItems11.length; i++ ) {
    if ( tabListItems11[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems11[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems12 = document.getElementById('tabs12').childNodes;
  for ( var i = 0; i < tabListItems12.length; i++ ) {
    if ( tabListItems12[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems12[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems13 = document.getElementById('tabs13').childNodes;
  for ( var i = 0; i < tabListItems13.length; i++ ) {
    if ( tabListItems13[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems13[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems14 = document.getElementById('tabs14').childNodes;
  for ( var i = 0; i < tabListItems14.length; i++ ) {
    if ( tabListItems14[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems14[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems15 = document.getElementById('tabs15').childNodes;
  for ( var i = 0; i < tabListItems15.length; i++ ) {
    if ( tabListItems15[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems15[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems16 = document.getElementById('tabs16').childNodes;
  for ( var i = 0; i < tabListItems16.length; i++ ) {
    if ( tabListItems16[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems16[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems17 = document.getElementById('tabs17').childNodes;
  for ( var i = 0; i < tabListItems17.length; i++ ) {
    if ( tabListItems17[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems17[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }//END Табы
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

(function(){
var a = document.querySelector('#aside1'), b = null, P = 0;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);
function Ascroll() {
  if (b == null) {
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) {
      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
      }
    }
    b = document.createElement('div');
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {
      b.appendChild(a.childNodes[1]);
    }
    a.style.height = b.getBoundingClientRect().height + 'px';
    a.style.padding = '0';
    a.style.border = '0';
  }
  var Ra = a.getBoundingClientRect(),
      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('footer').getBoundingClientRect().top + 0);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
  if ((Ra.top - P) <= 0) {
    if ((Ra.top - P) <= R) {
      b.className = 'stop';
      b.style.top = - R +'px';
    } else {
      b.className = 'sticky';
      b.style.top = P + 'px';
    }
  } else {
    b.className = '';
    b.style.top = '';
  }
  window.addEventListener('resize', function() {
    a.children[0].style.width = getComputedStyle(a, '').width
  }, false);
}
})()
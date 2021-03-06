;var cl = console.log;

YMaps.jQuery(function () {

  var map          = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]),
      destinations = {//Центральный федеральный округ
        // Белгородская область
        // Воронежская область
        'Воронежская область' : new YMaps.GeoPoint(39.135372747885185, 51.70219273608626), //1 +
        // Курская область
        // Липецкая область
        'Липецкая область «Русские краски»' : new YMaps.GeoPoint(39.614714575796484, 52.670171919172354), //2 +
        'Липецкая область «Русский Мастер»' : new YMaps.GeoPoint(39.54269099999999, 52.615601), //3 +
        // Москва
        'Московская область' : new YMaps.GeoPoint(37.64938832883604, 55.8166567071817) //4 +
      },
      destinations2 = {//Северо-Западный федеральный округ
        // Архангельская область
        'Архангельская область' : new YMaps.GeoPoint(40.55047194841006, 64.55231377992278), //5 +
        // Ленинградская область
        'Ленинградская область' : new YMaps.GeoPoint(30.47629900000004, 59.88898099999999) //6 +
      },
      destinations3 = {//Южный федеральный округ
        // Волгоградская область
        'Волгоградская область' : new YMaps.GeoPoint(39.844405999999935, 59.20937), //7 +
        // Краснодарский край
        'Краснодарский край' : new YMaps.GeoPoint(38.10503300000005, 45.2446089), //8 +
        // Республика Крым
        'Республика Крым' : new YMaps.GeoPoint(34.13044189709774, 44.95748070480722), //9 +
        // Ростовская область
        'Ростовская область' : new YMaps.GeoPoint(39.61404790000006, 47.21977400000001) //10 +
      },
      destinations4 = {//Северо-Кавказский федеральный округ
        'ООО «Rempolimer»' : new YMaps.GeoPoint(41.96834590219123, 45.045481122513856) //11 -
      },
      destinations5 = {//Приволжский федеральный округ
        // Пензенская область
        // Пермская область
        'Пермская область' : new YMaps.GeoPoint(56.03722348576662, 58.041030294928795) //12 +
      },
      destinations6 = {//Уральский федеральный округ
        // Курганская область
        // '<p>ИП Кильдяев И.А.</p>' : new YMaps.GeoPoint(37.64938832883604, 55.8166567071817),
        // Челябинская область
        'Челябинская область' : new YMaps.GeoPoint(40.55047194840995, 64.55231838996178) //13 -
      },
      destinations7 = {//Сибирский федеральный округ
        // Новосибирская область
        'Новосибирская область' : new YMaps.GeoPoint(82.85270500000001, 54.95514000000001), //14 +
        // Омская область
        'Омская область' : new YMaps.GeoPoint(73.40142400000002, 55.029065), //15 +
        // Бурятия
        'Бурятия' : new YMaps.GeoPoint(107.61627099999998, 51.810935), //16 +
        // Томская область
        // '<p>ООО «ТД Сибирь»</p>' : new YMaps.GeoPoint(40.55047194840995, 64.55231838996178)
      },
      destinations8 = {//Дальневосточный федеральный округ
        'Якутская область' : new YMaps.GeoPoint(129.67547450000006, 62.0354523) //17 +
      },
      destinations9 = {//Азербайджан
        'ООО «Rempolimer»' : new YMaps.GeoPoint(49.86709240000005, 40.40926169999999) //18 +
      },
      destinations10 = {//Армения
        'ООО «Rempolimer»' : new YMaps.GeoPoint(44.499102900000025, 40.1791857) //19 +
      },
      destinations11 = {//Белоруссия
        'ООО «Rempolimer»' : new YMaps.GeoPoint(27.561524400000053, 53.90453979999999) //20 +
      },
      destinations12 = {//Казахстан
        'ООО «Rempolimer»' : new YMaps.GeoPoint(71.4703558, 51.16052269999999) //21 +
      },
      destinations13 = {//Киргизия
        'ООО «Rempolimer»' : new YMaps.GeoPoint(74.56976170000007, 42.8746212) //22 +
      },
      destinations14 = {//Молдавия
        'ООО «Rempolimer»' : new YMaps.GeoPoint(28.86381030000007, 47.0104529) //23 +
      },
      destinations15 = {//Таджикистан
        'ООО «Rempolimer»' : new YMaps.GeoPoint(68.78703840000003, 38.5597722) //24 +
      },
      destinations16 = {//Туркмения
        'ООО «Rempolimer»' : new YMaps.GeoPoint(58.32606290000001, 37.9600766) //25 +
      },
      destinations17 = {//Узбекистан
        'ООО «Rempolimer»' : new YMaps.GeoPoint(69.24007340000003, 41.2994958) //26 +
      },
      destinations18 = {//Украина
        'ООО «Rempolimer»' : new YMaps.GeoPoint(30.523400000000038, 50.4501) //27 +
      };

      var Data = {
          // Алтайский край +
          1:{coord:[39.135372747885185, 51.70219273608626]},
          
          // Липецкая область +
          2:{coord:[39.614714575796484, 52.670171919172354]},
          3:{coord:[39.54269099999999, 52.615601]},

          // Москва +
          4:{coord:[37.64938832883604, 55.8166567071817]},
          // Архангельская область +
          5:{coord:[40.55047194841006, 64.55231377992278]},
          // Ленинградская область +
          6:{coord:[30.47629900000004, 59.88898099999999]},
          // Волгоградская область +
          7:{coord:[39.844405999999935, 59.20937]},
          // Краснодарский край +
          8:{coord:[38.10503300000005, 45.2446089]},
          // Республика Крым +
          9:{coord:[34.13044189709774, 44.95748070480722]},
          // Ростовская область +
          10:{coord:[39.61404790000006, 47.21977400000001]},

          11:{coord:[41.96834590219123, 45.045481122513856]},
          // Пермская область +
          12:{coord:[56.03722348576662, 58.041030294928795]},
          // Курганская область -
          13:{coord:[37.64938832883604, 55.8166567071817]},
          // Челябинская область +
          14:{coord:[82.85270500000001, 54.95514000000001]},
          // Новосибирская область +
          15:{coord:[73.40142400000002, 55.029065]},
          // Омская область +
          16:{coord:[107.61627099999998, 51.810935]},
          // Бурятия +
          17:{coord:[129.67547450000006, 62.0354523]},

		  //Азербайджан +
          18:{coord:[49.86709240000005, 40.40926169999999]},
		  //Армения +
          19:{coord:[44.499102900000025, 40.1791857]},
		  //Белоруссия +
          20:{coord:[27.561524400000053, 53.90453979999999]},
		  //Казахстан +
          21:{coord:[71.4703558, 51.16052269999999]},
		  //Киргизия +
          22:{coord:[74.56976170000007, 42.8746212]},
		  //Молдавия +
          23:{coord:[28.86381030000007, 47.0104529]},
		  //Таджикистан +
          24:{coord:[68.78703840000003, 38.5597722]},
		  //Туркмения +
          25:{coord:[58.32606290000001, 37.9600766]},
		  //Узбекистан +
          26:{coord:[69.24007340000003, 41.2994958]},
		  //Украина +
          27:{coord:[30.523400000000038, 50.4501]}
		 
        };

    for( p in Data ) {
      if(  Data[p].coord[0] != undefined &&  Data[p].coord[0] != undefined ) {

        placemark = new YMaps.Placemark(new YMaps.GeoPoint( Data[p].coord[0], Data[p].coord[1]), {style:s} );
        map.addOverlay( placemark );
      }
    }



    map.setCenter(destinations['Воронежская область'], 14);
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
        map.addControl(new YMaps.Zoom());
      })(item, destinations[item])

    }
    // Северо-Западный федеральный округ
    var menuContainer = YMaps.jQuery('#mapMenu2 ul');
    for (var item in destinations2) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
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
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
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
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
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
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
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
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
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
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
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
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations8[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu9 ul');
    for (var item in destinations9) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations9[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu10 ul');
    for (var item in destinations10) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations10[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu11 ul');
    for (var item in destinations11) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations11[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu12 ul');
    for (var item in destinations12) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations12[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu13 ul');
    for (var item in destinations13) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations13[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu14 ul');
    for (var item in destinations14) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations14[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu15 ul');
    for (var item in destinations15) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations15[item])
    }
     var menuContainer = YMaps.jQuery('#mapMenu16 ul');
    for (var item in destinations16) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations16[item])
    }
    var menuContainer = YMaps.jQuery('#mapMenu17 ul');
    for (var item in destinations17) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations17[item])
    }
    var menuContainer = YMaps.jQuery('#mapMenu18 ul');
    for (var item in destinations18) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\">' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations18[item])
    }
});

// Активная метка
// YMaps.jQuery(function() {

//   YMaps.jQuery('.YMaps-placemark').each(function(i, item) {

//     YMaps.jQuery('#collapse-group ul li a')[i].conformityElement = YMaps.jQuery(item);

//   });

//   YMaps.jQuery('#collapse-group ul li a').click(function () {

//     YMaps.jQuery('#collapse-group ul li a').each(function (i, item) {
//       item.conformityElement.children().attr('src', 'img/mark2.png');
//       item.conformityElement.css({'z-index' : '100'})
//     });

//     this.conformityElement.children().attr('src', 'img/mark.png');
//     this.conformityElement.css({'z-index' : '999'})

//   })

// });

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

  var tabListItems = "",
      numberID = 0,
      sizeTabs = $('.buy .sidebar_menu .panel-body').length;

  for(all = 0; all < sizeTabs; all++){

    window['tabListItems' + all] = document.getElementById('tabs' + numberID).childNodes;
      for ( var i = 0; i < window['tabListItems' + all].length; i++ ) {
        if (window['tabListItems' + all][i].nodeName == "LI" ) {
          var tabLink = getFirstChildWithTagName( window['tabListItems' + all][i], 'A' );
          var id = getHash( tabLink.getAttribute('href') );
          tabLinks[id] = tabLink;
          contentDivs[id] = document.getElementById( id );
        }
      }  
    numberID++;
  }
  var i = 0;

  for ( var id in tabLinks ) {

    tabLinks[id].onclick = showTab;
    tabLinks[id].onfocus = function() { this.blur() };
    if ( i == 0 ) tabLinks[id].className = 'selected';
    i++;

  }
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
})();
// setTimeout(function(){
//   console.log($('.sidebar_menu .panel-body').find('a'));
//   $('.menu_icon').on('click', function(){
//     console.log($('.sidebar_menu .panel-body').find('a'));
//     $('.menu-mobile--itself').toggleClass('show');
//   });

//   $('.sidebar_menu .panel-body a').on('click', function(){
//     console.log('sefsefsefsefse');
//     $('.menu-mobile--itself').toggleClass('show')
//   });
// },1000);

var test = false

$('.menu_icon').on('click', function(){
  $('.menu-mobile--itself').toggleClass('show');
});
$('.menu_icon-close').on('click', function(){
  $('.menu-mobile--itself').toggleClass('show');
});

$('.panel-title-link').on('click', function(){
  if(test === false){

    $('.sidebar_menu .panel-body a').on('click', function(){
      $('.menu-mobile--itself').toggleClass('show')
    });
    test = true;
  }

});





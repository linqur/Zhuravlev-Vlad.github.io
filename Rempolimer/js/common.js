;var cl = console.log;


YMaps.jQuery(function () {

  var map          = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]),
      destinations = {//Алтайский край
        '<p>ООО «ТД Сибирь»</p>' : new YMaps.GeoPoint(61.37696469, 55.15683683)
      },
      // destinations2 = {//Амурская область
      // };
      destinations3 = {//Архангельская область
        '<p>ИП Федорова  У.В.</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      // destinations4 = {//Астраханская область
      // };
      destinations5 = {//Белгородская область
        '<p>ИП Слукин П. В. «Русские краски»</p>' : new YMaps.GeoPoint(-1.1420950000004564, 51.48265070696638),
        '<p>ИП Слукин П. В. «Русский Мастер»</p>' : new YMaps.GeoPoint(-1.1420950000004564, 51.48265070696638)
      };
      // destinations6 = {//Брянская область
      // };
      destinations7 = {//Волгоградская область
        '<p>ИП Шестакова И.П./ООО "АВТОКОЛОР"</p>' : new YMaps.GeoPoint(64.40181027, 55.1478582)
      };
      destinations8 = {//Воронежская область
        '<p>ИП Адамян Г.А.</p>' : new YMaps.GeoPoint(60.3015200, 55.1677807)
      };
      // destinations9 = {//Ивановская область
      // };
      // destinations10 = {//Камчатская область
      // };
      destinations11 = {//Кемеровская область
        '<p>ООО «ТД Сибирь»</p>' : new YMaps.GeoPoint(31.3055779999997, 59.9181363876071)
      };
      // destinations12 = {//Кировская область
      // };
      // destinations13 = {//Костромская область
      // };
      destinations14 = {//Краснодарский край
        '<p>ИП Криворогова И.И</p>' : new YMaps.GeoPoint(-1.1420955000004564, 51.4826570696638)
      };
      destinations15 = {//Красноярский край
        '<p>ООО «ТД Сибирь»</p>' : new YMaps.GeoPoint(31.4011027, 55.1648582)
      };
      destinations16 = {//Крым
        '<p>ИП Бедрик Д.В.</p>' : new YMaps.GeoPoint(71.3015000, 55.16677807)
      };
      destinations17 = {//Курганская область
        '<p>ИП Кильдяев И.А.</p>' : new YMaps.GeoPoint(61.37696469, 55.15683683)
      };
      destinations18 = {//Курская область
        '<p>ИП Слукин П. В. «Русские краски»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071),
        '<p>ИП Слукин П. В. «Русский Мастер»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      destinations19 = {//Ленинградская область
        '<p>ООО «Колор Эксперт»</p>' : new YMaps.GeoPoint(-1.1420950000004564, 51.48265070696638)
      };
      destinations20 = {//Липецкая область
         '<p>ИП Слукин П. В. «Русские краски»</p>' : new YMaps.GeoPoint(64.40181027, 55.1478582),
         '<p>ИП Слукин П. В. «Русский Мастер»</p>' : new YMaps.GeoPoint(64.40181027, 55.1478582)
      };
      // destinations21 = {//Магаданская область
      // };
      destinations22 = {//Москва
        '<p>ООО «МИКСЭЛ»</p>' : new YMaps.GeoPoint(61.37696469, 55.15683683)
      };
      //Новосибирская област
      destinations23 = {
        '<p>ООО «ТД Сибирь»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      // Омская область
      destinations24 = {
        '<p>ИП Самойлович С.А.</p>' : new YMaps.GeoPoint(64.40181027, 55.1478582)
      };
      // Орловская область
      destinations25 = {
        '<p>ИП Слукин П. В. «Русские краски»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071),
        '<p>ИП Слукин П. В. «Русский Мастер»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      // Пензенская область
      destinations26 = {
        '<p>ИП Слукин П. В. «Русские краски»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071),
        '<p>ИП Слукин П. В. «Русский Мастер»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      // Пермская область
      destinations27 = {
        '<p>ООО «Фора»</p>' : new YMaps.GeoPoint(60.3015200, 55.1677807)
      };
      // Республика Бурятия
      destinations28 = {
        '<p>ИП Кузьмин А.В.</p>' : new YMaps.GeoPoint(-1.1420950000004564, 51.48265070696638)
      };
      // Ростовская область
      destinations29 = {
        '<p>ИП Логвинов А.И</p>' : new YMaps.GeoPoint(71.3015000, 55.16677807)
      };
      // Тамбовская область
      destinations30 = {
        '<p>ИП Слукин П. В. «Русские краски»</p>' : new YMaps.GeoPoint(-1.1420950000004564, 51.48265070696638),
        '<p>ИП Слукин П. В. «Русский Мастер»</p>' : new YMaps.GeoPoint(-1.1420950000004564, 51.48265070696638)
      };
      // Томская область
      destinations31 = {
        '<p>ООО «ТД Сибирь»</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };
      // Тульская область
      destinations32 = {
        '<p>ИП Слукин П. В. «Русские краски»</p>' : new YMaps.GeoPoint(-1.1420950000004564, 51.48265070696638),
        '<p>ИП Слукин П. В. «Русский Мастер»</p>' : new YMaps.GeoPoint(-1.1420950000004564, 51.48265070696638)
      };
      // Челябинская область
      destinations33 = {
        '<p>ИП Кильдяев И.А.</p>' : new YMaps.GeoPoint(33.3055779999997, 59.91815363876071)
      };


    map.setCenter(destinations['<p>ООО «ТД Сибирь»</p>'], 14);

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
    // Амурская область
    // var menuContainer = YMaps.jQuery('#mapMenu2 ul');
    // for (var item in destinations2) {
    //   (function (title, geoPoint) {     
    //         num++;
    //         YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
    //             map.panTo(geoPoint, {flying: 1});
    //             return false;
    //         }).end().appendTo(menuContainer);
    //   })(item, destinations2[item])
    // }

    // Архангельская область
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

    // Астраханская область
    // var menuContainer = YMaps.jQuery('#mapMenu4 ul');
    // for (var item in destinations4) {
    //   (function (title, geoPoint) {     
    //         num++;
    //         YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
    //             map.panTo(geoPoint, {flying: 1});
    //             return false;
    //         }).end().appendTo(menuContainer);
    //   })(item, destinations4[item])
    // }

    // Белгородская область
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

    //Брянская область
    // var menuContainer = YMaps.jQuery('#mapMenu6 ul');
    // for (var item in destinations6) {
    //   (function (title, geoPoint) {     
    //         num++;
    //         YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
    //             map.panTo(geoPoint, {flying: 1});
    //             return false;
    //         }).end().appendTo(menuContainer);
    //   })(item, destinations6[item])
    // }

    //Волгоградская область
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

    //Воронежская область
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

    //Ивановская область
    // var menuContainer = YMaps.jQuery('#mapMenu9 ul');
    // for (var item in destinations9) {
    //   (function (title, geoPoint) {     
    //         num++;
    //         YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
    //             map.panTo(geoPoint, {flying: 1});
    //             return false;
    //         }).end().appendTo(menuContainer);
    //   })(item, destinations9[item])
    // }
    //Камчатская область
    // var menuContainer = YMaps.jQuery('#mapMenu10 ul');
    // for (var item in destinations10) {
    //   (function (title, geoPoint) {     
    //         num++;
    //         YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
    //             map.panTo(geoPoint, {flying: 1});
    //             return false;
    //         }).end().appendTo(menuContainer);
    //   })(item, destinations10[item])
    // }
    //Кемеровская область
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
    //Кировская область
    // var menuContainer = YMaps.jQuery('#mapMenu12 ul');
    // for (var item in destinations12) {
    //   (function (title, geoPoint) {     
    //         num++;
    //         YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
    //             map.panTo(geoPoint, {flying: 1});
    //             return false;
    //         }).end().appendTo(menuContainer);
    //   })(item, destinations12[item])
    // }
    //Костромская область
    // var menuContainer = YMaps.jQuery('#mapMenu13 ul');
    // for (var item in destinations13) {
    //   (function (title, geoPoint) {     
    //         num++;
    //         YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
    //             map.panTo(geoPoint, {flying: 1});
    //             return false;
    //         }).end().appendTo(menuContainer);
    //   })(item, destinations13[item])
    // }
    //Краснодарский край
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
    //Красноярский край
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
    //Крым
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
    //Курганская область
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
    //Курская область
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
    //Ленинградская область
    var menuContainer = YMaps.jQuery('#mapMenu19 ul');
    for (var item in destinations19) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations19[item])
    }
    //Липецкая область
    var menuContainer = YMaps.jQuery('#mapMenu20 ul');
    for (var item in destinations20) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations20[item])
    }
    //Магаданская область
    // var menuContainer = YMaps.jQuery('#mapMenu21 ul');
    // for (var item in destinations21) {
    //   (function (title, geoPoint) {     
    //         num++;
    //         YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
    //             map.panTo(geoPoint, {flying: 1});
    //             return false;
    //         }).end().appendTo(menuContainer);
    //   })(item, destinations21[item])
    // }
    //Москва
    var menuContainer = YMaps.jQuery('#mapMenu22 ul');
    for (var item in destinations22) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations22[item])
    }
    //Новосибирская област
    var menuContainer = YMaps.jQuery('#mapMenu23 ul');
    for (var item in destinations23) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations23[item])
    }
    // Омская область
    var menuContainer = YMaps.jQuery('#mapMenu24 ul');
    for (var item in destinations24) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations24[item])
    }
    // Орловская область
    var menuContainer = YMaps.jQuery('#mapMenu25 ul');
    for (var item in destinations25) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations25[item])
    }
    // Пензенская область
    var menuContainer = YMaps.jQuery('#mapMenu26 ul');
    for (var item in destinations26) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations26[item])
    }
    // Пермская область
    var menuContainer = YMaps.jQuery('#mapMenu27 ul');
    for (var item in destinations27) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations27[item])
    }
    // Республика Бурятия
    var menuContainer = YMaps.jQuery('#mapMenu28 ul');
    for (var item in destinations28) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations28[item])
    }
    // Ростовская область
    var menuContainer = YMaps.jQuery('#mapMenu29 ul');
    for (var item in destinations29) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations29[item])
    }
    // Тамбовская область
    var menuContainer = YMaps.jQuery('#mapMenu30 ul');
    for (var item in destinations30) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations30[item])
    }
    // Томская область
    var menuContainer = YMaps.jQuery('#mapMenu31 ul');
    for (var item in destinations31) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations31[item])
    }
    // Тульская область
    var menuContainer = YMaps.jQuery('#mapMenu32 ul');
    for (var item in destinations32) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations32[item])
    }
    // Челябинская область
    var menuContainer = YMaps.jQuery('#mapMenu33 ul');
    for (var item in destinations33) {
      (function (title, geoPoint) {     
            num++;
            YMaps.jQuery('<li><a href=\"#tab' + num + '\"' + item + '</a></li>').find('a').click(function () {
                map.panTo(geoPoint, {flying: 1});
                return false;
            }).end().appendTo(menuContainer);
      })(item, destinations33[item])
    }





    var Data = {
          // Алтайский край
          1:{coord:[61.37696469, 55.15683683],descr:'ООО «ТД Сибирь»'},
          
          //Амурская область

          //Архангельская область
          2:{coord:[33.3055779999997, 59.91815363876071],descr:'ИП Федорова  У.В.'},

          //Белгородская область
          3:{coord:[-1.1420950000004564, 51.48265070696638],descr:'ИП Слукин П. В. «Русские краски»'},
          4:{coord:[-1.1420950000004564, 51.48265070696638],descr:'ИП Слукин П. В. «Русский Мастер»'},

          //Брянская область

          //Волгоградская область
          5:{coord:[64.40181027, 55.1478582],descr:'ИП Шестакова И.П./ООО "АВТОКОЛОР"'},

          //Воронежская область
          6:{coord:[60.3015200, 55.1677807],descr:'ИП Адамян Г.А.'},

          //Ивановская область
          //Камчатская область
          //Кемеровская область
          7:{coord:[31.3055779999997, 59.9181363876071],descr:'ООО «ТД Сибирь»'},
          //Кировская область
          //Костромская область
          //Краснодарский край
          8:{coord:[-1.1420955000004564, 51.4826570696638],descr:'ИП Криворогова И.И.'},
          //Красноярский край
          9:{coord:[31.4011027, 55.1648582],descr:'ИП Криворогова И.И.'},
          //Крым
          10:{coord:[71.3015000, 55.16677807],descr:'ИП Бедрик Д.В.'},
          //Курганская область
          11:{coord:[61.37696469, 55.15683683],descr:'ИП Кильдяев И.А.'},
          //Курская область
          12:{coord:[33.3055779999997, 59.91815363876071],descr:'ИП Слукин П. В. «Русские краски»'},
          13:{coord:[33.3055779999997, 59.91815363876071],descr:'ИП Слукин П. В. «Русский Мастер»'},
          //Ленинградская область
          14:{coord:[-1.1420950000004564, 51.48265070696638],descr:'ООО «Колор Эксперт»'},
          //Липецкая область
          15:{coord:[64.40181027, 55.1478582],descr:'ИП Слукин П. В. «Русские краски»'},
          16:{coord:[64.40181027, 55.1478582],descr:'ИП Слукин П. В. «Русский Мастер»'},
          //Магаданская область
          //москва
          17:{coord:[61.37696469, 55.15683683],descr:'ООО «МИКСЭЛ»'},
          //Новосибирская област
          18:{coord:[33.3055779999997, 59.91815363876071],descr:'ООО «ТД Сибирь»'},
          // Омская область
          19:{coord:[61.37696469, 55.15683683],descr:'ИП Самойлович С.А.'},
          // Орловская область
          20:{coord:[33.3055779999997, 59.91815363876071],descr:'ИП Слукин П. В. «Русские краски»'},
          21:{coord:[33.3055779999997, 59.91815363876071],descr:'ИП Слукин П. В. «Русский Мастер»'},
          // Пензенская область
          22:{coord:[33.3055779999997, 59.91815363876071],descr:'ИП Слукин П. В. «Русские краски»'},
          23:{coord:[33.3055779999997, 59.91815363876071],descr:'ИП Слукин П. В. «Русский Мастер»'},
          // Пермская область
          24:{coord:[60.3015200, 55.1677807],descr:'ООО «Фора»'},
          // Республика Бурятия
          25:{coord:[-1.1420950000004564, 51.48265070696638],descr:'ИП Кузьмин А.В'},
          // Ростовская область
          26:{coord:[71.3015000, 55.16677807],descr:'ИП Логвинов А.И.'},
          // Тамбовская область
          27:{coord:[-1.1420950000004564, 51.48265070696638],descr:'ИП Слукин П. В. «Русские краски»'},
          28:{coord:[-1.1420950000004564, 51.48265070696638],descr:'ИП Слукин П. В. «Русский Мастер»'},
          // Томская область
          29:{coord:[33.3055779999997, 59.91815363876071],descr:'ООО «ТД Сибирь»'},
          // Тульская область
          30:{coord:[-1.1420950000004564, 51.48265070696638],descr:'ИП Слукин П. В. «Русские краски»'},
          31:{coord:[-1.1420950000004564, 51.48265070696638],descr:'ИП Слукин П. В. «Русский Мастер»'},
          // Челябинская область
          32:{coord:[33.3055779999997, 59.91815363876071],descr:'ИП Кильдяев И.А.'}
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

  // var tabListItems1 = document.getElementById('tabs1').childNodes;
  // for ( var i = 0; i < tabListItems1.length; i++ ) {
  //   if ( tabListItems1[i].nodeName == "LI" ) {
  //     var tabLink = getFirstChildWithTagName( tabListItems1[i], 'A' );
  //     var id = getHash( tabLink.getAttribute('href') );
  //     tabLinks[id] = tabLink;
  //     contentDivs[id] = document.getElementById( id );
  //   }
  // }
  var tabListItems2 = document.getElementById('tabs2').childNodes;
  for ( var i = 0; i < tabListItems2.length; i++ ) {
    if ( tabListItems2[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems2[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  // var tabListItems3 = document.getElementById('tabs3').childNodes;
  // for ( var i = 0; i < tabListItems3.length; i++ ) {
  //   if ( tabListItems3[i].nodeName == "LI" ) {
  //     var tabLink = getFirstChildWithTagName( tabListItems3[i], 'A' );
  //     var id = getHash( tabLink.getAttribute('href') );
  //     tabLinks[id] = tabLink;
  //     contentDivs[id] = document.getElementById( id );
  //   }
  // }
  var tabListItems4 = document.getElementById('tabs4').childNodes;
  for ( var i = 0; i < tabListItems4.length; i++ ) {
    if ( tabListItems4[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems4[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  // var tabListItems5 = document.getElementById('tabs5').childNodes;
  // for ( var i = 0; i < tabListItems5.length; i++ ) {
  //   if ( tabListItems5[i].nodeName == "LI" ) {
  //     var tabLink = getFirstChildWithTagName( tabListItems5[i], 'A' );
  //     var id = getHash( tabLink.getAttribute('href') );
  //     tabLinks[id] = tabLink;
  //     contentDivs[id] = document.getElementById( id );
  //   }
  // }
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
  // var tabListItems8 = document.getElementById('tabs8').childNodes;
  // for ( var i = 0; i < tabListItems8.length; i++ ) {
  //   if ( tabListItems8[i].nodeName == "LI" ) {
  //     var tabLink = getFirstChildWithTagName( tabListItems8[i], 'A' );
  //     var id = getHash( tabLink.getAttribute('href') );
  //     tabLinks[id] = tabLink;
  //     contentDivs[id] = document.getElementById( id );
  //   }
  // }
  // var tabListItems9 = document.getElementById('tabs9').childNodes;
  // for ( var i = 0; i < tabListItems9.length; i++ ) {
  //   if ( tabListItems9[i].nodeName == "LI" ) {
  //     var tabLink = getFirstChildWithTagName( tabListItems9[i], 'A' );
  //     var id = getHash( tabLink.getAttribute('href') );
  //     tabLinks[id] = tabLink;
  //     contentDivs[id] = document.getElementById( id );
  //   }
  // }
  var tabListItems10 = document.getElementById('tabs10').childNodes;
  for ( var i = 0; i < tabListItems10.length; i++ ) {
    if ( tabListItems10[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems10[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  // var tabListItems11 = document.getElementById('tabs11').childNodes;
  // for ( var i = 0; i < tabListItems11.length; i++ ) {
  //   if ( tabListItems11[i].nodeName == "LI" ) {
  //     var tabLink = getFirstChildWithTagName( tabListItems11[i], 'A' );
  //     var id = getHash( tabLink.getAttribute('href') );
  //     tabLinks[id] = tabLink;
  //     contentDivs[id] = document.getElementById( id );
  //   }
  // }
  // var tabListItems12 = document.getElementById('tabs12').childNodes;
  // for ( var i = 0; i < tabListItems12.length; i++ ) {
  //   if ( tabListItems12[i].nodeName == "LI" ) {
  //     var tabLink = getFirstChildWithTagName( tabListItems12[i], 'A' );
  //     var id = getHash( tabLink.getAttribute('href') );
  //     tabLinks[id] = tabLink;
  //     contentDivs[id] = document.getElementById( id );
  //   }
  // }
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
  }
  var tabListItems18 = document.getElementById('tabs18').childNodes;
  for ( var i = 0; i < tabListItems18.length; i++ ) {
    if ( tabListItems18[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems18[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems19 = document.getElementById('tabs19').childNodes;
  for ( var i = 0; i < tabListItems19.length; i++ ) {
    if ( tabListItems19[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems19[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  // var tabListItems20 = document.getElementById('tabs20').childNodes;
  // for ( var i = 0; i < tabListItems20.length; i++ ) {
  //   if ( tabListItems20[i].nodeName == "LI" ) {
  //     var tabLink = getFirstChildWithTagName( tabListItems20[i], 'A' );
  //     var id = getHash( tabLink.getAttribute('href') );
  //     tabLinks[id] = tabLink;
  //     contentDivs[id] = document.getElementById( id );
  //   }
  // }
  var tabListItems21 = document.getElementById('tabs21').childNodes;
  for ( var i = 0; i < tabListItems21.length; i++ ) {
    if ( tabListItems21[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems21[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems22 = document.getElementById('tabs22').childNodes;
  for ( var i = 0; i < tabListItems22.length; i++ ) {
    if ( tabListItems22[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems22[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems23 = document.getElementById('tabs23').childNodes;
  for ( var i = 0; i < tabListItems23.length; i++ ) {
    if ( tabListItems23[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems23[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems24 = document.getElementById('tabs24').childNodes;
  for ( var i = 0; i < tabListItems24.length; i++ ) {
    if ( tabListItems24[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems24[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems25 = document.getElementById('tabs25').childNodes;
  for ( var i = 0; i < tabListItems25.length; i++ ) {
    if ( tabListItems25[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems25[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems26 = document.getElementById('tabs26').childNodes;
  for ( var i = 0; i < tabListItems26.length; i++ ) {
    if ( tabListItems26[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems26[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems27 = document.getElementById('tabs27').childNodes;
  for ( var i = 0; i < tabListItems27.length; i++ ) {
    if ( tabListItems27[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems27[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems28 = document.getElementById('tabs28').childNodes;
  for ( var i = 0; i < tabListItems28.length; i++ ) {
    if ( tabListItems28[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems28[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems29 = document.getElementById('tabs29').childNodes;
  for ( var i = 0; i < tabListItems29.length; i++ ) {
    if ( tabListItems29[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems29[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems30 = document.getElementById('tabs30').childNodes;
  for ( var i = 0; i < tabListItems30.length; i++ ) {
    if ( tabListItems30[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems30[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems31 = document.getElementById('tabs31').childNodes;
  for ( var i = 0; i < tabListItems31.length; i++ ) {
    if ( tabListItems31[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems31[i], 'A' );
      var id = getHash( tabLink.getAttribute('href') );
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById( id );
    }
  }
  var tabListItems32 = document.getElementById('tabs32').childNodes;
  for ( var i = 0; i < tabListItems32.length; i++ ) {
    if ( tabListItems32[i].nodeName == "LI" ) {
      var tabLink = getFirstChildWithTagName( tabListItems32[i], 'A' );
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
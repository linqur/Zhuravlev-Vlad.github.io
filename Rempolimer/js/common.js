ymaps.ready(init); 
        var myMap;
        function init () { 
            myMap = new ymaps.Map("map", {
                    center: [55.79116633786059, 49.1674262066814], 
                    zoom: 11,
                });
          /* Создаем кастомные метки */
          myPlacemark0 = new ymaps.Placemark([55.79116633786059, 49.1674262066814], { // Создаем метку с такими координатами и суем в переменную
                  balloonContent: '<div>Заголовок метки 1<br/><p>Адрес:</p></div>' // сдесь содержимое балуна в формате html, все стили в css
                }, {
                iconImageHref: 'img/mark.png', // картинка иконки
                iconImageSize: [64, 64], // размер иконки
                iconImageOffset: [-32, -64], // позиция иконки
                  });
              /* тоже самое для других меток */
          myPlacemark1 = new ymaps.Placemark([55.85977356499046,49.18527898988449], {
                  balloonContent: '<div>Заголовок метки 2<br/><p>Адрес:</p></div>'
                }, {
                iconImageHref: 'img/mark2.png',
                iconImageSize: [64, 64],
                iconImageOffset: [-32, -64],
                  
                  });
          myPlacemark2 = new ymaps.Placemark([55.83398763747164,49.08932028016772], {
                  balloonContent: '<div>Заголовок метки 3<br/><p>Адрес:</p></div>'
                }, {
                iconImageHref: 'img/mark2.png',
                iconImageSize: [64, 64],
                iconImageOffset: [-32, -64],
                  });
          myPlacemark3 = new ymaps.Placemark([55.763011919848,49.14974508485522], {
                  balloonContent: '<div>Заголовок метки 4<br/><p>Адрес:</p></div>'
                }, {
                iconImageHref: 'img/mark2.png',
                iconImageSize: [64, 64],
                iconImageOffset: [-32, -64],
                  });
          myPlacemark4 = new ymaps.Placemark([55.76862508328107,49.25583181581224], {
                  balloonContent: '<div>Заголовок метки 5<br/><p>Адрес:</p></div>'
                }, {
                iconImageHref: 'img/mark2.png',
                iconImageSize: [64, 64],
                iconImageOffset: [-32, -64],
                  });
          /* Добавляем */
          myMap.geoObjects
            .add(myPlacemark0)
            .add(myPlacemark1)
            .add(myPlacemark2)
            .add(myPlacemark3)
            .add(myPlacemark4);

          /* Фикс кривого выравнивания кастомных балунов */
      myMap.geoObjects.events.add([
            'balloonopen'
        ], function (e) {
            var geoObject = e.get('target');
            myMap.panTo(geoObject.geometry.getCoordinates(), {
                                        delay: 0
                                    });
        });
    }

    
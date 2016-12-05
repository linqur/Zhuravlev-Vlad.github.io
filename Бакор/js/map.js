
var LocsA = [
    {
        lat: 55.645720,
        lon: 52.325907,
        zoom: 4,
        title: 'Набережные Челны',
        dropdown: [
            '<div class="map-popup-wrapper">',
            '<div class="map-dropdown-address">Адрес: <br/> г. Набережные Челны <br/> ул. Полиграфическая, 34 B </div>',
            '<div class="map-dropdown-phone"> Телефон: 8 800 700 9272 </div>',
            '</div>'
        ].join(''),
        animation: google.maps.Animation.DROP,
        icon: 'http://savepic.ru/10519684.png'
    },
    {
        lat: 55.574067,
        lon: 37.608948,
        zoom: 4,
        title: 'Москва',
        dropdown: [
            '<div class="map-popup-wrapper">',
            '<div class="map-dropdown-address">Адрес: <br/> г. Москва <br/> Внешняя сторона МКАД 32км. <br/>АГМ "Тракт", павильон 2-34 </div>',
            '<div class="map-dropdown-phone"> Телефон: +7 (499) 281-60-91 </div>',
            '</div>'
        ].join(''),
        icon: 'http://savepic.ru/10523920.png',
        animation: google.maps.Animation.DROP
    },
    {
        lat: 54.945389,
        lon: 82.871831,
        zoom: 4,
        title: 'Новосибирск',
        dropdown: [
            '<div class="map-popup-wrapper">',
            '<div class="map-dropdown-address">Адрес: <br/> г. Новосибирск <br/> Авторынок "Столица" <br/> 6 павильон 22 место </div>',
            '<div class="map-dropdown-phone"> Телефон: +7 (383) 312-04-73 </div>',
            '</div>'
        ].join(''),
        icon: 'http://savepic.ru/10523920.png',
        animation: google.maps.Animation.DROP
    },
    {
        lat: 56.882571,
        lon: 60.573113,
        zoom: 4,
        title: 'Екатеринбург',
        dropdown: [
            '<div class="map-popup-wrapper">',
            '<div class="map-dropdown-address">Адрес: <br/> г. Екатеринбург <br/> ул. Лукиных, 1 </div>',
            '<div class="map-dropdown-phone"> Телефон: +7 (343) 351-18-92 </div>',
            '</div>'
        ].join(''),
        icon: 'http://savepic.ru/10523920.png',
        animation: google.maps.Animation.DROP
    },
    {
        lat: 45.177871,
        lon: 39.097985,
        zoom: 4,
        title: 'Краснодар',
        dropdown: [
            '<div class="map-popup-wrapper">',
            '<div class="map-dropdown-address">Адрес: <br/> г. Краснодар <br/> 16-й км Ростовского шоссе, хутор Октябрьский, <br/>ул. Живописная, 72. <br/>"АЗИМУТ", строение 3А </div>',
            '<div class="map-dropdown-phone"> Телефон: + 7 (861) 204-17-63 </div>',
            '</div>'
        ].join(''),
        icon: 'http://savepic.ru/10523920.png',
        animation: google.maps.Animation.DROP
    }
];

var maplace = new Maplace({
    locations: LocsA,
    map_div: '#map',
    controls_div: '#controls',
    controls_type: 'list',
    view_all: false,
    start: 1,
    map_options : {
        scrollwheel: false
    },
    controls_on_map: false
}).Load();

maplace.o.afterShow = function(a,b,c) {
    var dropdown = b.dropdown;
    var el = $('.ullist.controls').find('li.active')[0];
    var div = '<div class="map-dropdown">' + dropdown + '</div>';
    $('.ullist.controls').find('li').find('div.map-dropdown').remove();
    $(el).append(div);
};


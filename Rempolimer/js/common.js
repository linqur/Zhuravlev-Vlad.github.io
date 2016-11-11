$(function() {
var LocsA = [
    {
        lat: 12.58,
        lon: 77.38,
        title: 'АВИОМ',
        info: '<div><div class="address col-md-6"><h3>АВИОМ</h3><p>Описание</p><h3>Адрес:</h3><p>Казань, ул. Авиастроительная, дом 50, офис 4</p></div><div class="tel-email col-md-6"><h3>Телефон:</h3><p>+7 (495) 510-87-19</p><h3>E-mail:</h3><a href="#">info@rempolimer.ru</a></div></div>',
        zoom: 11,
        icon: 'https://zhuravlev-vlad.github.io/Rempolimer/img/mark.png',
        animation: google.maps.Animation.DROP
    },{
        lat: 18.975,
        lon: 72.8258,
        title: 'Дистрибьютер 2',
        info: '<div><div class="address col-md-6"><h3>Адрес 2</h3><p>Описание</p><h3>Адрес:</h3><p>Казань, ул. Авиастроительная, дом 50, офис 4</p></div><div class="tel-email col-md-6"><h3>Телефон:</h3><p>+7 (495) 510-87-19</p><h3>E-mail:</h3><a href="#">info@rempolimer.ru</a></div></div>',
        zoom: 11,
        icon: 'https://zhuravlev-vlad.github.io/Rempolimer/img/mark.png',
        animation:google.maps.Animation.DROP
    },{
        lat: 30.975,
        lon: 72.8258,
        title: 'Дистрибьютер 3',
        info: '<div><div class="address col-md-6"><h3>Адрес 2</h3><p>Описание</p><h3>Адрес:</h3><p>Казань, ул. Авиастроительная, дом 50, офис 4</p></div><div class="tel-email col-md-6"><h3>Телефон:</h3><p>+7 (495) 510-87-19</p><h3>E-mail:</h3><a href="#">info@rempolimer.ru</a></div></div>',
        zoom: 11,
        icon: 'https://zhuravlev-vlad.github.io/Rempolimer/img/mark.png',
        animation:google.maps.Animation.DROP
    }
];
var LocsB = [
    {
        lat: 12.58,
        lon: 77.38,
        title: 'АВИОМ',
        info: '<div><div class="address col-md-6"><h3>АВИОМ</h3><p>Описание</p><h3>Адрес:</h3><p>Казань, ул. Авиастроительная, дом 50, офис 4</p></div><div class="tel-email col-md-6"><h3>Телефон:</h3><p>+7 (495) 510-87-19</p><h3>E-mail:</h3><a href="#">info@rempolimer.ru</a></div></div>',
        zoom: 11,
        icon: 'https://zhuravlev-vlad.github.io/Rempolimer/img/mark.png',
        animation: google.maps.Animation.DROP
    },{
        lat: 18.975,
        lon: 72.8258,
        title: 'Дистрибьютер 2',
        info: '<div><div class="address col-md-6"><h3>Адрес 2</h3><p>Описание</p><h3>Адрес:</h3><p>Казань, ул. Авиастроительная, дом 50, офис 4</p></div><div class="tel-email col-md-6"><h3>Телефон:</h3><p>+7 (495) 510-87-19</p><h3>E-mail:</h3><a href="#">info@rempolimer.ru</a></div></div>',
        zoom: 11,
        icon: 'https://zhuravlev-vlad.github.io/Rempolimer/img/mark.png',
        animation:google.maps.Animation.DROP
    },{
        lat: 30.975,
        lon: 72.8258,
        title: 'Дистрибьютер 3',
        info: '<div><div class="address col-md-6"><h3>Адрес 2</h3><p>Описание</p><h3>Адрес:</h3><p>Казань, ул. Авиастроительная, дом 50, офис 4</p></div><div class="tel-email col-md-6"><h3>Телефон:</h3><p>+7 (495) 510-87-19</p><h3>E-mail:</h3><a href="#">info@rempolimer.ru</a></div></div>',
        zoom: 11,
        icon: 'https://zhuravlev-vlad.github.io/Rempolimer/img/mark.png',
        animation:google.maps.Animation.DROP
    }
];
new Maplace({
    locations: LocsA,
    map_div: '#gmap-tabs1',
    controls_div: '#el1-1',
    controls_type: 'list',
    controls_on_map: false,
    show_infowindow: false,
    start: 1,
    afterShow: function(index, location, marker) {
        $('#info').html(location.info);
    }
}).Load();
new Maplace({
    locations: LocsB,
    map_div: '#gmap-tabs2',
    controls_div: '#el2-1',
    controls_type: 'list',
    controls_on_map: false,
    show_infowindow: false,
    start: 1,
    afterShow: function(index, location, marker) {
        $('#info').html(location.info);
    }
}).Load();
});


$(document).on('click', '.panel-title-link', function() {
    var id = 'gmap-tabs' + $(this).attr('data-foo')
    $('#' + id).addClass('dispblock').removeClass('display').siblings().addClass('display').removeClass('dispblock')
})

$('.panel-title-link').click(function(){
    $('.test').toggle({
        complete:function (){
            google.maps.event.trigger(Maplace, 'resize');
        },
        duration:'slow'
    });
})





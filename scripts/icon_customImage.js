ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938635, 30.323118],
            zoom: 16
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'NЁRDS DESIGN STUDIO',
            balloonContent: '191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/contacts-map-marker.png',
            iconImageSize: [160, 130],
            iconImageOffset: [-40, -120]
        })

    myMap.geoObjects
        .add(myPlacemark)
});
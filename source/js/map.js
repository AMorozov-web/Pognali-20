window.onload = function() {
  let pognalyMap;
  let pognalyPlaceMark;
  ymaps.ready({
      successCallback: function () {
        pognalyMap = new ymaps.Map("map", {
              center: [59.938653, 30.323115],
              zoom: 16,
              controls: [],
          },
          {
              suppressMapOpenBlock: true
          },
          {
              yandexMapAutoSwitch: true
          });

          pognalyPlaceMark = new ymaps.Placemark(
              [59.938653, 30.323115],
          {
              balloonContent: []
          },
          {
              openBalloonOnClick: false,

              iconLayout: 'default#image',

              iconImageHref: './img/map-marker.svg',

              iconImageSize: [50, 50],

              iconImageOffset: [-25, -25]

          });

          pognalyMap.behaviors.disable('scrollZoom');
          pognalyMap.geoObjects.add(pognalyPlaceMark);
      }
  });
};

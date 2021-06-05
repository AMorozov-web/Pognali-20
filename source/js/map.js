const mapsCall = () => ymaps.ready({
  successCallback: function () {
    const pognalyMap = new ymaps.Map("map", {
      center: [59.938441, 30.323098],
          zoom: 16,
          controls: [],
      },
      {
          suppressMapOpenBlock: true
      },
      {
          yandexMapAutoSwitch: true
      });

      const pognalyPlaceMark = new ymaps.Placemark(
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

window.addEventListener('load', () => mapsCall());

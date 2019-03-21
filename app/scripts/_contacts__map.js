/* eslint-disable */

'use strict';

ymaps.ready(init);

function init() {
  const mapCenter = [55.788938, 37.496964];
  const mapElement = document.getElementById('map');
  const mapOptions = {
    center: mapCenter,
    zoom: 16,
    controls: [],
  };

  const map = new ymaps.Map(mapElement, mapOptions);

  const fullscreenControlObject = new ymaps.control.FullscreenControl({
    options: {
      position: {
        top: 10,
        right: 10,
      },
    },
  });

  const zoomControlObject = new ymaps.control.ZoomControl({
    options: {
      position: {
        top: 10,
        left: 10,
      },
      size: 'small',
    },
  });

  const marker = new ymaps.Placemark(
    mapCenter,
    {
      balloonContentHeader: 'Руфсистем',
      balloonContentBody: 'Москва, ул. Маршала Бирюзова, 35 кор. 2, 1Б',
    },
    {
      preset: 'islands#redDotIcon',
    },
  );

  map.controls.add(zoomControlObject);
  map.controls.add(fullscreenControlObject);
  map.geoObjects.add(marker);
}

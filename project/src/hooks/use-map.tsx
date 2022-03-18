import {City} from 'types/city';
import {
  LatLng,
  Map,
  TileLayer
} from 'leaflet';
import {
  MutableRefObject,
  useEffect,
  useState
} from 'react';

type useMapProps = {
  mapRef: MutableRefObject<HTMLElement|null>;
  city: City;
}

function useMap({mapRef, city}: useMapProps): Map | null {
  const [map, setMap] = useState<Map|null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const mapInstance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );
      mapInstance.addLayer(layer);

      setMap(mapInstance);
    }

  }, [map, mapRef]);

  useEffect(() => {
    if (map instanceof Map) {
      map.setView(
        new LatLng(city.location.latitude, city.location.longitude),
        city.location.zoom,
      );
    }
  }, [city]);

  return map;
}

export {useMap};

import 'leaflet/dist/leaflet.css';
import {
  Icon,
  Marker
} from 'leaflet';
import {MarkerIconUrl} from 'settings/map';
import {Offers} from 'types/offer';
import {
  useEffect,
  useRef
} from 'react';
import {useMap} from 'hooks/use-map';

const activeMarkerIcon = new Icon({
  iconUrl: MarkerIconUrl.Active,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

const defaultMarkerIcon = new Icon({
  iconUrl: MarkerIconUrl.Default,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

type MapProps = {
  offers: Offers;
  activeOfferId: number;
}

function Map({offers, activeOfferId}: MapProps): JSX.Element {
  const city = offers[0].city;

  const mapRef = useRef(null);
  const map = useMap({mapRef, city});

  useEffect(() => {
    if (map) {
      offers.map((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker.setIcon(offer.id === activeOfferId ? activeMarkerIcon : defaultMarkerIcon).addTo(map);
      });
    }
  }, [map, offers, activeOfferId]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    />
  );
}

export {Map};

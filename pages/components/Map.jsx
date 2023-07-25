import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoidG9zaW4yMTIiLCJhIjoiY2xrOXB3aHB6MHNiMjNmcnR1ZW9lZzJlYyJ9.KTqqNANnbtfhDQ7A1BoHCw';

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // Add a Mapbox style URL here, or use your custom style
      center: [3.3792, 6.5244],
      zoom: 13,
      attributionControl: false,
    });

    // Optional: Add custom marker
    const marker = new mapboxgl.Marker().setLngLat([3.3792, 6.5244]).addTo(map);

    map.on('load', () => {
      const layersToRemove = ['background', 'watermark', 'hillshade'];
      layersToRemove.forEach((layer) => {
        if (map.getLayer(layer)) {
          map.removeLayer(layer);
        }
      });
    });

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {
        padding: 60,
      });
    }

    return () => map.remove(); // Cleanup function for when the component unmounts
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id='map'></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
  flex-1 h-96 md:h-1/2 // Adjust the height as per your requirements
`;

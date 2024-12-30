import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5hbmRtYWRoYXZhbiIsImEiOiJjbTM1ZDdkb3IwMmd6MnJzM3hzcms1d2hoIn0.cCetoCmmjyanlamLiKXrNg';

const MapComponent = ({ latitude, longitude }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 12,
    });

    new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);

    return () => map.remove();
  }, [latitude, longitude]);

  return <div ref={mapContainerRef} className="map-container" />;
};

export default MapComponent;
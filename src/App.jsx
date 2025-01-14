import { useRef } from "react";
import {
  LayersControl,
  MapContainer,
  Marker,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

const position = [52.51, 13.38];

const defaultCenter = [55.51, 73.38];

function App() {
  const mapRef = useRef();

  const mapboxUrl =
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=YOUR_MAPBOX_ACCESS_TOKEN";
  const esriUrl =
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

  const handleButtonClick = () => {
    if (mapRef.current) {
      const map = mapRef.current;
      map.flyTo(defaultCenter, 14, {
        duration: 3,
      });
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>test</button>

      <MapContainer
        ref={mapRef}
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <ZoomControl position="bottomright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} />

        <LayersControl position="topright">
          <LayersControl.BaseLayer name="Streets" checked>
            <TileLayer
              url={mapboxUrl}
              id="mapbox/streets-v11"
              maxZoom={28}
              tileSize={512}
              zoomOffset={-1}
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Satellite">
            <TileLayer
              url={esriUrl}
              maxZoom={20}
              tileSize={512}
              zoomOffset={-1}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default App;

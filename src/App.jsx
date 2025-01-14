import { useState, useRef } from 'react'
import { MapContainer, Marker, TileLayer, ZoomControl } from 'react-leaflet'
import { MapViewToggle } from './components'
import { toggleItem } from './utils'
import { TabsBar } from './components/TabsBar'

const position = [52.51, 13.38]
const defaultCenter = [55.51, 73.38]

function App() {
  const [activeView, setActiveView] = useState(toggleItem.map)
  const mapRef = useRef()

  const esriUrl =
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'

  const handleButtonClick = () => {
    if (mapRef.current) {
      const map = mapRef.current
      map.flyTo(defaultCenter, 14, {
        duration: 3
      })
    }
  }

  return (
    <div>
      <MapViewToggle activeView={activeView} onChangeToggle={setActiveView} />

      <TabsBar />

      <MapContainer
        className="map-container"
        ref={mapRef}
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <ZoomControl position="bottomright" />

        {activeView === toggleItem.map ? (
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        ) : (
          <TileLayer attribution="Imagery © Esri" url={esriUrl} />
        )}

        <Marker position={position} />
      </MapContainer>
    </div>
  )
}

export default App

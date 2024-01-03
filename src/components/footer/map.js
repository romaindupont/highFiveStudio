import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
 return (
  <div id="mapid">
    <MapContainer center={[49.187764, -0.360176]} zoom={16} scrollWheelZoom={false} style={{height:250+'px', width: 300+'px'}}>
      <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.187764, -0.360176]}>
        <Popup>
          HighFive Studio
        </Popup>
      </Marker>
    </MapContainer>
  </div>

)
}

export default Map;
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";

const bouncingIcon = new L.Icon({
  iconUrl: "/marker-icon.png",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -35],
  shadowUrl: "/marker-shadow.png",
});
type Location = {
  city: string;
  country: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
};

type MapProps = {
  locations: Location[];
};

export default function InteractiveMap({ locations }: MapProps) {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {locations.map((loc, idx) => (
        <Marker key={idx} position={[loc.latitude, loc.longitude]}>
          <Popup>
            <strong>{loc.city}, {loc.country}</strong><br />
            {loc.title}<br />
            {loc.description}
          </Popup>
          <Tooltip direction="top" offset={[0, -10]} opacity={0.9} permanent>
            {loc.city}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
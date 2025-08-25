"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import Papa from "papaparse";
import "leaflet/dist/leaflet.css";

type Location = {
  city: string;
  country: string;
  dates: string;
  purpose: string;
  latitude: number;
  longitude: number;
};

export default function InteractiveMap() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    Papa.parse("/locations/location.csv", {
      header: true,
      download: true,
      complete: (result) => {
        const parsed = (result.data as any[])
          .map((loc) => ({
            city: loc.city,
            country: loc.country,
            dates: loc.dates,
            purpose: loc.purpose,
            latitude: parseFloat(loc.latitude || '0'),
            longitude: parseFloat(loc.longitude || '0'),
          }))
          .filter((loc) => !isNaN(loc.latitude) && !isNaN(loc.longitude));
        setLocations(parsed);
      },
    });
  }, []);

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
            {loc.dates}<br />
            <em>{loc.purpose}</em>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}